export function SidewalkCracks() {
  return (
    <svg
      className="urban-texture texture-cracks absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* Broom-finish texture — fine horizontal drag lines in concrete */}
        <pattern id="broom" width="1920" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="2" x2="1920" y2="2" stroke="rgba(0,240,255,1)" strokeWidth="0.25" />
        </pattern>

        {/* Taper masks for variable-width crack illusion */}
        <linearGradient id="taper-up" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="taper-down" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="taper-left" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="55%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="taper-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <mask id="mask-up">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#taper-up)" />
        </mask>
        <mask id="mask-down">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#taper-down)" />
        </mask>
        <mask id="mask-left">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#taper-left)" />
        </mask>
        <mask id="mask-right">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#taper-right)" />
        </mask>
      </defs>


      {/* ═══════════════════════════════════════════════
          CURB & GUTTER — left edge, architectural anchor
          Slightly irregular to feel hand-observed
          ═══════════════════════════════════════════════ */}

      {/* Gutter seam — outermost */}
      <path
        d="M74,0 L74,360 L75,540 L74,780 L75,1080"
        stroke="rgba(0,240,255,0.05)" strokeWidth="0.5"
      />
      {/* Curb face — primary vertical */}
      <path
        d="M85,0 L85,270 L86,540 L85,810 L86,1080"
        stroke="rgba(0,240,255,0.20)" strokeWidth="2.2"
      />
      {/* Curb lip */}
      <path
        d="M93,0 L93,540 L94,1080"
        stroke="rgba(0,240,255,0.08)" strokeWidth="0.6"
      />
      {/* Curb chipped section — missing chunk ~y=620-660 */}
      <path
        d="M85,618 L81,622 L80,640 L82,655 L85,662"
        stroke="rgba(0,240,255,0.16)" strokeWidth="1.2"
      />


      {/* ═══════════════════════════════════════════════
          SLAB GRID — irregular joints, varied weight
          Real sidewalks have panels that don't perfectly
          align. Some joints are fresh (bright), some
          worn smooth (faint). One slab is heaved.
          ═══════════════════════════════════════════════ */}

      {/* Horizontal joints — not perfectly level */}
      <path d="M93,282 L460,284 L850,282 L1260,285 L1640,283 L1920,284"
        stroke="rgba(0,240,255,0.12)" strokeWidth="1.1" />
      <path d="M93,575 L460,578 L850,576 L1260,580 L1640,577 L1920,578"
        stroke="rgba(0,240,255,0.14)" strokeWidth="1.3" />
      <path d="M93,852 L460,854 L850,851 L1260,855 L1640,853 L1920,854"
        stroke="rgba(0,240,255,0.11)" strokeWidth="1" />

      {/* Vertical joints — uneven spacing */}
      <path d="M458,0 L460,285 L458,578 L460,854 L459,1080"
        stroke="rgba(0,240,255,0.13)" strokeWidth="1.1" />
      <path d="M848,0 L850,285 L848,578 L850,854 L849,1080"
        stroke="rgba(0,240,255,0.12)" strokeWidth="1" />
      <path d="M1258,0 L1260,285 L1258,578 L1260,854 L1259,1080"
        stroke="rgba(0,240,255,0.14)" strokeWidth="1.2" />
      <path d="M1638,0 L1640,285 L1639,578 L1640,854 L1639,1080"
        stroke="rgba(0,240,255,0.10)" strokeWidth="0.9" />

      {/* Tooled score lines — only on a few slabs */}
      <line x1="93" y1="430" x2="458" y2="432"
        stroke="rgba(0,240,255,0.04)" strokeWidth="0.5" strokeDasharray="3 7" />
      <line x1="1260" y1="716" x2="1638" y2="718"
        stroke="rgba(0,240,255,0.035)" strokeWidth="0.4" strokeDasharray="3 7" />


      {/* ═══════════════════════════════════════════════
          HEAVED SLAB — slab between x:460-850, y:578-854
          has lifted ~3px. Shadow line on the high side,
          slight gap visible. Tree root damage effect.
          ═══════════════════════════════════════════════ */}

      {/* Shadow on south edge of heaved slab (the lip) */}
      <path d="M462,851 L500,849 L600,850 L700,848 L800,850 L848,851"
        stroke="rgba(0,240,255,0.16)" strokeWidth="2.5" />
      <path d="M462,854 L500,856 L600,855 L700,857 L800,855 L848,854"
        stroke="rgba(0,240,255,0.06)" strokeWidth="1" />
      {/* Shadow on east edge */}
      <path d="M848,580 L850,650 L849,720 L850,790 L848,851"
        stroke="rgba(0,240,255,0.10)" strokeWidth="1.8" />

      {/* Root heave — radial cracks emanating from ~(620,720) */}
      <path d="M620,720 L595,685 L582,658 L575,640"
        stroke="rgba(0,240,255,0.14)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M620,720 L650,680 L662,655"
        stroke="rgba(0,240,255,0.12)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M620,720 L580,738 L555,745 L530,750"
        stroke="rgba(0,240,255,0.10)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M620,720 L640,755 L650,780 L655,810"
        stroke="rgba(0,240,255,0.11)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M620,720 L610,760 L605,790"
        stroke="rgba(0,240,255,0.08)" strokeWidth="0.5" strokeLinecap="round" />
      {/* Central bump contour */}
      <circle cx="620" cy="720" r="18"
        stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeDasharray="2 4" />


      {/* ═══════════════════════════════════════════════
          CRACK 1 — PRIMARY SYSTEM
          Angular polyline crack (NOT smooth beziers).
          Originates from joint intersection near (850,578).
          Runs NNW with sharp direction changes.
          Three-layer rendering: glow → body → edge.
          ═══════════════════════════════════════════════ */}

      {/* ── Upper arm — angular path running up-left ── */}
      {/* Glow layer */}
      <path
        d="M850,578 L844,555 L838,530 L830,508 L828,485
           L822,462 L815,440 L812,418 L805,395
           L798,370 L795,348 L788,322 L782,298
           L780,275 L774,250 L768,228 L765,205
           L758,180 L752,155 L750,132 L745,108
           L740,82 L738,55 L735,28 L732,0"
        stroke="rgba(0,240,255,0.04)" strokeWidth="10"
        strokeLinejoin="round" strokeLinecap="round"
        mask="url(#mask-up)"
      />
      {/* Body layer */}
      <path
        d="M850,578 L844,555 L838,530 L830,508 L828,485
           L822,462 L815,440 L812,418 L805,395
           L798,370 L795,348 L788,322 L782,298
           L780,275 L774,250 L768,228 L765,205
           L758,180 L752,155 L750,132 L745,108
           L740,82 L738,55 L735,28 L732,0"
        stroke="rgba(0,240,255,0.12)" strokeWidth="2.8"
        strokeLinejoin="round" strokeLinecap="round"
        mask="url(#mask-up)"
      />
      {/* Edge — sharp, bright, full-length */}
      <path
        d="M850,578 L844,555 L838,530 L830,508 L828,485
           L822,462 L815,440 L812,418 L805,395
           L798,370 L795,348 L788,322 L782,298
           L780,275 L774,250 L768,228 L765,205
           L758,180 L752,155 L750,132 L745,108
           L740,82 L738,55 L735,28 L732,0"
        stroke="rgba(0,240,255,0.24)" strokeWidth="0.8"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* ── Lower arm — runs down and slightly right ── */}
      <path
        d="M850,578 L854,600 L860,625 L865,648 L872,672
           L878,698 L882,718 L890,745 L895,768
           L900,792 L908,818 L912,842 L920,868
           L925,892 L932,918 L938,945 L942,968
           L948,995 L952,1018 L958,1042 L962,1065 L965,1090"
        stroke="rgba(0,240,255,0.035)" strokeWidth="9"
        strokeLinejoin="round" strokeLinecap="round"
        mask="url(#mask-down)"
      />
      <path
        d="M850,578 L854,600 L860,625 L865,648 L872,672
           L878,698 L882,718 L890,745 L895,768
           L900,792 L908,818 L912,842 L920,868
           L925,892 L932,918 L938,945 L942,968
           L948,995 L952,1018 L958,1042 L962,1065 L965,1090"
        stroke="rgba(0,240,255,0.10)" strokeWidth="2.2"
        strokeLinejoin="round" strokeLinecap="round"
        mask="url(#mask-down)"
      />
      <path
        d="M850,578 L854,600 L860,625 L865,648 L872,672
           L878,698 L882,718 L890,745 L895,768
           L900,792 L908,818 L912,842 L920,868
           L925,892 L932,918 L938,945 L942,968
           L948,995 L952,1018 L958,1042 L962,1065 L965,1090"
        stroke="rgba(0,240,255,0.22)" strokeWidth="0.7"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* ── Branch: left fork from upper arm at y≈395 ── */}
      <path
        d="M805,395 L785,398 L762,394 L740,400 L718,396
           L695,402 L672,398 L648,404 L625,400 L598,406
           L575,402 L548,408"
        stroke="rgba(0,240,255,0.14)" strokeWidth="0.7"
        strokeLinejoin="round" strokeLinecap="round"
      />
      {/* Sub-branch dropping down from fork */}
      <path
        d="M695,402 L690,425 L685,448 L682,472 L680,495"
        stroke="rgba(0,240,255,0.08)" strokeWidth="0.4"
        strokeLinecap="round"
      />
      {/* Sub-branch angling up from fork */}
      <path
        d="M740,400 L732,378 L725,358 L720,342"
        stroke="rgba(0,240,255,0.06)" strokeWidth="0.35"
        strokeLinecap="round"
      />

      {/* ── Branch: right fork from lower arm at y≈745 ── */}
      <path
        d="M890,745 L918,742 L945,748 L972,744 L1000,750
           L1028,746 L1058,752 L1088,748 L1118,754
           L1148,750 L1178,756 L1205,752 L1235,758"
        stroke="rgba(0,240,255,0.12)" strokeWidth="0.6"
        strokeLinejoin="round" strokeLinecap="round"
      />
      {/* Sub-branch angling down */}
      <path
        d="M1058,752 L1065,778 L1070,802 L1075,825"
        stroke="rgba(0,240,255,0.07)" strokeWidth="0.35"
        strokeLinecap="round"
      />

      {/* ── Spall chips along Crack 1 at stress point y≈508 ── */}
      <path d="M830,505 L825,502 L822,498" stroke="rgba(0,240,255,0.10)" strokeWidth="0.4" />
      <path d="M832,512 L836,515 L838,510" stroke="rgba(0,240,255,0.08)" strokeWidth="0.35" />
      <path d="M827,495 L823,490 L820,492" stroke="rgba(0,240,255,0.07)" strokeWidth="0.3" />

      {/* ── Spall at lower stress point y≈842 ── */}
      <path d="M914,838 L918,835 L920,838" stroke="rgba(0,240,255,0.09)" strokeWidth="0.35" />
      <path d="M910,845 L906,842 L908,848" stroke="rgba(0,240,255,0.07)" strokeWidth="0.3" />


      {/* ═══════════════════════════════════════════════
          CRACK 2 — SECONDARY SYSTEM
          Originates from intersection (1260,285).
          Angular descent toward bottom-right.
          ═══════════════════════════════════════════════ */}

      {/* Glow */}
      <path
        d="M1260,285 L1268,312 L1275,338 L1282,362 L1290,388
           L1298,415 L1305,440 L1315,468 L1322,495
           L1330,522 L1340,548 L1348,575 L1358,602
           L1365,628 L1375,655 L1382,682 L1392,708
           L1400,735 L1410,762 L1418,788 L1428,815
           L1435,842 L1445,868 L1452,895 L1460,920"
        stroke="rgba(0,240,255,0.03)" strokeWidth="7"
        strokeLinejoin="round" strokeLinecap="round"
        mask="url(#mask-down)"
      />
      {/* Body */}
      <path
        d="M1260,285 L1268,312 L1275,338 L1282,362 L1290,388
           L1298,415 L1305,440 L1315,468 L1322,495
           L1330,522 L1340,548 L1348,575 L1358,602
           L1365,628 L1375,655 L1382,682 L1392,708
           L1400,735 L1410,762 L1418,788 L1428,815
           L1435,842 L1445,868 L1452,895 L1460,920"
        stroke="rgba(0,240,255,0.09)" strokeWidth="2"
        strokeLinejoin="round" strokeLinecap="round"
        mask="url(#mask-down)"
      />
      {/* Edge */}
      <path
        d="M1260,285 L1268,312 L1275,338 L1282,362 L1290,388
           L1298,415 L1305,440 L1315,468 L1322,495
           L1330,522 L1340,548 L1348,575 L1358,602
           L1365,628 L1375,655 L1382,682 L1392,708
           L1400,735 L1410,762 L1418,788 L1428,815
           L1435,842 L1445,868 L1452,895 L1460,920"
        stroke="rgba(0,240,255,0.20)" strokeWidth="0.6"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* Short upward arm from intersection */}
      <path
        d="M1260,285 L1256,262 L1250,238 L1248,215
           L1242,192 L1240,168 L1236,145 L1232,118 L1230,92"
        stroke="rgba(0,240,255,0.15)" strokeWidth="0.6"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* Branch left from y≈575 */}
      <path
        d="M1348,575 L1322,580 L1298,576 L1272,582
           L1248,578 L1222,584 L1195,580 L1168,586
           L1142,582 L1115,588"
        stroke="rgba(0,240,255,0.09)" strokeWidth="0.5"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* Branch right from y≈440 */}
      <path
        d="M1305,440 L1332,436 L1358,442 L1385,438
           L1412,444 L1440,440 L1468,446 L1495,442
           L1522,448 L1548,444"
        stroke="rgba(0,240,255,0.08)" strokeWidth="0.45"
        strokeLinejoin="round" strokeLinecap="round"
      />


      {/* ═══════════════════════════════════════════════
          CRACK 3 — TERTIARY
          Horizontal crack running left-to-right through
          the top row of slabs. Thinner, more erratic.
          Shows how cracks cross joint boundaries.
          ═══════════════════════════════════════════════ */}

      <path
        d="M140,165 L168,162 L195,168 L222,164 L250,170
           L278,166 L305,172 L335,168 L362,174
           L392,170 L420,176 L448,172"
        stroke="rgba(0,240,255,0.10)" strokeWidth="0.6"
        strokeLinejoin="round" strokeLinecap="round"
        mask="url(#mask-right)"
      />
      {/* Crosses joint at x≈460 and continues */}
      <path
        d="M448,172 L478,168 L508,174 L538,170 L568,176
           L598,172 L625,178 L655,174"
        stroke="rgba(0,240,255,0.08)" strokeWidth="0.45"
        strokeLinejoin="round" strokeLinecap="round"
      />
      {/* Small drop at joint crossing */}
      <path d="M458,172 L460,178 L462,172" stroke="rgba(0,240,255,0.12)" strokeWidth="0.5" />


      {/* ═══════════════════════════════════════════════
          REPAIR PATCH — saw-cut rectangle
          A section of sidewalk has been cut out and
          re-poured. Crisp saw-cut lines contrast with
          the organic cracks. Shows city infrastructure.
          Located in slab (1260-1640, 0-285).
          ═══════════════════════════════════════════════ */}

      {/* Saw-cut perimeter — crisp, straight, slightly brighter */}
      <rect
        x="1340" y="95" width="220" height="140" rx="1"
        stroke="rgba(0,240,255,0.16)" strokeWidth="1.2"
      />
      {/* Inner shadow — indicates slightly recessed fill */}
      <rect
        x="1342" y="97" width="216" height="136" rx="1"
        stroke="rgba(0,240,255,0.05)" strokeWidth="0.5"
      />
      {/* New concrete is smoother — no broom lines inside */}
      {/* Old crack that was cut out — stub ends visible at patch edge */}
      <path d="M1340,155 L1332,152 L1322,155 L1312,152"
        stroke="rgba(0,240,255,0.08)" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M1560,180 L1568,182 L1578,180 L1588,183"
        stroke="rgba(0,240,255,0.08)" strokeWidth="0.4" strokeLinecap="round" />


      {/* ═══════════════════════════════════════════════
          SURFACE DETAILS — sparse, purposeful accents
          Each one tells a story about how this sidewalk
          has been used, repaired, and weathered.
          ═══════════════════════════════════════════════ */}

      {/* Broom-finish texture — subtle in select slabs */}
      <rect x="460" y="578" width="388" height="273"
        fill="url(#broom)" opacity="0.035" />
      <rect x="93" y="0" width="365" height="282"
        fill="url(#broom)" opacity="0.025" />

      {/* Expansion joint — rubber filler strip (double line) */}
      <line x1="847" y1="0" x2="847" y2="1080"
        stroke="rgba(0,240,255,0.04)" strokeWidth="0.4" />
      <line x1="853" y1="0" x2="853" y2="1080"
        stroke="rgba(0,240,255,0.04)" strokeWidth="0.4" />

      {/* Surveyor's mark — circle-cross on slab */}
      <circle cx="270" cy="700" r="7"
        stroke="rgba(0,240,255,0.07)" strokeWidth="0.5" />
      <line x1="263" y1="700" x2="277" y2="700"
        stroke="rgba(0,240,255,0.07)" strokeWidth="0.4" />
      <line x1="270" y1="693" x2="270" y2="707"
        stroke="rgba(0,240,255,0.07)" strokeWidth="0.4" />

      {/* Utility spray paint mark — cryptic, partly faded */}
      <path d="M1680,430 L1695,425 L1710,430 L1695,435 Z"
        stroke="rgba(0,240,255,0.09)" strokeWidth="0.6" />
      <path d="M1694,418 L1696,442"
        stroke="rgba(0,240,255,0.07)" strokeWidth="0.4" />

      {/* Aggregate exposure — worn surface showing stones */}
      <circle cx="1450" cy="180" r="1.1" fill="rgba(0,240,255,0.045)" />
      <circle cx="1454" cy="183" r="0.7" fill="rgba(0,240,255,0.04)" />
      <circle cx="1447" cy="185" r="0.9" fill="rgba(0,240,255,0.045)" />
      <circle cx="1452" cy="178" r="0.6" fill="rgba(0,240,255,0.035)" />
      <circle cx="1457" cy="186" r="0.8" fill="rgba(0,240,255,0.04)" />

      {/* Second aggregate cluster — bottom left */}
      <circle cx="320" cy="920" r="0.9" fill="rgba(0,240,255,0.04)" />
      <circle cx="324" cy="923" r="0.6" fill="rgba(0,240,255,0.035)" />
      <circle cx="318" cy="925" r="0.7" fill="rgba(0,240,255,0.04)" />
      <circle cx="322" cy="918" r="0.5" fill="rgba(0,240,255,0.03)" />

      {/* Hairline crack — isolated, in quiet slab area */}
      <path d="M1720,920 L1725,948 L1730,975 L1732,1002 L1735,1028"
        stroke="rgba(0,240,255,0.06)" strokeWidth="0.35" strokeLinecap="round" />

      {/* Water stain — organic outline near drain area at gutter */}
      <path
        d="M82,380 C78,385 76,395 78,405 C80,415 85,420 90,418
           C95,416 98,408 96,398 C94,388 88,382 82,380Z"
        stroke="rgba(0,240,255,0.04)" strokeWidth="0.5"
        fill="rgba(0,240,255,0.015)"
      />

      {/* Settling crack — from bottom edge, where sidewalk
          meets a building foundation (right side) */}
      <path
        d="M1820,1080 L1818,1058 L1822,1035 L1818,1012
           L1820,988 L1816,965 L1820,942 L1815,918"
        stroke="rgba(0,240,255,0.10)" strokeWidth="0.55"
        strokeLinejoin="round" strokeLinecap="round"
      />
      {/* Settling branch */}
      <path d="M1818,1012 L1835,1008 L1852,1012 L1870,1008"
        stroke="rgba(0,240,255,0.06)" strokeWidth="0.3" strokeLinecap="round" />

      {/* Worn joint — one joint slightly wider, filled with
          debris/dirt (represented as thicker, lower-opacity line) */}
      <path d="M93,854 L460,856 L460,852"
        stroke="rgba(0,240,255,0.06)" strokeWidth="2.5" />
    </svg>
  );
}
