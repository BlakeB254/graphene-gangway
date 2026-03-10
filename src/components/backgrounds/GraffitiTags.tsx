export function GraffitiTags() {
  return (
    <svg
      className="urban-texture texture-graffiti absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* Overspray — wide diffusion simulating aerosol mist */}
        <filter id="spray-haze" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>

        {/* Tighter glow for small elements */}
        <filter id="spray-tight" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>

        {/* Subtle roughness for drip edges */}
        <filter id="drip-warp" x="-5%" y="0" width="110%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0 0.03" numOctaves="3" result="warp" seed="5" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Fill gradient — inner glow effect for filled letters */}
        <linearGradient id="fill-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,240,255,1)" stopOpacity="0.12" />
          <stop offset="50%" stopColor="rgba(0,240,255,1)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="rgba(0,240,255,1)" stopOpacity="0.04" />
        </linearGradient>
      </defs>


      {/* ═══════════════════════════════════════════════
          MAIN PIECE — "Graphene Gangway"
          The hero tag. Lower-right area with a slight
          upward climb. Layered spray technique:
          haze cloud → 3D drop → main fill → outline →
          highlight cap → drips → underline.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(-4, 1150, 810)">

        {/* Haze cloud — the atmospheric overspray envelope */}
        <ellipse cx="1140" cy="810" rx="360" ry="120"
          fill="rgba(0,240,255,0.02)" filter="url(#spray-haze)" />

        {/* ── GRAPHENE ── */}

        {/* 3D drop shadow — offset +5,+5 */}
        <text
          x="855" y="780"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="rgba(0,240,255,0.03)"
          stroke="rgba(0,240,255,0.04)"
          strokeWidth="4"
          strokeLinejoin="round"
          letterSpacing="2"
        >
          Graphene
        </text>

        {/* Fill — solid interior with gradient density */}
        <text
          x="850" y="775"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="url(#fill-fade)"
          letterSpacing="2"
        >
          Graphene
        </text>

        {/* Outline — the defining edge, bold */}
        <text
          x="850" y="775"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="none"
          stroke="rgba(0,240,255,0.22)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          letterSpacing="2"
        >
          Graphene
        </text>

        {/* Highlight cap — bright thin line, top-left bias */}
        <text
          x="848" y="773"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="none"
          stroke="rgba(0,240,255,0.30)"
          strokeWidth="0.5"
          letterSpacing="2"
        >
          Graphene
        </text>


        {/* ── GANGWAY ── */}

        {/* 3D drop shadow */}
        <text
          x="965" y="910"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="rgba(0,240,255,0.03)"
          stroke="rgba(0,240,255,0.04)"
          strokeWidth="4"
          strokeLinejoin="round"
          letterSpacing="2"
        >
          Gangway
        </text>

        {/* Fill */}
        <text
          x="960" y="905"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="url(#fill-fade)"
          letterSpacing="2"
        >
          Gangway
        </text>

        {/* Outline */}
        <text
          x="960" y="905"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="none"
          stroke="rgba(0,240,255,0.22)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          letterSpacing="2"
        >
          Gangway
        </text>

        {/* Highlight cap */}
        <text
          x="958" y="903"
          fontFamily="Caveat, cursive"
          fontSize="140"
          fill="none"
          stroke="rgba(0,240,255,0.30)"
          strokeWidth="0.5"
          letterSpacing="2"
        >
          Gangway
        </text>


        {/* ── Drip system ── */}
        <g filter="url(#drip-warp)">
          {/* Primary drip — long, from Graphene */}
          <path d="M935,790 Q934,830 933,860 Q932,895 933,930 Q932,955 932,975"
            stroke="rgba(0,240,255,0.14)" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="932" cy="981" rx="3.5" ry="4" fill="rgba(0,240,255,0.11)" />

          {/* Secondary drip — medium */}
          <path d="M1100,792 Q1099,822 1098,850 Q1099,878 1098,900"
            stroke="rgba(0,240,255,0.11)" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="1098" cy="906" rx="2.8" ry="3.2" fill="rgba(0,240,255,0.09)" />

          {/* Tertiary drip — short */}
          <path d="M1300,786 Q1299,808 1300,830"
            stroke="rgba(0,240,255,0.08)" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="1300" cy="835" r="2.2" fill="rgba(0,240,255,0.07)" />

          {/* Gangway drip — long */}
          <path d="M1060,918 Q1058,950 1057,982 Q1058,1012 1057,1042 Q1058,1065 1057,1085"
            stroke="rgba(0,240,255,0.12)" strokeWidth="2" strokeLinecap="round" />

          {/* Gangway end drip */}
          <path d="M1370,915 Q1368,942 1369,970 Q1368,995 1368,1015"
            stroke="rgba(0,240,255,0.10)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="1368" cy="1020" r="2.5" fill="rgba(0,240,255,0.08)" />
        </g>

        {/* ── Underline swoosh with terminal flick ── */}
        <path
          d="M945,935 Q1060,928 1200,925 Q1320,923 1400,928 Q1430,930 1445,925"
          stroke="rgba(0,240,255,0.16)" strokeWidth="2.8" strokeLinecap="round"
        />
        <path
          d="M1445,925 Q1452,918 1458,905 Q1462,895 1465,882"
          stroke="rgba(0,240,255,0.13)" strokeWidth="2.2" strokeLinecap="round"
        />

        {/* ── Force lines — speed marks radiating from piece ── */}
        <line x1="830" y1="750" x2="800" y2="738"
          stroke="rgba(0,240,255,0.08)" strokeWidth="1" strokeLinecap="round" />
        <line x1="828" y1="762" x2="795" y2="755"
          stroke="rgba(0,240,255,0.06)" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="1470" y1="870" x2="1502" y2="862"
          stroke="rgba(0,240,255,0.07)" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="1468" y1="882" x2="1498" y2="878"
          stroke="rgba(0,240,255,0.05)" strokeWidth="0.7" strokeLinecap="round" />
      </g>


      {/* ═══════════════════════════════════════════════
          GG THROW-UP — upper-left
          Bubble-style two-letter piece with crown.
          The crown marks the writer as "king" of the spot.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(7, 310, 290)">
        {/* Spray cloud */}
        <ellipse cx="310" cy="280" rx="155" ry="95"
          fill="rgba(0,240,255,0.018)" filter="url(#spray-haze)" />

        {/* ── Crown — above the piece ── */}
        <g transform="translate(255, 108)">
          {/* Crown overspray */}
          <path
            d="M0,35 L8,8 L20,28 L32,0 L44,28 L56,8 L64,35"
            stroke="rgba(0,240,255,0.06)" strokeWidth="5" fill="none"
            strokeLinejoin="round" filter="url(#spray-tight)"
          />
          {/* Crown outline */}
          <path
            d="M0,35 L8,8 L20,28 L32,0 L44,28 L56,8 L64,35"
            stroke="rgba(0,240,255,0.22)" strokeWidth="1.8" fill="none"
            strokeLinejoin="round" strokeLinecap="round"
          />
          {/* Crown base */}
          <line x1="-2" y1="35" x2="66" y2="35"
            stroke="rgba(0,240,255,0.18)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Jewels at tips */}
          <circle cx="8" cy="4" r="2.5" fill="rgba(0,240,255,0.20)" />
          <circle cx="32" cy="-4" r="2.5" fill="rgba(0,240,255,0.22)" />
          <circle cx="56" cy="4" r="2.5" fill="rgba(0,240,255,0.20)" />
        </g>

        {/* 3D shadow */}
        <text
          x="192" y="332"
          fontFamily="Caveat, cursive"
          fontSize="210"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.04)"
          strokeWidth="10"
          strokeLinejoin="round"
          letterSpacing="10"
        >
          GG
        </text>

        {/* Main bubble outline — thick and confident */}
        <text
          x="188" y="328"
          fontFamily="Caveat, cursive"
          fontSize="210"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.22)"
          strokeWidth="4"
          strokeLinejoin="round"
          letterSpacing="10"
        >
          GG
        </text>

        {/* Fill — translucent interior */}
        <text
          x="188" y="328"
          fontFamily="Caveat, cursive"
          fontSize="210"
          fontWeight="700"
          fill="rgba(0,240,255,0.04)"
          letterSpacing="10"
        >
          GG
        </text>

        {/* Highlight cap — crisp bright edge */}
        <text
          x="186" y="326"
          fontFamily="Caveat, cursive"
          fontSize="210"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.32)"
          strokeWidth="0.6"
          letterSpacing="10"
        >
          GG
        </text>

        {/* Inner shine line — a curved highlight inside each letter */}
        <path d="M220,260 Q230,240 250,250"
          stroke="rgba(0,240,255,0.15)" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M370,260 Q380,240 400,250"
          stroke="rgba(0,240,255,0.15)" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Drips */}
        <g filter="url(#drip-warp)">
          <path d="M240,348 Q238,385 237,420 Q238,450 237,475"
            stroke="rgba(0,240,255,0.15)" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="237" cy="481" rx="3.8" ry="4.5" fill="rgba(0,240,255,0.12)" />

          <path d="M395,345 Q393,378 394,408 Q393,432 393,450"
            stroke="rgba(0,240,255,0.12)" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="393" cy="455" rx="3" ry="3.5" fill="rgba(0,240,255,0.09)" />

          {/* Thin runoff drip */}
          <path d="M305,350 Q304,372 303,392"
            stroke="rgba(0,240,255,0.08)" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="303" cy="396" r="1.8" fill="rgba(0,240,255,0.06)" />
        </g>
      </g>


      {/* ═══════════════════════════════════════════════
          SMALL STENCIL GG — upper-right
          Clean, precise — like the navbar mark was
          spray-painted through a stencil.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(-2, 1640, 155)">
        <text
          x="1600" y="175"
          fontFamily="Caveat, cursive"
          fontSize="60"
          fontWeight="700"
          fill="rgba(0,240,255,0.03)"
          filter="url(#spray-tight)"
          letterSpacing="5"
        >
          GG
        </text>

        <text
          x="1600" y="175"
          fontFamily="Caveat, cursive"
          fontSize="60"
          fontWeight="700"
          fill="rgba(0,240,255,0.06)"
          stroke="rgba(0,240,255,0.20)"
          strokeWidth="1.5"
          letterSpacing="5"
        >
          GG
        </text>

        {/* Stencil edge bleed */}
        <circle cx="1596" cy="158" r="2.8" fill="rgba(0,240,255,0.025)" />
        <circle cx="1668" cy="165" r="3.2" fill="rgba(0,240,255,0.02)" />
        <circle cx="1594" cy="180" r="2" fill="rgba(0,240,255,0.02)" />
      </g>


      {/* ═══════════════════════════════════════════════
          CULTURE ELEMENTS
          ═══════════════════════════════════════════════ */}

      {/* "773" area code */}
      <g transform="rotate(-8, 650, 185)">
        <text
          x="640" y="190"
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="46"
          fill="rgba(0,240,255,0.12)"
          letterSpacing="8"
        >
          773
        </text>
        <line x1="636" y1="198" x2="718" y2="198"
          stroke="rgba(0,240,255,0.09)" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      {/* "NORTH LAWNDALE" stencil text */}
      <text
        x="1340" y="492"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="12"
        fill="rgba(0,240,255,0.10)"
        letterSpacing="6"
        transform="rotate(3, 1340, 492)"
      >
        NORTH LAWNDALE
      </text>

      {/* "EST. 2025" */}
      <text
        x="1705" y="855"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="18"
        fill="rgba(0,240,255,0.07)"
        letterSpacing="3"
        transform="rotate(-4, 1705, 855)"
      >
        EST. 2025
      </text>

      {/* Tally marks */}
      <g transform="rotate(-6, 1710, 590)" opacity="0.14">
        <line x1="1690" y1="572" x2="1690" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="1699" y1="572" x2="1699" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="1708" y1="572" x2="1708" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="1717" y1="572" x2="1717" y2="610" stroke="rgba(0,240,255,1)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="1685" y1="604" x2="1722" y2="578" stroke="rgba(0,240,255,1)" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* Graffiti arrow — bold angular */}
      <g transform="translate(545, 945) rotate(5)" opacity="0.12">
        <path
          d="M0,15 L55,15 L55,5 L78,20 L55,35 L55,25 L0,25 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="1.5" fill="none"
          strokeLinejoin="round"
        />
      </g>

      {/* Left-pointing arrow */}
      <g transform="translate(165, 685) rotate(-8) scale(-0.65, 0.65)" opacity="0.09">
        <path
          d="M0,15 L55,15 L55,5 L78,20 L55,35 L55,25 L0,25 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="1.8" fill="none"
          strokeLinejoin="round"
        />
      </g>

      {/* Star burst */}
      <g transform="translate(1525, 935)" opacity="0.10">
        <path d="M0,-13 L4,-4.5 L13,-4.5 L5.5,1.5 L8,12 L0,6.5 L-8,12 L-5.5,1.5 L-13,-4.5 L-4,-4.5 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="0.9" fill="none" />
      </g>

      {/* Circle tag — "heaven" spot */}
      <circle cx="82" cy="545" r="25"
        stroke="rgba(0,240,255,0.10)" strokeWidth="1.4" />
      <text
        x="82" y="553"
        fontFamily="Caveat, cursive"
        fontSize="28"
        fontWeight="700"
        fill="rgba(0,240,255,0.12)"
        textAnchor="middle"
      >
        GG
      </text>

      {/* Splatter clusters */}
      <g opacity="0.07">
        <circle cx="915" cy="955" r="2" fill="rgba(0,240,255,1)" />
        <circle cx="924" cy="960" r="1.4" fill="rgba(0,240,255,1)" />
        <circle cx="908" cy="962" r="1" fill="rgba(0,240,255,1)" />
        <circle cx="932" cy="950" r="1.6" fill="rgba(0,240,255,1)" />
        <circle cx="902" cy="948" r="0.9" fill="rgba(0,240,255,1)" />
        <circle cx="938" cy="965" r="1.2" fill="rgba(0,240,255,1)" />
      </g>

      <g opacity="0.05">
        <circle cx="148" cy="395" r="1.6" fill="rgba(0,240,255,1)" />
        <circle cx="156" cy="400" r="1.1" fill="rgba(0,240,255,1)" />
        <circle cx="142" cy="402" r="1.3" fill="rgba(0,240,255,1)" />
        <circle cx="162" cy="392" r="0.9" fill="rgba(0,240,255,1)" />
      </g>

      {/* Line tags — quick horizontal marks */}
      <line x1="482" y1="525" x2="548" y2="522"
        stroke="rgba(0,240,255,0.08)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="487" y1="534" x2="542" y2="531"
        stroke="rgba(0,240,255,0.05)" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
