export function GraffitiTags() {
  return (
    <svg
      className="urban-texture texture-graffiti absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* Overspray — wide diffusion around paint edges */}
        <filter id="spray-haze" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>

        {/* Tighter glow for smaller elements */}
        <filter id="spray-tight" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
        </filter>

        {/* Paint texture — subtle noise to break up flat fills */}
        <filter id="paint-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" seed="7" />
          <feComposite in="SourceGraphic" in2="noise" operator="in" />
        </filter>

        {/* Drip distortion — organic wobble */}
        <filter id="drip-warp" x="-5%" y="0" width="110%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0 0.035" numOctaves="3" result="warp" seed="5" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Gradient for paint density — thicker at center, lighter at edges
            (simulates spray nozzle cone pattern) */}
        <radialGradient id="spray-density" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,240,255,1)" stopOpacity="1" />
          <stop offset="60%" stopColor="rgba(0,240,255,1)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="rgba(0,240,255,1)" stopOpacity="0.3" />
        </radialGradient>
      </defs>


      {/* ═══════════════════════════════════════════════
          MAIN PIECE — "Graphene Gangway"
          Full production piece, lower-right wall area.
          Angled upward-left (writers go up as they move
          right). Heavy overspray, thick strokes, drips,
          underline throw.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(-4, 1150, 800)">

        {/* Background cloud — the overspray halo that surrounds
            any large piece. A loose ellipse of diffused paint. */}
        <ellipse
          cx="1150" cy="800" rx="340" ry="110"
          fill="rgba(0,240,255,0.025)"
          filter="url(#spray-haze)"
        />

        {/* ── "Graphene" ── */}

        {/* Overspray layer */}
        <text
          x="880" y="775"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="rgba(0,240,255,0.05)"
          filter="url(#spray-haze)"
          letterSpacing="3"
        >
          Graphene
        </text>

        {/* Shadow / 3D offset — down-right */}
        <text
          x="885" y="780"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="rgba(0,240,255,0.035)"
          letterSpacing="3"
        >
          Graphene
        </text>

        {/* Main fill — strong, the dominant visual */}
        <text
          x="880" y="775"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="rgba(0,240,255,0.16)"
          letterSpacing="3"
        >
          Graphene
        </text>

        {/* Bright outline — gives that crisp spray edge */}
        <text
          x="880" y="775"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="none"
          stroke="rgba(0,240,255,0.24)"
          strokeWidth="0.7"
          letterSpacing="3"
        >
          Graphene
        </text>

        {/* ── "Gangway" — staggered below, shifted right ── */}

        <text
          x="990" y="900"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="rgba(0,240,255,0.05)"
          filter="url(#spray-haze)"
          letterSpacing="3"
        >
          Gangway
        </text>

        <text
          x="995" y="905"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="rgba(0,240,255,0.035)"
          letterSpacing="3"
        >
          Gangway
        </text>

        <text
          x="990" y="900"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="rgba(0,240,255,0.16)"
          letterSpacing="3"
        >
          Gangway
        </text>

        <text
          x="990" y="900"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="130"
          fill="none"
          stroke="rgba(0,240,255,0.24)"
          strokeWidth="0.7"
          letterSpacing="3"
        >
          Gangway
        </text>

        {/* ── Drip system — organic paint runs ── */}
        <g filter="url(#drip-warp)">
          {/* Long drip — the signature drip every piece has */}
          <path d="M960,785 L958,815 L957,848 L958,878 L956,910 L957,940 L955,965"
            stroke="rgba(0,240,255,0.13)" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="955" cy="970" rx="3" ry="3.5" fill="rgba(0,240,255,0.10)" />

          {/* Medium drip */}
          <path d="M1120,788 L1119,812 L1118,838 L1119,862"
            stroke="rgba(0,240,255,0.10)" strokeWidth="1.6" strokeLinecap="round" />
          <ellipse cx="1119" cy="867" rx="2.5" ry="3" fill="rgba(0,240,255,0.08)" />

          {/* Short drip */}
          <path d="M1280,782 L1279,800 L1280,818"
            stroke="rgba(0,240,255,0.08)" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="1280" cy="822" r="2" fill="rgba(0,240,255,0.07)" />

          {/* Drip from Gangway */}
          <path d="M1080,910 L1078,938 L1077,968 L1078,995 L1076,1020 L1077,1048"
            stroke="rgba(0,240,255,0.11)" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="1077" cy="1053" rx="2.8" ry="3.2" fill="rgba(0,240,255,0.09)" />

          {/* End drip from y */}
          <path d="M1350,908 L1348,932 L1349,958 L1348,982"
            stroke="rgba(0,240,255,0.09)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="1348" cy="987" r="2.3" fill="rgba(0,240,255,0.07)" />
        </g>

        {/* ── Underline throw — bold confident swoosh ── */}
        <path
          d="M975,925 C1050,920 1150,918 1250,916 C1320,915 1380,918 1420,924"
          stroke="rgba(0,240,255,0.14)" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* Underline flick at end — snaps upward */}
        <path
          d="M1420,924 C1430,920 1438,912 1445,900"
          stroke="rgba(0,240,255,0.12)" strokeWidth="2" strokeLinecap="round"
        />
      </g>


      {/* ═══════════════════════════════════════════════
          GG THROW-UP — upper-left
          A "throw-up" is a quick 2-letter piece done in
          bubble style. Outline + fill + highlights.
          Tilted opposite the main piece for tension.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(7, 300, 280)">
        {/* Spray cloud */}
        <ellipse cx="300" cy="270" rx="140" ry="80"
          fill="rgba(0,240,255,0.02)" filter="url(#spray-haze)" />

        {/* 3D shadow — thick offset outline */}
        <text
          x="188" y="325"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="200"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.05)"
          strokeWidth="8"
          strokeLinejoin="round"
          letterSpacing="12"
        >
          GG
        </text>

        {/* Main bubble outline */}
        <text
          x="185" y="322"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="200"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.20)"
          strokeWidth="3.5"
          strokeLinejoin="round"
          letterSpacing="12"
        >
          GG
        </text>

        {/* Interior fill — translucent wash */}
        <text
          x="185" y="322"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="200"
          fontWeight="700"
          fill="rgba(0,240,255,0.05)"
          letterSpacing="12"
        >
          GG
        </text>

        {/* Cap highlight — bright edge on top-left of letters */}
        <text
          x="183" y="320"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="200"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.28)"
          strokeWidth="0.6"
          letterSpacing="12"
        >
          GG
        </text>

        {/* Drips from bottom of G letters */}
        <g filter="url(#drip-warp)">
          <path d="M232,340 L230,375 L229,408 L230,435"
            stroke="rgba(0,240,255,0.14)" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="230" cy="440" rx="3.2" ry="3.8" fill="rgba(0,240,255,0.11)" />

          <path d="M382,338 L380,365 L381,390"
            stroke="rgba(0,240,255,0.11)" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="381" cy="395" r="2.5" fill="rgba(0,240,255,0.09)" />
        </g>

        {/* Crown above the GG — king status */}
        <g transform="translate(260, 120)" opacity="0.18">
          <path
            d="M0,30 L6,8 L16,24 L26,0 L36,24 L46,8 L52,30"
            stroke="rgba(0,240,255,1)" strokeWidth="1.5" fill="none"
            strokeLinejoin="round" strokeLinecap="round"
          />
          <circle cx="6" cy="4" r="2" fill="rgba(0,240,255,1)" />
          <circle cx="26" cy="-4" r="2" fill="rgba(0,240,255,1)" />
          <circle cx="46" cy="4" r="2" fill="rgba(0,240,255,1)" />
        </g>
      </g>


      {/* ═══════════════════════════════════════════════
          SMALL STENCIL GG — upper-right
          Precise, clean, like a stenciled mark.
          Smaller version of the navbar GG logo.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(-2, 1640, 150)">
        {/* Subtle glow behind stencil */}
        <text
          x="1600" y="170"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="58"
          fontWeight="700"
          fill="rgba(0,240,255,0.03)"
          filter="url(#spray-tight)"
          letterSpacing="5"
        >
          GG
        </text>

        {/* Stencil outline */}
        <text
          x="1600" y="170"
          fontFamily="Caveat, var(--font-script), cursive"
          fontSize="58"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.18)"
          strokeWidth="1.8"
          letterSpacing="5"
        >
          GG
        </text>

        {/* Stencil overspray bleed — tiny dots that escape the template */}
        <circle cx="1596" cy="155" r="2.5" fill="rgba(0,240,255,0.03)" />
        <circle cx="1665" cy="162" r="3" fill="rgba(0,240,255,0.025)" />
        <circle cx="1598" cy="178" r="2" fill="rgba(0,240,255,0.02)" />
        <circle cx="1668" cy="148" r="1.8" fill="rgba(0,240,255,0.025)" />
      </g>


      {/* ═══════════════════════════════════════════════
          CULTURE ELEMENTS — the ecosystem around the pieces
          ═══════════════════════════════════════════════ */}

      {/* "773" area code — Bebas Neue, tilted */}
      <text
        x="640" y="185"
        fontFamily="'Bebas Neue', var(--font-display), sans-serif"
        fontSize="44"
        fill="rgba(0,240,255,0.11)"
        letterSpacing="7"
        transform="rotate(-8, 640, 185)"
      >
        773
      </text>
      {/* Underline under 773 */}
      <line x1="635" y1="192" x2="712" y2="188"
        stroke="rgba(0,240,255,0.08)" strokeWidth="1.2" strokeLinecap="round"
        transform="rotate(-8, 640, 192)" />

      {/* "NORTH LAWNDALE" — monospace stencil style */}
      <text
        x="1340" y="490"
        fontFamily="'JetBrains Mono', var(--font-mono), monospace"
        fontSize="12"
        fill="rgba(0,240,255,0.10)"
        letterSpacing="6"
        transform="rotate(3, 1340, 490)"
      >
        NORTH LAWNDALE
      </text>

      {/* "EST." with year — small detail tag */}
      <text
        x="1700" y="850"
        fontFamily="'Bebas Neue', var(--font-display), sans-serif"
        fontSize="20"
        fill="rgba(0,240,255,0.07)"
        letterSpacing="3"
        transform="rotate(-5, 1700, 850)"
      >
        EST. 2025
      </text>

      {/* Tally marks — ||||\  (five-bar gate) */}
      <g transform="rotate(-6, 1710, 590)" opacity="0.13">
        <line x1="1690" y1="572" x2="1690" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1698" y1="572" x2="1698" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1706" y1="572" x2="1706" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1714" y1="572" x2="1714" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1685" y1="604" x2="1719" y2="578" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Arrow — classic angular graffiti arrow */}
      <g transform="translate(540, 940) rotate(6)" opacity="0.11">
        <path
          d="M0,14 L50,14 L50,5 L72,18 L50,31 L50,22 L0,22 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="1.3" fill="none"
          strokeLinejoin="round"
        />
      </g>

      {/* Second arrow — pointing left, smaller */}
      <g transform="translate(160, 680) rotate(-10) scale(-0.7, 0.7)" opacity="0.08">
        <path
          d="M0,14 L50,14 L50,5 L72,18 L50,31 L50,22 L0,22 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="1.5" fill="none"
          strokeLinejoin="round"
        />
      </g>

      {/* Star burst */}
      <g transform="translate(1520, 930)" opacity="0.09">
        <path d="M0,-12 L3.5,-4 L12,-4 L5,2 L7,11 L0,6 L-7,11 L-5,2 L-12,-4 L-3.5,-4 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="0.8" fill="none" />
      </g>

      {/* Circle tag — "heaven spot" high up */}
      <circle cx="82" cy="540" r="24"
        stroke="rgba(0,240,255,0.09)" strokeWidth="1.3" />
      <text
        x="82" y="548"
        fontFamily="Caveat, var(--font-script), cursive"
        fontSize="26"
        fontWeight="700"
        fill="rgba(0,240,255,0.11)"
        textAnchor="middle"
      >
        GG
      </text>

      {/* Splatter clusters — overspray that landed */}
      <g opacity="0.06">
        <circle cx="920" cy="950" r="1.8" fill="rgba(0,240,255,1)" />
        <circle cx="928" cy="955" r="1.2" fill="rgba(0,240,255,1)" />
        <circle cx="914" cy="958" r="0.9" fill="rgba(0,240,255,1)" />
        <circle cx="935" cy="945" r="1.4" fill="rgba(0,240,255,1)" />
        <circle cx="908" cy="942" r="0.8" fill="rgba(0,240,255,1)" />
        <circle cx="940" cy="960" r="1" fill="rgba(0,240,255,1)" />
      </g>

      <g opacity="0.05">
        <circle cx="145" cy="380" r="1.5" fill="rgba(0,240,255,1)" />
        <circle cx="152" cy="385" r="1" fill="rgba(0,240,255,1)" />
        <circle cx="140" cy="388" r="1.2" fill="rgba(0,240,255,1)" />
        <circle cx="158" cy="378" r="0.8" fill="rgba(0,240,255,1)" />
      </g>

      {/* Horizontal line tags — quick marks with can */}
      <line x1="480" y1="520" x2="540" y2="518"
        stroke="rgba(0,240,255,0.07)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="485" y1="528" x2="535" y2="526"
        stroke="rgba(0,240,255,0.05)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
