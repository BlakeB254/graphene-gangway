export function CircuitTraces() {
  return (
    <svg
      className="urban-texture texture-circuits absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <path
        d="M600,200 L750,200 L750,320 L900,320 L900,200 L1050,200"
        stroke="rgba(0,240,255,0.20)"
        strokeWidth="1"
        strokeLinecap="square"
      />
      <circle cx="600" cy="200" r="3" fill="rgba(0,240,255,0.25)" />
      <circle cx="750" cy="320" r="3" fill="rgba(0,240,255,0.25)" />
      <circle cx="900" cy="200" r="3" fill="rgba(0,240,255,0.25)" />
      <circle cx="1050" cy="200" r="3" fill="rgba(0,240,255,0.25)" />

      <path
        d="M1200,650 L1200,750 L1350,750 L1350,650 L1500,650 L1500,800"
        stroke="rgba(0,240,255,0.18)"
        strokeWidth="1"
        strokeLinecap="square"
      />
      <circle cx="1200" cy="650" r="3" fill="rgba(0,240,255,0.22)" />
      <circle cx="1350" cy="750" r="3" fill="rgba(0,240,255,0.22)" />
      <circle cx="1500" cy="650" r="3" fill="rgba(0,240,255,0.22)" />
      <circle cx="1500" cy="800" r="3" fill="rgba(0,240,255,0.22)" />

      <path
        d="M200,550 L350,550 L350,480 L480,480"
        stroke="rgba(0,240,255,0.16)"
        strokeWidth="1"
        strokeLinecap="square"
      />
      <circle cx="200" cy="550" r="2.5" fill="rgba(0,240,255,0.20)" />
      <circle cx="350" cy="480" r="2.5" fill="rgba(0,240,255,0.20)" />
      <circle cx="480" cy="480" r="2.5" fill="rgba(0,240,255,0.20)" />
    </svg>
  );
}
