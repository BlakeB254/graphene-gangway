export function SidewalkCracks() {
  return (
    <svg
      className="urban-texture texture-cracks absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* ── SLAB GRID ──
          Clean rectangular panels, top-down view.
          Slightly offset widths so it's not a perfect grid.
          Heavier weight = expansion joints, lighter = scored lines */}

      {/* Expansion joints — horizontal */}
      <line x1="0" y1="340" x2="1920" y2="340" stroke="rgba(0,240,255,0.14)" strokeWidth="1.2" />
      <line x1="0" y1="700" x2="1920" y2="700" stroke="rgba(0,240,255,0.14)" strokeWidth="1.2" />

      {/* Expansion joints — vertical */}
      <line x1="420" y1="0" x2="420" y2="1080" stroke="rgba(0,240,255,0.12)" strokeWidth="1.2" />
      <line x1="880" y1="0" x2="880" y2="1080" stroke="rgba(0,240,255,0.14)" strokeWidth="1.2" />
      <line x1="1320" y1="0" x2="1320" y2="1080" stroke="rgba(0,240,255,0.12)" strokeWidth="1.2" />
      <line x1="1720" y1="0" x2="1720" y2="1080" stroke="rgba(0,240,255,0.13)" strokeWidth="1.2" />

      {/* Scored mid-slab lines (lighter weight, dashed) */}
      <line
        x1="0" y1="170" x2="420" y2="170"
        stroke="rgba(0,240,255,0.05)" strokeWidth="0.6"
        strokeDasharray="8 12"
      />
      <line
        x1="880" y1="520" x2="1320" y2="520"
        stroke="rgba(0,240,255,0.05)" strokeWidth="0.6"
        strokeDasharray="8 12"
      />
      <line
        x1="650" y1="340" x2="650" y2="700"
        stroke="rgba(0,240,255,0.04)" strokeWidth="0.5"
        strokeDasharray="6 14"
      />
      <line
        x1="1100" y1="0" x2="1100" y2="340"
        stroke="rgba(0,240,255,0.04)" strokeWidth="0.5"
        strokeDasharray="6 14"
      />

      {/* Lifted slab edge — one panel slightly raised,
          showing a 3D lip as a double line */}
      <line x1="880" y1="700" x2="1320" y2="700" stroke="rgba(0,240,255,0.20)" strokeWidth="1.5" />
      <line x1="880" y1="703" x2="1320" y2="703" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" />


      {/* ── CRACK SYSTEM 1 ──
          Originates from intersection (880, 340).
          Clean line art strokes — intentional, graphic.
          Two weights: main crack + shadow line */}

      {/* Main crack — runs up-left from joint */}
      <path
        d="M880,340 L870,310 L862,275 L855,240 L848,200
           L842,165 L838,130 L830,90 L825,55 L818,15"
        stroke="rgba(0,240,255,0.22)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shadow offset */}
      <path
        d="M882,340 L872,310 L864,275 L857,240 L850,200
           L844,165 L840,130 L832,90 L827,55 L820,15"
        stroke="rgba(0,240,255,0.05)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Continues down-right from joint */}
      <path
        d="M880,340 L892,378 L900,415 L910,455
           L918,495 L928,540 L935,580 L945,625 L952,665"
        stroke="rgba(0,240,255,0.20)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M882,340 L894,378 L902,415 L912,455
           L920,495 L930,540 L937,580 L947,625 L954,665"
        stroke="rgba(0,240,255,0.04)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Branch — runs left along joint line */}
      <path
        d="M880,340 L840,338 L795,342 L750,336
           L700,340 L655,335 L605,342 L560,336"
        stroke="rgba(0,240,255,0.12)"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Branch — short spur down-left from midpoint */}
      <path
        d="M910,455 L888,462 L865,470 L842,478 L820,488"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Taper lines — thin marks at crack tips */}
      <path
        d="M818,15 L815,0"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.3"
        strokeLinecap="round"
      />
      <path
        d="M952,665 L955,680 L958,695"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.3"
        strokeLinecap="round"
      />

      {/* Cross-hatch marks at stress point (intersection) */}
      <line x1="872" y1="332" x2="876" y2="328" stroke="rgba(0,240,255,0.08)" strokeWidth="0.4" />
      <line x1="875" y1="335" x2="879" y2="331" stroke="rgba(0,240,255,0.08)" strokeWidth="0.4" />
      <line x1="878" y1="338" x2="882" y2="334" stroke="rgba(0,240,255,0.08)" strokeWidth="0.4" />
      <line x1="881" y1="341" x2="885" y2="337" stroke="rgba(0,240,255,0.08)" strokeWidth="0.4" />
      <line x1="884" y1="344" x2="888" y2="340" stroke="rgba(0,240,255,0.08)" strokeWidth="0.4" />


      {/* ── CRACK SYSTEM 2 ──
          Originates from intersection (1320, 700).
          Runs diagonally up-right and straight down. */}

      {/* Main crack — diagonal up-right */}
      <path
        d="M1320,700 L1340,665 L1358,628 L1375,592
           L1395,555 L1412,518 L1430,480 L1448,445 L1465,408"
        stroke="rgba(0,240,255,0.20)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1322,700 L1342,665 L1360,628 L1377,592
           L1397,555 L1414,518 L1432,480 L1450,445 L1467,408"
        stroke="rgba(0,240,255,0.04)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Continues down from joint */}
      <path
        d="M1320,700 L1315,738 L1310,778 L1305,818
           L1300,860 L1295,905 L1290,950 L1285,1000 L1282,1050"
        stroke="rgba(0,240,255,0.18)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1322,700 L1317,738 L1312,778 L1307,818
           L1302,860 L1297,905 L1292,950 L1287,1000 L1284,1050"
        stroke="rgba(0,240,255,0.04)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Branch — horizontal right from ~y=555 */}
      <path
        d="M1395,555 L1430,558 L1468,552 L1505,558
           L1540,552 L1580,558 L1615,552"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Branch — short left from lower section */}
      <path
        d="M1305,818 L1275,825 L1245,820 L1215,828 L1188,822"
        stroke="rgba(0,240,255,0.09)"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cross-hatch at intersection */}
      <line x1="1312" y1="694" x2="1316" y2="690" stroke="rgba(0,240,255,0.07)" strokeWidth="0.4" />
      <line x1="1315" y1="697" x2="1319" y2="693" stroke="rgba(0,240,255,0.07)" strokeWidth="0.4" />
      <line x1="1318" y1="700" x2="1322" y2="696" stroke="rgba(0,240,255,0.07)" strokeWidth="0.4" />
      <line x1="1321" y1="703" x2="1325" y2="699" stroke="rgba(0,240,255,0.07)" strokeWidth="0.4" />


      {/* ── ISOLATED HAIRLINES ──
          Small cracks within individual slabs,
          not connected to main systems */}

      {/* Slab top-left — short diagonal */}
      <path
        d="M120,85 L135,115 L148,150 L160,188"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.5"
        strokeLinecap="round"
      />

      {/* Slab bottom-center — gentle curve */}
      <path
        d="M580,780 L595,815 L605,855 L612,895"
        stroke="rgba(0,240,255,0.07)"
        strokeWidth="0.4"
        strokeLinecap="round"
      />

      {/* Slab mid-right — tiny Y-split */}
      <path
        d="M1550,200 L1558,230 L1565,260"
        stroke="rgba(0,240,255,0.06)"
        strokeWidth="0.4"
        strokeLinecap="round"
      />
      <path
        d="M1558,230 L1572,250"
        stroke="rgba(0,240,255,0.05)"
        strokeWidth="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
