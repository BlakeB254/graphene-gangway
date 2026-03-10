export function SidewalkCracks() {
  return (
    <svg
      className="urban-texture texture-cracks absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* Subtle glow filter for main fracture lines */}
        <filter id="crack-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════
          FRACTURE SYSTEM 1 — Left third of viewport
          Main vertical crack with branching network
          ═══════════════════════════════════════════════ */}

      {/* Deep shadow layer (wider, dimmer — gives depth) */}
      <path
        d="M165,-10 C170,30 180,65 175,110 C168,160 185,200 192,260
           C198,320 178,380 172,440 C166,510 182,570 190,640
           C196,700 174,760 170,820 C165,880 180,940 185,1000
           C188,1040 178,1060 175,1090"
        stroke="rgba(0,240,255,0.06)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Main fracture (organic bezier curves) */}
      <path
        d="M165,-10 C170,30 180,65 175,110 C168,160 185,200 192,260
           C198,320 178,380 172,440 C166,510 182,570 190,640
           C196,700 174,760 170,820 C165,880 180,940 185,1000
           C188,1040 178,1060 175,1090"
        stroke="rgba(0,240,255,0.22)"
        strokeWidth="1.5"
        strokeLinecap="round"
        filter="url(#crack-glow)"
      />
      {/* Parallel stress line (runs alongside main fracture) */}
      <path
        d="M158,80 C162,120 175,150 172,200 C168,250 180,290 184,340
           C186,370 176,400 172,430"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Branch 1A — horizontal, curves right from main at y≈260 */}
      <path
        d="M192,260 C230,258 270,265 320,255 C370,245 420,258 480,252
           C530,248 570,255 610,248"
        stroke="rgba(0,240,255,0.16)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Sub-branch from 1A */}
      <path
        d="M380,253 C385,230 395,210 405,190 C412,175 408,158 415,140"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Micro-branches from 1A */}
      <path d="M480,252 C490,240 500,235 510,225" stroke="rgba(0,240,255,0.08)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M320,255 C325,268 330,280 340,290" stroke="rgba(0,240,255,0.07)" strokeWidth="0.5" strokeLinecap="round" />

      {/* Branch 1B — left diagonal from main at y≈640 */}
      <path
        d="M190,640 C160,645 130,638 95,648 C60,658 30,650 -10,655"
        stroke="rgba(0,240,255,0.13)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Branch 1C — short spur right at y≈440 */}
      <path
        d="M172,440 C200,445 230,438 260,448 C285,455 305,448 330,452"
        stroke="rgba(0,240,255,0.11)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Spall chips along main fracture */}
      <ellipse cx="175" cy="180" rx="4" ry="2" fill="rgba(0,240,255,0.08)" transform="rotate(15,175,180)" />
      <ellipse cx="185" cy="350" rx="3" ry="1.5" fill="rgba(0,240,255,0.06)" transform="rotate(-20,185,350)" />
      <ellipse cx="170" cy="550" rx="5" ry="2" fill="rgba(0,240,255,0.07)" transform="rotate(8,170,550)" />
      <ellipse cx="178" cy="760" rx="3" ry="2" fill="rgba(0,240,255,0.05)" transform="rotate(-12,178,760)" />


      {/* ═══════════════════════════════════════════════
          FRACTURE SYSTEM 2 — Center of viewport
          Wandering crack with web-pattern branching
          ═══════════════════════════════════════════════ */}

      {/* Deep shadow */}
      <path
        d="M850,-10 C845,50 835,100 842,170 C848,240 828,310 822,380
           C816,450 838,520 845,590 C850,650 832,720 826,790
           C820,860 840,930 845,1000 C848,1050 838,1070 835,1090"
        stroke="rgba(0,240,255,0.05)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Main fracture */}
      <path
        d="M850,-10 C845,50 835,100 842,170 C848,240 828,310 822,380
           C816,450 838,520 845,590 C850,650 832,720 826,790
           C820,860 840,930 845,1000 C848,1050 838,1070 835,1090"
        stroke="rgba(0,240,255,0.20)"
        strokeWidth="1.5"
        strokeLinecap="round"
        filter="url(#crack-glow)"
      />

      {/* Web pattern — horizontal branches creating connected web */}
      {/* Branch left at y≈380 */}
      <path
        d="M822,380 C790,375 750,385 710,378 C670,372 630,382 590,375
           C560,370 530,378 500,372"
        stroke="rgba(0,240,255,0.14)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Branch right at y≈380 — connects toward system 3 */}
      <path
        d="M822,380 C870,385 920,375 970,382 C1020,388 1070,378 1120,385
           C1160,390 1200,382 1240,388"
        stroke="rgba(0,240,255,0.12)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Vertical connector between horizontal branches */}
      <path
        d="M710,378 C715,420 708,460 712,500 C716,540 710,575 714,610"
        stroke="rgba(0,240,255,0.09)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Branch right at y≈590 */}
      <path
        d="M845,590 C880,595 920,585 960,592 C1000,598 1040,588 1080,595"
        stroke="rgba(0,240,255,0.11)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Short spur left at y≈170 */}
      <path
        d="M842,170 C810,175 778,168 748,175 C720,180 695,172 670,178"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Micro-crack cluster around y≈380 intersection */}
      <path d="M815,365 C808,355 800,348 790,340" stroke="rgba(0,240,255,0.07)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M830,390 C838,400 845,408 850,420" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M810,375 C800,370 792,362 785,352" stroke="rgba(0,240,255,0.05)" strokeWidth="0.4" strokeLinecap="round" />

      {/* Spall chips */}
      <ellipse cx="840" cy="250" rx="4" ry="1.5" fill="rgba(0,240,255,0.07)" transform="rotate(-18,840,250)" />
      <ellipse cx="830" cy="480" rx="3" ry="2" fill="rgba(0,240,255,0.06)" transform="rotate(10,830,480)" />
      <ellipse cx="842" cy="700" rx="5" ry="1.5" fill="rgba(0,240,255,0.08)" transform="rotate(-5,842,700)" />


      {/* ═══════════════════════════════════════════════
          FRACTURE SYSTEM 3 — Right third of viewport
          Shorter main crack with diagonal branching
          ═══════════════════════════════════════════════ */}

      {/* Deep shadow */}
      <path
        d="M1480,-10 C1475,60 1488,130 1478,200 C1468,280 1485,350 1492,430
           C1498,510 1475,580 1470,660 C1465,740 1482,810 1488,890
           C1492,950 1478,1010 1475,1090"
        stroke="rgba(0,240,255,0.05)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Main fracture */}
      <path
        d="M1480,-10 C1475,60 1488,130 1478,200 C1468,280 1485,350 1492,430
           C1498,510 1475,580 1470,660 C1465,740 1482,810 1488,890
           C1492,950 1478,1010 1475,1090"
        stroke="rgba(0,240,255,0.20)"
        strokeWidth="1.5"
        strokeLinecap="round"
        filter="url(#crack-glow)"
      />

      {/* Diagonal branch — upper left */}
      <path
        d="M1478,200 C1440,220 1400,215 1360,235 C1320,255 1280,248 1245,265"
        stroke="rgba(0,240,255,0.15)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Sub-branch from diagonal */}
      <path
        d="M1360,235 C1355,260 1350,285 1345,310 C1342,330 1348,348 1345,370"
        stroke="rgba(0,240,255,0.09)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Branch right at y≈430 */}
      <path
        d="M1492,430 C1530,435 1570,425 1610,435 C1650,442 1690,432 1730,440
           C1770,446 1810,438 1850,445 C1880,450 1900,442 1930,448"
        stroke="rgba(0,240,255,0.14)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Short branch left at y≈660 */}
      <path
        d="M1470,660 C1430,665 1390,655 1350,665 C1320,672 1290,662 1260,670"
        stroke="rgba(0,240,255,0.11)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Micro-cracks */}
      <path d="M1485,310 C1495,300 1505,295 1518,288" stroke="rgba(0,240,255,0.07)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M1472,540 C1460,535 1450,528 1438,520" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M1488,810 C1500,818 1512,822 1525,828" stroke="rgba(0,240,255,0.06)" strokeWidth="0.4" strokeLinecap="round" />

      {/* Spall chips */}
      <ellipse cx="1482" cy="140" rx="3" ry="1.5" fill="rgba(0,240,255,0.06)" transform="rotate(22,1482,140)" />
      <ellipse cx="1470" cy="520" rx="4" ry="2" fill="rgba(0,240,255,0.07)" transform="rotate(-8,1470,520)" />


      {/* ═══════════════════════════════════════════════
          ISOLATED MICRO-CRACK CLUSTERS
          Small cracks not connected to main systems
          ═══════════════════════════════════════════════ */}

      {/* Cluster A — lower left */}
      <path
        d="M350,750 C358,780 352,810 360,845 C365,870 358,895 362,920"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path d="M355,810 C375,815 395,808 415,815" stroke="rgba(0,240,255,0.07)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M358,845 C340,850 322,842 305,850" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeLinecap="round" />

      {/* Cluster B — upper center-right */}
      <path
        d="M1150,80 C1155,110 1148,140 1155,172 C1160,200 1152,225 1158,255"
        stroke="rgba(0,240,255,0.09)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path d="M1152,140 C1170,145 1190,138 1210,145" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeLinecap="round" />

      {/* Cluster C — bottom center */}
      <path
        d="M920,920 C928,945 922,968 930,995 C935,1015 928,1035 932,1060"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path d="M925,968 C945,972 965,965 985,972" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M928,995 C908,1000 888,992 870,1000" stroke="rgba(0,240,255,0.05)" strokeWidth="0.4" strokeLinecap="round" />
    </svg>
  );
}
