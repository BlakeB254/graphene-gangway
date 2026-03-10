export function ChainLinkFence() {
  return (
    <svg
      className="urban-texture texture-chainlink absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <pattern id="chainlink" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0,12 L12,0 L24,12 L12,24 Z" stroke="rgba(0,240,255,0.18)" strokeWidth="0.8" fill="none" />
        </pattern>
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
          <rect x="1420" y="680" width="500" height="400" fill="url(#fade-br)" />
        </mask>
      </defs>
      <rect x="0" y="0" width="500" height="400" fill="url(#chainlink)" mask="url(#mask-tl)" />
      <rect x="1420" y="680" width="500" height="400" fill="url(#chainlink)" mask="url(#mask-br)" />
    </svg>
  );
}
