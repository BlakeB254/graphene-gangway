"use client";

import { SidewalkCracks } from "./SidewalkCracks";
import { GraffitiTags } from "./GraffitiTags";

export function UrbanTextures() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <SidewalkCracks />
      <GraffitiTags />
    </div>
  );
}
