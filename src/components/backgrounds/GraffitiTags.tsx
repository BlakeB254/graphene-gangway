export function GraffitiTags() {
  return (
    <svg
      className="urban-texture texture-graffiti absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <text
        x="320"
        y="280"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="72"
        fill="rgba(0,240,255,0.16)"
        transform="rotate(-8, 320, 280)"
        letterSpacing="8"
      >
        GG
      </text>
      <text
        x="1380"
        y="420"
        fontFamily="monospace"
        fontSize="14"
        fill="rgba(0,240,255,0.12)"
        transform="rotate(5, 1380, 420)"
        letterSpacing="4"
      >
        NORTH LAWNDALE
      </text>
      <text
        x="680"
        y="820"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="48"
        fill="rgba(0,240,255,0.14)"
        transform="rotate(-12, 680, 820)"
      >
        773
      </text>
      <circle cx="1600" cy="180" r="35" stroke="rgba(0,240,255,0.13)" strokeWidth="1.5" />
      <circle cx="1600" cy="180" r="20" stroke="rgba(0,240,255,0.08)" strokeWidth="1" />
      <line x1="260" y1="700" x2="290" y2="660" stroke="rgba(0,240,255,0.15)" strokeWidth="2" strokeLinecap="round" />
      <line x1="275" y1="700" x2="305" y2="660" stroke="rgba(0,240,255,0.15)" strokeWidth="2" strokeLinecap="round" />
      <line x1="290" y1="700" x2="320" y2="660" stroke="rgba(0,240,255,0.15)" strokeWidth="2" strokeLinecap="round" />
      <text
        x="960"
        y="950"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="28"
        fill="rgba(0,240,255,0.08)"
        textAnchor="middle"
        letterSpacing="12"
      >
        GRAPHENE
      </text>
    </svg>
  );
}
