export function SidewalkCracks() {
  return (
    <svg
      className="urban-texture texture-cracks absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* Broom-finish texture pattern (horizontal drag lines in concrete) */}
        <pattern id="broom" width="1920" height="5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="2.5" x2="1920" y2="2.5" stroke="rgba(0,240,255,1)" strokeWidth="0.3" />
        </pattern>

        {/* Taper masks — gradient along crack path for variable width effect.
            Each mask is aligned to the bounding box of its crack. */}
        <linearGradient id="taper-up" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="taper-down" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="taper-diag" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="65%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <mask id="mask-up">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#taper-up)" />
        </mask>
        <mask id="mask-down">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#taper-down)" />
        </mask>
        <mask id="mask-diag">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#taper-diag)" />
        </mask>
      </defs>


      {/* ═══════════════════════════════════════════════
          CURB EDGE — left side, gives perspective
          and anchors the composition
          ═══════════════════════════════════════════════ */}

      {/* Curb face (thick, confident stroke) */}
      <line
        x1="85" y1="0" x2="85" y2="1080"
        stroke="rgba(0,240,255,0.18)"
        strokeWidth="2"
      />
      {/* Curb lip — inner edge showing thickness */}
      <line
        x1="92" y1="0" x2="92" y2="1080"
        stroke="rgba(0,240,255,0.07)"
        strokeWidth="0.6"
      />
      {/* Gutter line */}
      <line
        x1="78" y1="0" x2="78" y2="1080"
        stroke="rgba(0,240,255,0.05)"
        strokeWidth="0.5"
      />


      {/* ═══════════════════════════════════════════════
          SLAB GRID — slightly irregular panel sizes
          Not a perfect grid. Some joints heavier (newer pour),
          some lighter (worn). Panels get slightly wider
          toward the right (perspective hint).
          ═══════════════════════════════════════════════ */}

      {/* Horizontal joints */}
      <line x1="92" y1="285" x2="1920" y2="285" stroke="rgba(0,240,255,0.11)" strokeWidth="1" />
      <line x1="92" y1="580" x2="1920" y2="580" stroke="rgba(0,240,255,0.13)" strokeWidth="1.2" />
      <line x1="92" y1="855" x2="1920" y2="855" stroke="rgba(0,240,255,0.10)" strokeWidth="0.9" />

      {/* Vertical joints — uneven spacing */}
      <line x1="460" y1="0" x2="460" y2="1080" stroke="rgba(0,240,255,0.12)" strokeWidth="1" />
      <line x1="850" y1="0" x2="850" y2="1080" stroke="rgba(0,240,255,0.11)" strokeWidth="1" />
      <line x1="1260" y1="0" x2="1260" y2="1080" stroke="rgba(0,240,255,0.13)" strokeWidth="1.1" />
      <line x1="1640" y1="0" x2="1640" y2="1080" stroke="rgba(0,240,255,0.10)" strokeWidth="0.9" />

      {/* Scored center line — only in some slabs (dashed, very fine) */}
      <line
        x1="92" y1="432" x2="460" y2="432"
        stroke="rgba(0,240,255,0.04)" strokeWidth="0.5"
        strokeDasharray="4 8"
      />
      <line
        x1="850" y1="718" x2="1260" y2="718"
        stroke="rgba(0,240,255,0.035)" strokeWidth="0.4"
        strokeDasharray="4 8"
      />

      {/* Broom-finish texture — fine horizontal drag lines
          Only applied to a couple of slabs so it doesn't overwhelm */}
      <rect
        x="460" y="580" width="390" height="275"
        fill="url(#broom)" opacity="0.04"
      />
      <rect
        x="1260" y="285" width="380" height="295"
        fill="url(#broom)" opacity="0.03"
      />


      {/* ═══════════════════════════════════════════════
          CRACK 1 — PRIMARY
          Originates at joint intersection (850, 580).
          Runs upward and downward. Variable width via
          layered strokes with taper masks.
          ═══════════════════════════════════════════════ */}

      {/* ── Upper arm (runs up from intersection) ── */}

      {/* Wide glow layer — tapers out toward tip */}
      <path
        d="M850,580
           C842,540 830,495 824,450
           C818,405 808,355 800,310
           C792,265 785,215 778,170
           C772,130 768,85 762,40
           C758,15 755,0 752,-10"
        stroke="rgba(0,240,255,0.04)"
        strokeWidth="8"
        strokeLinecap="round"
        mask="url(#mask-up)"
      />
      {/* Medium body layer */}
      <path
        d="M850,580
           C842,540 830,495 824,450
           C818,405 808,355 800,310
           C792,265 785,215 778,170
           C772,130 768,85 762,40
           C758,15 755,0 752,-10"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="2.5"
        strokeLinecap="round"
        mask="url(#mask-up)"
      />
      {/* Sharp edge — full length, thin, bright */}
      <path
        d="M850,580
           C842,540 830,495 824,450
           C818,405 808,355 800,310
           C792,265 785,215 778,170
           C772,130 768,85 762,40
           C758,15 755,0 752,-10"
        stroke="rgba(0,240,255,0.22)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* ── Lower arm (runs down-right from intersection) ── */}
      <path
        d="M850,580
           C858,625 868,670 876,720
           C884,768 892,818 900,865
           C908,910 918,960 925,1010
           C930,1045 935,1070 938,1090"
        stroke="rgba(0,240,255,0.04)"
        strokeWidth="7"
        strokeLinecap="round"
        mask="url(#mask-down)"
      />
      <path
        d="M850,580
           C858,625 868,670 876,720
           C884,768 892,818 900,865
           C908,910 918,960 925,1010
           C930,1045 935,1070 938,1090"
        stroke="rgba(0,240,255,0.09)"
        strokeWidth="2"
        strokeLinecap="round"
        mask="url(#mask-down)"
      />
      <path
        d="M850,580
           C858,625 868,670 876,720
           C884,768 892,818 900,865
           C908,910 918,960 925,1010
           C930,1045 935,1070 938,1090"
        stroke="rgba(0,240,255,0.20)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* ── Branches from Crack 1 ── */}

      {/* Branch left — from upper arm at ~y=310 */}
      <path
        d="M800,310
           C760,315 720,308 680,315
           C640,320 600,312 565,318"
        stroke="rgba(0,240,255,0.12)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      {/* Sub-branch thinning off */}
      <path
        d="M680,315 C675,345 668,375 662,405"
        stroke="rgba(0,240,255,0.06)"
        strokeWidth="0.4"
        strokeLinecap="round"
      />

      {/* Branch right — from lower arm at ~y=720 */}
      <path
        d="M876,720
           C920,724 965,716 1010,722
           C1055,728 1095,718 1140,725
           C1175,730 1210,722 1240,728"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.5"
        strokeLinecap="round"
      />

      {/* Micro-spur at ~y=450 */}
      <path
        d="M824,450 C810,455 795,460 782,468"
        stroke="rgba(0,240,255,0.06)"
        strokeWidth="0.3"
        strokeLinecap="round"
      />


      {/* ═══════════════════════════════════════════════
          CRACK 2 — SECONDARY
          Originates from intersection (1260, 285).
          Runs diagonal down-right. Thinner overall.
          ═══════════════════════════════════════════════ */}

      {/* Glow */}
      <path
        d="M1260,285
           C1278,335 1298,388 1315,440
           C1332,492 1350,545 1368,600
           C1385,652 1402,708 1420,760
           C1435,808 1450,860 1465,910"
        stroke="rgba(0,240,255,0.035)"
        strokeWidth="6"
        strokeLinecap="round"
        mask="url(#mask-diag)"
      />
      {/* Body */}
      <path
        d="M1260,285
           C1278,335 1298,388 1315,440
           C1332,492 1350,545 1368,600
           C1385,652 1402,708 1420,760
           C1435,808 1450,860 1465,910"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="1.8"
        strokeLinecap="round"
        mask="url(#mask-diag)"
      />
      {/* Edge */}
      <path
        d="M1260,285
           C1278,335 1298,388 1315,440
           C1332,492 1350,545 1368,600
           C1385,652 1402,708 1420,760
           C1435,808 1450,860 1465,910"
        stroke="rgba(0,240,255,0.18)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      {/* Short upward arm from same intersection */}
      <path
        d="M1260,285
           C1255,248 1248,210 1242,175
           C1238,145 1232,110 1228,80"
        stroke="rgba(0,240,255,0.14)"
        strokeWidth="0.5"
        strokeLinecap="round"
      />

      {/* Branch left — from ~y=600 */}
      <path
        d="M1368,600
           C1330,605 1290,598 1250,605
           C1215,610 1180,602 1145,608"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.4"
        strokeLinecap="round"
      />

      {/* Branch right — from ~y=440 */}
      <path
        d="M1315,440
           C1350,445 1388,438 1425,445
           C1458,450 1495,442 1530,448"
        stroke="rgba(0,240,255,0.07)"
        strokeWidth="0.4"
        strokeLinecap="round"
      />


      {/* ═══════════════════════════════════════════════
          ISOLATED DETAILS — sparse, purposeful
          ═══════════════════════════════════════════════ */}

      {/* Hairline crack in top-left slab */}
      <path
        d="M180,80 C188,115 195,155 200,195"
        stroke="rgba(0,240,255,0.06)"
        strokeWidth="0.4"
        strokeLinecap="round"
      />

      {/* Hairline in bottom-right slab */}
      <path
        d="M1720,920 C1728,950 1735,985 1740,1015"
        stroke="rgba(0,240,255,0.05)"
        strokeWidth="0.3"
        strokeLinecap="round"
      />

      {/* Utility mark — small circle-cross (surveyor's mark on concrete).
          One subtle detail that says "this is real infrastructure." */}
      <circle
        cx="270" cy="700"
        r="8"
        stroke="rgba(0,240,255,0.06)"
        strokeWidth="0.5"
      />
      <line x1="262" y1="700" x2="278" y2="700" stroke="rgba(0,240,255,0.06)" strokeWidth="0.4" />
      <line x1="270" y1="692" x2="270" y2="708" stroke="rgba(0,240,255,0.06)" strokeWidth="0.4" />

      {/* Expansion joint detail — one joint has the rubber
          filler strip visible (two tight parallel lines) */}
      <line x1="848" y1="0" x2="848" y2="1080" stroke="rgba(0,240,255,0.04)" strokeWidth="0.4" />
      <line x1="852" y1="0" x2="852" y2="1080" stroke="rgba(0,240,255,0.04)" strokeWidth="0.4" />

      {/* Aggregate spot — tiny cluster of dots where concrete
          surface has worn revealing stones beneath */}
      <circle cx="1450" cy="180" r="1.2" fill="rgba(0,240,255,0.04)" />
      <circle cx="1454" cy="183" r="0.8" fill="rgba(0,240,255,0.035)" />
      <circle cx="1448" cy="185" r="1" fill="rgba(0,240,255,0.04)" />
      <circle cx="1452" cy="178" r="0.7" fill="rgba(0,240,255,0.03)" />
      <circle cx="1456" cy="186" r="0.9" fill="rgba(0,240,255,0.035)" />
    </svg>
  );
}
