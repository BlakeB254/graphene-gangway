"use client";

export function UrbanTextures() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Sidewalk Cracks ── */}
      <svg
        className="urban-texture texture-cracks absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Main fracture — left side, vertical */}
        <path
          d="M180,0 L185,55 L172,110 L190,175 L178,240 L195,320 L180,400 L188,485 L170,570 L192,660 L175,750 L190,840 L178,930 L185,1080"
          stroke="rgba(0,240,255,0.22)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Branch — mid-left horizontal */}
        <path
          d="M185,175 L250,180 L330,170 L420,178 L510,168"
          stroke="rgba(0,240,255,0.15)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Second fracture — center */}
        <path
          d="M820,0 L815,80 L828,160 L810,250 L825,340 L812,440 L830,530 L818,620 L835,710 L820,800 L828,890 L815,980 L822,1080"
          stroke="rgba(0,240,255,0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Branch — center horizontal */}
        <path
          d="M825,340 L760,348 L690,335 L610,345 L540,338"
          stroke="rgba(0,240,255,0.12)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Short cross-crack */}
        <path
          d="M815,250 L880,258 L950,245 L1020,255"
          stroke="rgba(0,240,255,0.14)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Third fracture — right side */}
        <path
          d="M1520,0 L1515,70 L1528,150 L1510,240 L1525,330 L1512,430 L1530,520 L1518,610 L1535,700 L1520,790 L1528,880 L1515,970 L1522,1080"
          stroke="rgba(0,240,255,0.20)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Branch — right horizontal */}
        <path
          d="M1525,330 L1460,338 L1390,325 L1310,335"
          stroke="rgba(0,240,255,0.13)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Small web crack */}
        <path
          d="M1510,240 L1570,248 L1640,238 L1700,245"
          stroke="rgba(0,240,255,0.11)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        {/* Micro cracks */}
        <path
          d="M400,600 L408,640 L395,680 L405,720"
          stroke="rgba(0,240,255,0.10)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M1200,180 L1208,220 L1195,260"
          stroke="rgba(0,240,255,0.09)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>

      {/* ── Graffiti Tags ── */}
      <svg
        className="urban-texture texture-graffiti absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* "GG" mark — large, tilted */}
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
        {/* "NORTH LAWNDALE" — small tag */}
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
        {/* "773" — area code */}
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
        {/* Abstract circle mark */}
        <circle
          cx="1600"
          cy="180"
          r="35"
          stroke="rgba(0,240,255,0.13)"
          strokeWidth="1.5"
        />
        <circle
          cx="1600"
          cy="180"
          r="20"
          stroke="rgba(0,240,255,0.08)"
          strokeWidth="1"
        />
        {/* Slash marks */}
        <line
          x1="260"
          y1="700"
          x2="290"
          y2="660"
          stroke="rgba(0,240,255,0.15)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="275"
          y1="700"
          x2="305"
          y2="660"
          stroke="rgba(0,240,255,0.15)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="290"
          y1="700"
          x2="320"
          y2="660"
          stroke="rgba(0,240,255,0.15)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* "GRAPHENE" faint watermark */}
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

      {/* ── Chain-Link Fence ── */}
      <svg
        className="urban-texture texture-chainlink absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <pattern
            id="chainlink"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,12 L12,0 L24,12 L12,24 Z"
              stroke="rgba(0,240,255,0.18)"
              strokeWidth="0.8"
              fill="none"
            />
          </pattern>
          {/* Fade masks for fragments */}
          <radialGradient id="fade-tl" cx="0" cy="0" r="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fade-br" cx="1" cy="1" r="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="mask-tl">
            <rect x="0" y="0" width="500" height="400" fill="url(#fade-tl)" />
          </mask>
          <mask id="mask-br">
            <rect
              x="1420"
              y="680"
              width="500"
              height="400"
              fill="url(#fade-br)"
            />
          </mask>
        </defs>
        {/* Top-left fragment */}
        <rect
          x="0"
          y="0"
          width="500"
          height="400"
          fill="url(#chainlink)"
          mask="url(#mask-tl)"
        />
        {/* Bottom-right fragment */}
        <rect
          x="1420"
          y="680"
          width="500"
          height="400"
          fill="url(#chainlink)"
          mask="url(#mask-br)"
        />
      </svg>

      {/* ── Circuit Traces ── */}
      <svg
        className="urban-texture texture-circuits absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Trace 1 — horizontal run with vertical drops */}
        <path
          d="M600,200 L750,200 L750,320 L900,320 L900,200 L1050,200"
          stroke="rgba(0,240,255,0.20)"
          strokeWidth="1"
          strokeLinecap="square"
        />
        {/* Nodes */}
        <circle cx="600" cy="200" r="3" fill="rgba(0,240,255,0.25)" />
        <circle cx="750" cy="320" r="3" fill="rgba(0,240,255,0.25)" />
        <circle cx="900" cy="200" r="3" fill="rgba(0,240,255,0.25)" />
        <circle cx="1050" cy="200" r="3" fill="rgba(0,240,255,0.25)" />

        {/* Trace 2 — lower right area */}
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

        {/* Trace 3 — small fragment, mid-left */}
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

      {/* ── Spray Paint Halos ── */}
      <div className="urban-texture texture-spray absolute inset-0">
        <div
          className="absolute h-[200px] w-[200px] rounded-full"
          style={{
            left: "15%",
            top: "35%",
            background:
              "radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(0,240,255,0.04) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[160px] w-[160px] rounded-full"
          style={{
            left: "72%",
            top: "60%",
            background:
              "radial-gradient(circle, rgba(0,240,255,0.10) 0%, rgba(0,240,255,0.03) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[240px] w-[240px] rounded-full"
          style={{
            left: "50%",
            top: "15%",
            background:
              "radial-gradient(circle, rgba(0,240,255,0.08) 0%, rgba(0,240,255,0.02) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[140px] w-[140px] rounded-full"
          style={{
            left: "85%",
            top: "80%",
            background:
              "radial-gradient(circle, rgba(0,240,255,0.14) 0%, rgba(0,240,255,0.05) 35%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
