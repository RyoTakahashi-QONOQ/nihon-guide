"use client";

interface Props {
  activeArea: number | null;
  onHover: (index: number | null) => void;
}

const SUBREGIONS = [
  {
    id: "douo",
    name: "道央",
    nameEn: "Central",
    // Central Hokkaido: Sapporo area, southwest-center
    d: "M108 295 L120 270 L138 258 L160 250 L185 238 L210 228 L228 222 L248 218 L268 222 L290 232 L305 248 L312 268 L315 290 L312 315 L305 338 L290 355 L270 365 L248 370 L225 368 L200 360 L175 348 L152 332 L132 315 L115 305 Z",
    labelX: 210,
    labelY: 298,
    cities: [
      { name: "札幌", nameEn: "Sapporo", x: 200, y: 310, primary: true },
      { name: "小樽", nameEn: "Otaru", x: 175, y: 288 },
      { name: "ニセコ", nameEn: "Niseko", x: 148, y: 328 },
      { name: "登別", nameEn: "Noboribetsu", x: 222, y: 350 },
    ],
  },
  {
    id: "dohoku",
    name: "道北",
    nameEn: "Northern",
    // Northern Hokkaido: Asahikawa, Furano, up to Wakkanai
    d: "M160 42 L180 35 L205 30 L230 28 L252 32 L268 42 L278 58 L285 78 L288 100 L290 125 L288 150 L282 172 L272 192 L258 208 L248 218 L228 222 L210 228 L185 238 L160 250 L138 258 L120 270 L108 295 L98 278 L90 258 L85 235 L82 210 L85 185 L90 160 L98 135 L108 112 L120 90 L135 68 L148 52 Z",
    labelX: 195,
    labelY: 155,
    cities: [
      { name: "旭川", nameEn: "Asahikawa", x: 240, y: 200, primary: true },
      { name: "富良野", nameEn: "Furano", x: 258, y: 235 },
      { name: "美瑛", nameEn: "Biei", x: 248, y: 218 },
      { name: "稚内", nameEn: "Wakkanai", x: 175, y: 52 },
    ],
  },
  {
    id: "doto",
    name: "道東",
    nameEn: "Eastern",
    // Eastern Hokkaido: Shiretoko, Kushiro, Abashiri
    d: "M248 218 L258 208 L272 192 L282 172 L288 150 L290 125 L288 100 L285 78 L278 58 L268 42 L285 38 L308 40 L335 48 L362 62 L388 80 L410 100 L430 125 L445 152 L458 182 L465 215 L468 248 L465 278 L458 305 L445 328 L428 348 L408 362 L385 370 L360 375 L335 372 L312 365 L290 355 L305 338 L312 315 L315 290 L312 268 L305 248 L290 232 L268 222 Z",
    labelX: 385,
    labelY: 215,
    cities: [
      { name: "釧路", nameEn: "Kushiro", x: 415, y: 335, primary: true },
      { name: "知床", nameEn: "Shiretoko", x: 452, y: 178 },
      { name: "網走", nameEn: "Abashiri", x: 420, y: 148 },
      { name: "帯広", nameEn: "Obihiro", x: 345, y: 328 },
    ],
  },
  {
    id: "donan",
    name: "道南",
    nameEn: "Southern",
    // Southern Hokkaido: Hakodate, the Oshima Peninsula
    d: "M108 295 L115 305 L132 315 L152 332 L175 348 L200 360 L225 368 L248 370 L270 365 L290 355 L312 365 L335 372 L360 375 L352 392 L338 408 L318 420 L295 428 L268 432 L240 430 L212 425 L185 418 L160 408 L138 395 L118 380 L102 362 L92 342 L88 322 L92 305 Z",
    labelX: 225,
    labelY: 405,
    cities: [
      { name: "函館", nameEn: "Hakodate", x: 145, y: 398, primary: true },
      { name: "松前", nameEn: "Matsumae", x: 115, y: 375 },
      { name: "大沼", nameEn: "Onuma", x: 162, y: 385 },
    ],
  },
];

export default function HokkaidoAreaMap({ activeArea, onHover }: Props) {
  return (
    <div className="rmap-frame">
      <svg
        viewBox="50 10 450 440"
        xmlns="http://www.w3.org/2000/svg"
        className="rmap-svg"
        role="img"
        aria-label="Hokkaido area map"
      >
        {/* Faint grid lines */}
        <defs>
          <pattern id="rmap-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="50" y="10" width="450" height="440" fill="url(#rmap-grid)" />

        {/* Sub-region paths */}
        {SUBREGIONS.map((r, i) => (
          <path
            key={r.id}
            d={r.d}
            className={`rmap-subregion ${activeArea === i ? "rmap-subregion--active" : ""}`}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
          />
        ))}

        {/* Region name labels */}
        {SUBREGIONS.map((r, i) => (
          <g key={`label-${r.id}`} className={`rmap-label-group ${activeArea === i ? "rmap-label-group--active" : ""}`}>
            <text x={r.labelX} y={r.labelY} className="rmap-region-label">{r.name}</text>
            <text x={r.labelX} y={r.labelY + 14} className="rmap-region-sublabel">{r.nameEn}</text>
          </g>
        ))}

        {/* City pins */}
        {SUBREGIONS.map((r, i) =>
          r.cities.map((c) => (
            <g key={c.nameEn} className="rmap-pin" opacity={activeArea === null || activeArea === i ? 1 : 0.25}>
              {c.primary && (
                <circle cx={c.x} cy={c.y} r="8" className="rmap-pin-ring" />
              )}
              <circle
                cx={c.x}
                cy={c.y}
                r={c.primary ? 3.5 : 2.5}
                className={`rmap-pin-dot ${c.primary ? "rmap-pin-dot--primary" : ""}`}
              />
              <text x={c.x} y={c.y - (c.primary ? 10 : 7)} className="rmap-pin-label">{c.name}</text>
              {c.primary && (
                <text x={c.x} y={c.y - 18} className="rmap-pin-sublabel">{c.nameEn}</text>
              )}
            </g>
          ))
        )}

        {/* Compass */}
        <g className="rmap-compass">
          <line x1="465" y1="50" x2="465" y2="30" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
          <polygon points="465,26 462,34 468,34" fill="rgba(201,168,76,0.35)" />
          <text x="465" y="22" textAnchor="middle" className="rmap-compass-label">N</text>
        </g>
      </svg>

      {/* Sea label */}
      <span className="rmap-sea-label">Sea of Japan</span>
      <span className="rmap-sea-label rmap-sea-label--right">Pacific Ocean</span>
    </div>
  );
}
