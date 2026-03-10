export function SidewalkCracks() {
  return (
    <svg
      className="urban-texture texture-cracks absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <filter id="crack-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Roughen filter — adds slight displacement for organic feel */}
        <filter id="roughen" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════
          CONCRETE SLAB GRID — expansion joints
          6 columns × 4 rows, slightly weathered lines
          ═══════════════════════════════════════════════ */}

      <g opacity="1" filter="url(#roughen)">
        {/* Horizontal joints */}
        <line x1="0" y1="270" x2="1920" y2="270" stroke="rgba(0,240,255,0.055)" strokeWidth="1.2" />
        <line x1="0" y1="540" x2="1920" y2="540" stroke="rgba(0,240,255,0.06)" strokeWidth="1.2" />
        <line x1="0" y1="810" x2="1920" y2="810" stroke="rgba(0,240,255,0.05)" strokeWidth="1.2" />

        {/* Vertical joints */}
        <line x1="320" y1="0" x2="320" y2="1080" stroke="rgba(0,240,255,0.05)" strokeWidth="1" />
        <line x1="640" y1="0" x2="640" y2="1080" stroke="rgba(0,240,255,0.055)" strokeWidth="1" />
        <line x1="960" y1="0" x2="960" y2="1080" stroke="rgba(0,240,255,0.06)" strokeWidth="1" />
        <line x1="1280" y1="0" x2="1280" y2="1080" stroke="rgba(0,240,255,0.05)" strokeWidth="1" />
        <line x1="1600" y1="0" x2="1600" y2="1080" stroke="rgba(0,240,255,0.055)" strokeWidth="1" />

        {/* Scored mid-slab lines (some slabs have center scoring) */}
        <line x1="480" y1="0" x2="480" y2="270" stroke="rgba(0,240,255,0.025)" strokeWidth="0.6" />
        <line x1="1120" y1="540" x2="1120" y2="810" stroke="rgba(0,240,255,0.025)" strokeWidth="0.6" />
        <line x1="0" y1="135" x2="320" y2="135" stroke="rgba(0,240,255,0.02)" strokeWidth="0.6" />
        <line x1="640" y1="675" x2="960" y2="675" stroke="rgba(0,240,255,0.025)" strokeWidth="0.6" />
      </g>


      {/* ═══════════════════════════════════════════════
          MAIN CRACK A — originates from joint intersection
          at (640, 270), runs diagonally down-right across
          two slabs, jagged short segments
          ═══════════════════════════════════════════════ */}

      {/* Variable-width filled crack (traces both edges) */}
      <path
        d="M638,268
           l3,-8 l-1,-11 l4,-9 l-2,-12 l3,-10 l-1,-9 l4,-11 l-2,-10
           l3,-9 l-1,-11 l5,-10 l-3,-12 l4,-9 l-1,-10 l3,-11 l-2,-9
           l4,-10 l-1,-11 l3,-9 l-2,-12 l5,-8 l-3,-11 l4,-10 l-1,-9
           l3,-11
           l3,1
           l-3,11 l1,9 l-4,10 l3,11 l-5,8 l2,12 l-3,9 l1,11 l-4,10
           l2,9 l-3,11 l1,10 l-4,9 l3,12 l-5,10 l1,11 l-3,9 l2,10
           l-4,11 l1,9 l-3,10 l2,12 l-4,9 l1,11 l-3,8
           Z"
        fill="rgba(0,240,255,0.18)"
        filter="url(#crack-glow)"
      />
      {/* Shadow underneath */}
      <path
        d="M638,268
           l3,-8 l-1,-11 l4,-9 l-2,-12 l3,-10 l-1,-9 l4,-11 l-2,-10
           l3,-9 l-1,-11 l5,-10 l-3,-12 l4,-9 l-1,-10 l3,-11 l-2,-9
           l4,-10 l-1,-11 l3,-9 l-2,-12 l5,-8 l-3,-11 l4,-10 l-1,-9
           l3,-11
           l5,2
           l-3,11 l1,9 l-4,10 l3,11 l-5,8 l2,12 l-3,9 l1,11 l-4,10
           l2,9 l-3,11 l1,10 l-4,9 l3,12 l-5,10 l1,11 l-3,9 l2,10
           l-4,11 l1,9 l-3,10 l2,12 l-4,9 l1,11 l-3,8
           Z"
        fill="rgba(0,240,255,0.04)"
      />

      {/* Crack A continues below the joint, running down-right */}
      <path
        d="M642,272
           l4,9 l-1,12 l3,8 l-2,11 l5,10 l-1,9 l3,12 l-2,8
           l4,11 l-1,9 l3,10 l-3,12 l5,8 l-1,11 l3,9 l-2,10
           l4,12 l-1,8 l3,11 l-2,9 l5,10 l-1,12 l3,8 l-2,11
           l4,9 l-1,10 l3,12 l-2,8 l5,11 l-1,9
           l3,1
           l1,-9 l-5,-11 l2,-8 l-3,-12 l1,-10 l-4,-9 l2,-8 l-3,-12
           l1,-11 l-5,-10 l2,-9 l3,-12 l-3,-8 l1,-10 l-4,-11 l2,-9
           l-4,-12 l1,-8 l-3,-10 l2,-12 l-5,-8 l1,-11 l-3,-9 l2,-12
           l-4,-8 l1,-11 l-3,-9
           Z"
        fill="rgba(0,240,255,0.16)"
        filter="url(#crack-glow)"
      />

      {/* Branch from crack A at ~y=200, runs left */}
      <path
        d="M635,200 l-9,2 l-11,-1 l-10,3 l-12,-2 l-9,4 l-11,-1 l-10,3
           l-12,-2 l-9,3 l-11,-1 l-10,4 l-12,-2 l-9,3 l-11,-1 l-10,2
           l-12,-3 l-9,4 l-11,-1 l-10,3"
        stroke="rgba(0,240,255,0.12)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Thinning sub-branch */}
      <path
        d="M540,205 l-5,-8 l-3,-9 l-4,-10 l-2,-8 l-5,-9 l-3,-11"
        stroke="rgba(0,240,255,0.07)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      {/* Branch from crack A below joint, runs right */}
      <path
        d="M658,350 l10,3 l12,-1 l9,2 l11,-2 l10,4 l12,-1 l9,3
           l11,-2 l10,3 l12,-1 l9,2 l11,-3 l10,4"
        stroke="rgba(0,240,255,0.11)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Corner break — triangular spall at intersection */}
      <path
        d="M640,270 l-25,-18 l-3,2 l22,16 Z"
        fill="rgba(0,240,255,0.06)"
      />
      <path
        d="M640,270 l20,22 l2,-3 l-18,-19 Z"
        fill="rgba(0,240,255,0.05)"
      />


      {/* ═══════════════════════════════════════════════
          MAIN CRACK B — originates from joint intersection
          at (960, 540), runs roughly vertical with wander
          ═══════════════════════════════════════════════ */}

      {/* Variable-width filled crack — up from intersection */}
      <path
        d="M958,538
           l-2,-10 l3,-9 l-1,-11 l4,-8 l-2,-12 l3,-9 l-1,-10 l4,-11
           l-2,-8 l3,-12 l-1,-9 l4,-10 l-2,-11 l3,-8 l-1,-12 l4,-9
           l-2,-10 l3,-11 l-1,-8 l4,-12 l-2,-9
           l3,0
           l2,9 l-4,12 l1,8 l-3,11 l2,10 l-4,9 l1,12 l-3,8
           l2,11 l-4,10 l1,9 l-3,12 l2,8 l-4,10 l1,11 l-3,9
           l2,8 l-4,12 l1,10 l-3,9 l2,11 l-4,8
           Z"
        fill="rgba(0,240,255,0.20)"
        filter="url(#crack-glow)"
      />
      {/* Shadow */}
      <path
        d="M958,538
           l-2,-10 l3,-9 l-1,-11 l4,-8 l-2,-12 l3,-9 l-1,-10 l4,-11
           l-2,-8 l3,-12 l-1,-9 l4,-10 l-2,-11 l3,-8 l-1,-12 l4,-9
           l-2,-10 l3,-11 l-1,-8 l4,-12 l-2,-9
           l5,1
           l2,9 l-4,12 l1,8 l-3,11 l2,10 l-4,9 l1,12 l-3,8
           l2,11 l-4,10 l1,9 l-3,12 l2,8 l-4,10 l1,11 l-3,9
           l2,8 l-4,12 l1,10 l-3,9 l2,11 l-4,8
           Z"
        fill="rgba(0,240,255,0.04)"
      />

      {/* Continues down from intersection */}
      <path
        d="M962,542
           l2,11 l-3,9 l1,10 l-4,12 l2,8 l-3,11 l1,9 l-4,10
           l2,12 l-3,8 l1,11 l-4,9 l2,10 l-3,12 l1,8 l-4,11
           l2,9 l-3,10 l1,12 l-4,8 l2,11 l-3,9 l1,10
           l3,1
           l-1,-10 l3,-9 l-2,-11 l4,-8 l-1,-12 l3,-10 l-2,-8 l4,-11
           l-1,-9 l3,-12 l-2,-8 l4,-10 l-1,-11 l3,-9 l-2,-12 l4,-8
           l-1,-10 l3,-11 l-2,-9 l4,-12 l-1,-8 l3,-11 l-2,-9
           Z"
        fill="rgba(0,240,255,0.17)"
        filter="url(#crack-glow)"
      />

      {/* Branch left from crack B at ~y=440 */}
      <path
        d="M955,440 l-10,-2 l-12,3 l-9,-1 l-11,4 l-10,-2 l-12,3
           l-9,-1 l-11,3 l-10,-2 l-12,4 l-9,-1 l-11,3 l-10,-2"
        stroke="rgba(0,240,255,0.13)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Hair-crack continuing from branch */}
      <path
        d="M815,443 l-8,-4 l-10,-3 l-9,-5 l-8,-3 l-10,-4"
        stroke="rgba(0,240,255,0.06)"
        strokeWidth="0.5"
        strokeLinecap="round"
      />

      {/* Branch right from crack B at ~y=620 */}
      <path
        d="M965,620 l11,2 l9,-3 l12,1 l10,-2 l11,4 l9,-1 l12,3
           l10,-2 l11,3 l9,-1 l12,2"
        stroke="rgba(0,240,255,0.10)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      {/* Corner spall at intersection */}
      <path d="M960,540 l-30,-15 l-2,4 l28,11 Z" fill="rgba(0,240,255,0.05)" />
      <path d="M960,540 l18,28 l3,-2 l-17,-26 Z" fill="rgba(0,240,255,0.04)" />


      {/* ═══════════════════════════════════════════════
          MAIN CRACK C — originates near joint at
          (1280, 810), runs up-left diagonally
          ═══════════════════════════════════════════════ */}

      {/* Filled crack — diagonal up-left */}
      <path
        d="M1278,808
           l-5,-9 l-4,-10 l-6,-8 l-3,-11 l-5,-9 l-4,-10 l-6,-12
           l-3,-8 l-5,-11 l-4,-9 l-6,-10 l-3,-12 l-5,-8 l-4,-11
           l-6,-9 l-3,-10 l-5,-12 l-4,-8 l-6,-11 l-3,-9
           l3,-1
           l3,9 l6,11 l4,8 l5,12 l3,10 l6,9 l4,11 l5,8
           l3,12 l6,10 l4,9 l5,11 l3,8 l6,12 l4,10 l5,9
           l3,8 l6,11 l4,12 l5,8 l3,10
           Z"
        fill="rgba(0,240,255,0.16)"
        filter="url(#crack-glow)"
      />

      {/* Continues down-right from intersection */}
      <path
        d="M1282,812
           l6,10 l3,9 l5,11 l4,8 l6,12 l3,9 l5,10 l4,11
           l6,8 l3,12 l5,9 l4,10 l6,11 l3,8
           l3,-1
           l-3,-8 l-6,-11 l-4,-10 l-5,-9 l-3,-12 l-6,-8
           l-4,-11 l-5,-10 l-3,-9 l-6,-12 l-4,-8 l-5,-11
           l-3,-9 l-6,-10
           Z"
        fill="rgba(0,240,255,0.14)"
        filter="url(#crack-glow)"
      />

      {/* Branch runs along joint line to the right */}
      <path
        d="M1282,812 l12,1 l10,-2 l11,3 l9,-1 l12,2 l10,-2 l11,3
           l9,-1 l12,2 l10,-3 l11,4 l9,-1 l12,2 l10,-2 l11,3
           l9,-1 l12,2 l10,-3"
        stroke="rgba(0,240,255,0.11)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      {/* Short downward spur */}
      <path
        d="M1270,812 l-2,10 l3,9 l-1,11 l4,8 l-2,12 l3,9"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Corner spall */}
      <path d="M1280,810 l22,-20 l-3,-2 l-19,18 Z" fill="rgba(0,240,255,0.05)" />


      {/* ═══════════════════════════════════════════════
          SECONDARY CRACKS — within individual slabs
          Not connected to main fracture systems
          ═══════════════════════════════════════════════ */}

      {/* Slab [0,0] — small corner crack from top-left area */}
      <path
        d="M12,15 l8,7 l9,8 l7,9 l8,7 l9,8 l7,10 l8,7"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M12,15 l7,8 l8,9 l6,7 l8,8"
        stroke="rgba(0,240,255,0.04)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Slab [3,1] — settlement crack, short diagonal */}
      <path
        d="M1010,320 l4,9 l-2,11 l3,8 l-1,12 l4,9 l-2,10 l3,11
           l-1,8 l4,12 l-2,9 l3,10"
        stroke="rgba(0,240,255,0.09)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M1010,320 l4,9 l-2,11 l3,8 l-1,12 l4,9 l-2,10 l3,11
           l-1,8 l4,12 l-2,9 l3,10"
        stroke="rgba(0,240,255,0.03)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Slab [5,0] — hairline Y-crack near slab center */}
      <path
        d="M1700,120 l-3,8 l2,9 l-1,10 l3,8 l-2,9"
        stroke="rgba(0,240,255,0.07)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path d="M1699,155 l-8,4 l-9,3 l-8,5" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M1699,155 l7,5 l8,4 l9,3" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" strokeLinecap="round" />

      {/* Slab [1,2] — long weathering crack */}
      <path
        d="M380,580 l3,9 l-2,10 l4,8 l-1,11 l3,9 l-2,10 l4,12
           l-1,8 l3,11 l-2,9 l4,10 l-1,12 l3,8 l-2,11 l4,9"
        stroke="rgba(0,240,255,0.08)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Slab [4,3] — map-cracking pattern (alligator cracks) */}
      <path d="M1320,860 l15,10 l12,8 l14,12" stroke="rgba(0,240,255,0.07)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M1320,860 l8,15 l6,12 l10,14" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M1340,878 l12,-5 l10,-8 l14,-4" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M1340,878 l-4,12 l-6,10 l-3,14" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M1350,890 l10,8 l8,10" stroke="rgba(0,240,255,0.05)" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M1335,875 l-10,3 l-12,6" stroke="rgba(0,240,255,0.04)" strokeWidth="0.4" strokeLinecap="round" />


      {/* ═══════════════════════════════════════════════
          SURFACE DETAIL — chips, pitting, wear marks
          ═══════════════════════════════════════════════ */}

      {/* Spall chips at crack intersections */}
      <ellipse cx="640" cy="268" rx="6" ry="3" fill="rgba(0,240,255,0.06)" transform="rotate(-15,640,268)" />
      <ellipse cx="962" cy="540" rx="5" ry="3" fill="rgba(0,240,255,0.05)" transform="rotate(8,962,540)" />
      <ellipse cx="1280" cy="810" rx="7" ry="3" fill="rgba(0,240,255,0.06)" transform="rotate(-22,1280,810)" />

      {/* Pitting marks — tiny dots scattered on slab surfaces */}
      <circle cx="200" cy="150" r="1.5" fill="rgba(0,240,255,0.04)" />
      <circle cx="450" cy="400" r="1" fill="rgba(0,240,255,0.03)" />
      <circle cx="780" cy="680" r="1.5" fill="rgba(0,240,255,0.04)" />
      <circle cx="1100" cy="180" r="1" fill="rgba(0,240,255,0.03)" />
      <circle cx="1400" cy="480" r="1.5" fill="rgba(0,240,255,0.04)" />
      <circle cx="1750" cy="350" r="1" fill="rgba(0,240,255,0.03)" />
      <circle cx="520" cy="900" r="1.5" fill="rgba(0,240,255,0.04)" />
      <circle cx="1650" cy="750" r="1" fill="rgba(0,240,255,0.03)" />
      <circle cx="300" cy="650" r="1.5" fill="rgba(0,240,255,0.04)" />
      <circle cx="1500" cy="950" r="1" fill="rgba(0,240,255,0.03)" />
      <circle cx="850" cy="100" r="1" fill="rgba(0,240,255,0.03)" />
      <circle cx="1050" cy="780" r="1.5" fill="rgba(0,240,255,0.04)" />

      {/* Wear grooves — very faint, along foot traffic paths */}
      <path
        d="M0,500 l60,0 l55,-1 l50,1 l60,0 l55,-1 l50,1 l60,0
           l55,-1 l50,1 l60,0 l55,-1 l50,1 l60,0 l55,-1 l50,1
           l60,0 l55,-1 l50,1 l60,0 l55,-1 l50,1 l60,0 l55,-1
           l50,1 l60,0"
        stroke="rgba(0,240,255,0.02)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
