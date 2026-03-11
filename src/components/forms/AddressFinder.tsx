"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Script from "next/script";
import { MapPin, X } from "lucide-react";
import { cn } from "@/lib/utils";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export interface AddressData {
  formatted: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  lat?: number;
  lng?: number;
}

interface AddressFinderProps {
  name?: string;
  value?: string;
  onChange?: (address: AddressData | null) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

function parsePlace(place: google.maps.places.PlaceResult): AddressData {
  const components = place.address_components || [];
  const get = (type: string) =>
    components.find((c) => c.types.includes(type))?.long_name || "";
  const getShort = (type: string) =>
    components.find((c) => c.types.includes(type))?.short_name || "";

  return {
    formatted: place.formatted_address || "",
    street: `${get("street_number")} ${get("route")}`.trim(),
    city: get("locality") || get("sublocality_level_1") || get("administrative_area_level_2"),
    state: getShort("administrative_area_level_1"),
    zip: get("postal_code"),
    country: getShort("country"),
    lat: place.geometry?.location?.lat(),
    lng: place.geometry?.location?.lng(),
  };
}

export function AddressFinder({
  name = "address",
  value,
  onChange,
  placeholder = "Start typing an address...",
  required = false,
  className,
}: AddressFinderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [inputValue, setInputValue] = useState(value || "");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const initAutocomplete = useCallback(() => {
    if (!inputRef.current || autocompleteRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      types: ["address"],
      fields: ["address_components", "formatted_address", "geometry"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.address_components) return;

      const parsed = parsePlace(place);
      setInputValue(parsed.formatted);
      onChange?.(parsed);
    });

    autocompleteRef.current = autocomplete;
  }, [onChange]);

  useEffect(() => {
    if (scriptLoaded && GOOGLE_MAPS_API_KEY) {
      initAutocomplete();
    }
  }, [scriptLoaded, initAutocomplete]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, []);

  function handleClear() {
    setInputValue("");
    onChange?.(null);
    inputRef.current?.focus();
  }

  // Fallback to plain text input when no API key
  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <div className={cn("relative", className)}>
        <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ice-white/30" />
        <input
          ref={inputRef}
          name={name}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange?.({
              formatted: e.target.value,
              street: "",
              city: "",
              state: "",
              zip: "",
              country: "",
            });
          }}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-lg border border-dark-mid bg-dark-deep py-3 pl-10 pr-4 text-sm text-ice-white placeholder-ice-white/30 transition-colors focus:border-cyan-neon/50 focus:outline-none"
          autoComplete="street-address"
        />
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
      <div className={cn("relative", className)}>
        <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ice-white/30" />
        <input
          ref={inputRef}
          name={name}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-lg border border-dark-mid bg-dark-deep py-3 pl-10 pr-10 text-sm text-ice-white placeholder-ice-white/30 transition-colors focus:border-cyan-neon/50 focus:outline-none"
          autoComplete="off"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ice-white/30 hover:text-ice-white/60"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </>
  );
}
