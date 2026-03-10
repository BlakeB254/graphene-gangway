export function GraffitiTags() {
  return (
    <svg
      className="urban-texture texture-graffiti absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* Overspray blur — simulates paint diffusion around edges */}
        <filter id="overspray" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
        </filter>

        {/* Tighter glow for text edges */}
        <filter id="text-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>

        {/* Paint drip filter — slight horizontal wobble */}
        <filter id="drip-wobble" x="-5%" y="0" width="110%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0 0.04" numOctaves="2" result="turbulence" seed="3" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>


      {/* ═══════════════════════════════════════════════
          MAIN TAG — "Graphene Gangway"
          Large, wall-spanning tag using the logo's Caveat
          script font. Positioned lower-right with a slight
          upward angle (tags climb walls). Multi-layer:
          overspray → shadow → fill → highlight → drips.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(-5, 1200, 780)">
        {/* Layer 1: Overspray halo — wide, diffused, very faint */}
        <text
          x="920" y="760"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="rgba(0,240,255,0.06)"
          filter="url(#overspray)"
          letterSpacing="4"
        >
          Graphene
        </text>
        <text
          x="1020" y="870"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="rgba(0,240,255,0.06)"
          filter="url(#overspray)"
          letterSpacing="4"
        >
          Gangway
        </text>

        {/* Layer 2: Drop shadow — offset down-right, darker */}
        <text
          x="924" y="764"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="rgba(0,240,255,0.04)"
          letterSpacing="4"
        >
          Graphene
        </text>
        <text
          x="1024" y="874"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="rgba(0,240,255,0.04)"
          letterSpacing="4"
        >
          Gangway
        </text>

        {/* Layer 3: Main fill — the primary visible tag */}
        <text
          x="920" y="760"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="rgba(0,240,255,0.14)"
          letterSpacing="4"
        >
          Graphene
        </text>
        <text
          x="1020" y="870"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="rgba(0,240,255,0.14)"
          letterSpacing="4"
        >
          Gangway
        </text>

        {/* Layer 4: Highlight stroke — thin bright outline on top half */}
        <text
          x="920" y="760"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="none"
          stroke="rgba(0,240,255,0.22)"
          strokeWidth="0.8"
          letterSpacing="4"
        >
          Graphene
        </text>
        <text
          x="1020" y="870"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="120"
          fill="none"
          stroke="rgba(0,240,255,0.22)"
          strokeWidth="0.8"
          letterSpacing="4"
        >
          Gangway
        </text>

        {/* Drips — from the bottom of key letters */}
        <g filter="url(#drip-wobble)">
          {/* Drip from 'G' in Graphene */}
          <path d="M940,770 L938,795 L937,818 L938,835 L937,848"
            stroke="rgba(0,240,255,0.12)" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="937" cy="852" r="2.5" fill="rgba(0,240,255,0.10)" />

          {/* Drip from 'p' */}
          <path d="M1048,770 L1047,790 L1046,808"
            stroke="rgba(0,240,255,0.09)" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="1046" cy="812" r="1.8" fill="rgba(0,240,255,0.08)" />

          {/* Drip from 'e' at end of Graphene */}
          <path d="M1240,768 L1239,788 L1240,810 L1239,832 L1240,852 L1239,870"
            stroke="rgba(0,240,255,0.10)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="1239" cy="875" r="2.2" fill="rgba(0,240,255,0.09)" />

          {/* Drip from 'G' in Gangway */}
          <path d="M1040,880 L1038,905 L1037,928 L1038,948"
            stroke="rgba(0,240,255,0.11)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="1038" cy="952" r="2.3" fill="rgba(0,240,255,0.09)" />

          {/* Drip from 'y' — longest drip */}
          <path d="M1365,882 L1364,910 L1362,940 L1363,968 L1362,998 L1363,1025 L1362,1048"
            stroke="rgba(0,240,255,0.10)" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="1362" cy="1054" r="2" fill="rgba(0,240,255,0.08)" />
        </g>

        {/* Underline flourish — a confident stroke under "Gangway" */}
        <path
          d="M1010,895 C1080,892 1180,890 1280,888 C1340,887 1400,890 1420,895"
          stroke="rgba(0,240,255,0.12)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>


      {/* ═══════════════════════════════════════════════
          GG THROW-UP — quick two-letter piece
          The "GG" from the navbar mark, rendered as a
          graffiti throw-up (bubble outlines with fill).
          Upper-left area, slightly tilted opposite direction.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(6, 280, 260)">
        {/* Overspray halo */}
        <text
          x="180" y="310"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="180"
          fontWeight="700"
          fill="rgba(0,240,255,0.05)"
          filter="url(#overspray)"
          letterSpacing="15"
        >
          GG
        </text>

        {/* Outer outline — thick, slightly offset for 3D effect */}
        <text
          x="184" y="314"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="180"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.06)"
          strokeWidth="6"
          strokeLinejoin="round"
          letterSpacing="15"
        >
          GG
        </text>

        {/* Main outline */}
        <text
          x="180" y="310"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="180"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.18)"
          strokeWidth="3"
          strokeLinejoin="round"
          letterSpacing="15"
        >
          GG
        </text>

        {/* Inner fill — slightly transparent */}
        <text
          x="180" y="310"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="180"
          fontWeight="700"
          fill="rgba(0,240,255,0.06)"
          letterSpacing="15"
        >
          GG
        </text>

        {/* Highlight — bright thin stroke on leading edges */}
        <text
          x="180" y="310"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="180"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.25)"
          strokeWidth="0.8"
          letterSpacing="15"
        >
          GG
        </text>

        {/* Drip from first G */}
        <path d="M225,325 L224,355 L223,385 L224,410"
          stroke="rgba(0,240,255,0.12)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="224" cy="415" r="2.8" fill="rgba(0,240,255,0.10)" />

        {/* Drip from second G */}
        <path d="M365,325 L364,350 L363,372"
          stroke="rgba(0,240,255,0.10)" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="363" cy="377" r="2.2" fill="rgba(0,240,255,0.08)" />
      </g>


      {/* ═══════════════════════════════════════════════
          SMALL NAVBAR-STYLE GG — appears like the mark
          was stenciled/tagged smaller, upper-right area.
          More precise, like a stencil piece.
          ═══════════════════════════════════════════════ */}

      <g transform="rotate(-3, 1620, 145)">
        {/* Glow */}
        <text
          x="1580" y="165"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="64"
          fontWeight="700"
          fill="rgba(0,240,255,0.04)"
          filter="url(#text-glow)"
          letterSpacing="6"
        >
          GG
        </text>

        {/* Stencil outline */}
        <text
          x="1580" y="165"
          fontFamily="var(--font-script), 'Caveat', cursive"
          fontSize="64"
          fontWeight="700"
          fill="none"
          stroke="rgba(0,240,255,0.16)"
          strokeWidth="1.5"
          letterSpacing="6"
        >
          GG
        </text>

        {/* Stencil bridge marks — small gaps in the stroke that
            make it look like a cut stencil (horizontal dashes) */}
        <line x1="1590" y1="145" x2="1600" y2="145"
          stroke="rgba(26,29,36,0.8)" strokeWidth="2" />
        <line x1="1635" y1="145" x2="1645" y2="145"
          stroke="rgba(26,29,36,0.8)" strokeWidth="2" />

        {/* Overspray bleed at stencil edges */}
        <circle cx="1578" cy="150" r="3" fill="rgba(0,240,255,0.03)" />
        <circle cx="1660" cy="158" r="4" fill="rgba(0,240,255,0.025)" />
      </g>


      {/* ═══════════════════════════════════════════════
          SUPPORTING ELEMENTS — spray culture details
          ═══════════════════════════════════════════════ */}

      {/* "773" area code — small, Bebas Neue caps, the Chicago tag */}
      <text
        x="620" y="180"
        fontFamily="var(--font-display), 'Bebas Neue', sans-serif"
        fontSize="42"
        fill="rgba(0,240,255,0.10)"
        letterSpacing="6"
        transform="rotate(-10, 620, 180)"
      >
        773
      </text>

      {/* "NORTH LAWNDALE" — small stencil-style text */}
      <text
        x="1350" y="480"
        fontFamily="var(--font-mono), 'JetBrains Mono', monospace"
        fontSize="13"
        fill="rgba(0,240,255,0.09)"
        letterSpacing="5"
        transform="rotate(4, 1350, 480)"
      >
        NORTH LAWNDALE
      </text>

      {/* Tally marks — five-bar gate (IIII with a diagonal) */}
      <g transform="rotate(-8, 1700, 600)" opacity="0.12">
        <line x1="1680" y1="580" x2="1680" y2="620" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1688" y1="580" x2="1688" y2="620" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1696" y1="580" x2="1696" y2="620" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1704" y1="580" x2="1704" y2="620" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1675" y1="612" x2="1709" y2="585" stroke="rgba(0,240,255,1)" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Crown — three-point king's crown (graffiti status symbol) */}
      <g transform="translate(380, 180) rotate(-5)" opacity="0.13">
        <path
          d="M0,28 L5,8 L14,22 L24,0 L34,22 L43,8 L48,28 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="1.2" fill="none"
          strokeLinejoin="round"
        />
        {/* Crown jewels — three dots at tips */}
        <circle cx="5" cy="5" r="1.5" fill="rgba(0,240,255,1)" />
        <circle cx="24" cy="-3" r="1.5" fill="rgba(0,240,255,1)" />
        <circle cx="43" cy="5" r="1.5" fill="rgba(0,240,255,1)" />
      </g>

      {/* Arrow — classic graffiti arrow pointing right */}
      <g transform="translate(520, 920) rotate(8)" opacity="0.10">
        <path
          d="M0,12 L45,12 L45,4 L65,16 L45,28 L45,20 L0,20 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="1.2" fill="none"
          strokeLinejoin="round"
        />
      </g>

      {/* Star burst — small six-pointed star */}
      <g transform="translate(1500, 920)" opacity="0.08">
        <path d="M0,-10 L3,-3 L10,-3 L4,2 L6,10 L0,5 L-6,10 L-4,2 L-10,-3 L-3,-3 Z"
          stroke="rgba(0,240,255,1)" strokeWidth="0.8" fill="none" />
      </g>

      {/* Drip splatter — random dots like overspray landing */}
      <circle cx="905" cy="925" r="1.5" fill="rgba(0,240,255,0.06)" />
      <circle cx="912" cy="930" r="1" fill="rgba(0,240,255,0.05)" />
      <circle cx="898" cy="932" r="0.8" fill="rgba(0,240,255,0.04)" />
      <circle cx="920" cy="920" r="1.2" fill="rgba(0,240,255,0.05)" />
      <circle cx="895" cy="918" r="0.7" fill="rgba(0,240,255,0.04)" />

      {/* Overspray cluster near GG throw-up */}
      <circle cx="160" cy="220" r="2" fill="rgba(0,240,255,0.04)" />
      <circle cx="155" cy="228" r="1.5" fill="rgba(0,240,255,0.035)" />
      <circle cx="168" cy="215" r="1.2" fill="rgba(0,240,255,0.03)" />
      <circle cx="148" cy="235" r="1.8" fill="rgba(0,240,255,0.04)" />
      <circle cx="172" cy="232" r="1" fill="rgba(0,240,255,0.03)" />

      {/* Circle tag — simple circle around initials (a "heaven" spot) */}
      <circle cx="80" cy="520" r="22"
        stroke="rgba(0,240,255,0.08)" strokeWidth="1.2" />
      <text
        x="80" y="527"
        fontFamily="var(--font-script), 'Caveat', cursive"
        fontSize="24"
        fontWeight="700"
        fill="rgba(0,240,255,0.10)"
        textAnchor="middle"
      >
        GG
      </text>
    </svg>
  );
}
