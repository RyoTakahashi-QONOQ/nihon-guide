"use client";

import { HOKKAIDO_MAP_PATHS } from "@/data/hokkaido-map";

interface Props {
  activeArea: number | null;
  onHover: (index: number | null) => void;
}

const SUBREGIONS = [
  {
    id: "do_o",
    name: "道央",
    nameEn: "Central",
    labelX: 195,
    labelY: 370,
    cities: [
      { name: "札幌", nameEn: "Sapporo", x: 200, y: 330, primary: true },
      { name: "小樽", nameEn: "Otaru", x: 148, y: 310 },
      { name: "ニセコ", nameEn: "Niseko", x: 110, y: 400 },
      { name: "登別", nameEn: "Noboribetsu", x: 240, y: 430 },
    ],
  },
  {
    id: "do_hoku",
    name: "道北",
    nameEn: "Northern",
    labelX: 275,
    labelY: 170,
    cities: [
      { name: "旭川", nameEn: "Asahikawa", x: 230, y: 240, primary: true },
      { name: "富良野", nameEn: "Furano", x: 255, y: 290 },
      { name: "美瑛", nameEn: "Biei", x: 245, y: 260 },
      { name: "稚内", nameEn: "Wakkanai", x: 205, y: 60 },
    ],
  },
  {
    id: "do_to",
    name: "道東",
    nameEn: "Eastern",
    labelX: 530,
    labelY: 310,
    cities: [
      { name: "釧路", nameEn: "Kushiro", x: 340, y: 470, primary: true },
      { name: "知床", nameEn: "Shiretoko", x: 600, y: 200 },
      { name: "網走", nameEn: "Abashiri", x: 490, y: 250 },
      { name: "帯広", nameEn: "Obihiro", x: 310, y: 420 },
    ],
  },
  {
    id: "do_nan",
    name: "道南",
    nameEn: "Southern",
    labelX: 100,
    labelY: 575,
    cities: [
      { name: "函館", nameEn: "Hakodate", x: 115, y: 610, primary: true },
      { name: "松前", nameEn: "Matsumae", x: 68, y: 650 },
    ],
  },
];

export default function HokkaidoAreaMap({ activeArea, onHover }: Props) {
  return (
    <div className="rmap-frame">
      <svg
        viewBox="0 0 800 700"
        xmlns="http://www.w3.org/2000/svg"
        className="rmap-svg"
        role="img"
        aria-label="Hokkaido area map"
      >
        {/* Faint grid lines */}
        <defs>
          <pattern id="rmap-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(201,168,76,0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="800" height="700" fill="url(#rmap-grid)" />

        {/* Sub-region paths */}
        {SUBREGIONS.map((r, i) => (
          <path
            key={r.id}
            d={HOKKAIDO_MAP_PATHS[r.id as keyof typeof HOKKAIDO_MAP_PATHS]}
            className={`rmap-subregion ${activeArea === i ? "rmap-subregion--active" : ""}`}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
          />
        ))}

        {/* Region name labels */}
        {SUBREGIONS.map((r, i) => (
          <g key={`label-${r.id}`} className={`rmap-label-group ${activeArea === i ? "rmap-label-group--active" : ""}`}>
            <text x={r.labelX} y={r.labelY} className="rmap-region-label">{r.name}</text>
            <text x={r.labelX} y={r.labelY + 18} className="rmap-region-sublabel">{r.nameEn}</text>
          </g>
        ))}

        {/* City pins */}
        {SUBREGIONS.map((r, i) =>
          r.cities.map((c) => (
            <g key={c.nameEn} className="rmap-pin" opacity={activeArea === null || activeArea === i ? 1 : 0.2}>
              {c.primary && (
                <circle cx={c.x} cy={c.y} r="12" className="rmap-pin-ring" />
              )}
              <circle
                cx={c.x}
                cy={c.y}
                r={c.primary ? 4.5 : 3}
                className={`rmap-pin-dot ${c.primary ? "rmap-pin-dot--primary" : ""}`}
              />
              <text x={c.x} y={c.y - (c.primary ? 14 : 9)} className="rmap-pin-label">{c.name}</text>
              {c.primary && (
                <text x={c.x} y={c.y - 24} className="rmap-pin-sublabel">{c.nameEn}</text>
              )}
            </g>
          ))
        )}

        {/* Compass */}
        <g className="rmap-compass">
          <line x1="755" y1="75" x2="755" y2="45" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" />
          <polygon points="755,38 751,50 759,50" fill="rgba(201,168,76,0.35)" />
          <text x="755" y="32" textAnchor="middle" className="rmap-compass-label">N</text>
        </g>
      </svg>

      {/* Sea labels */}
      <span className="rmap-sea-label">日本海 Sea of Japan</span>
      <span className="rmap-sea-label rmap-sea-label--right">太平洋 Pacific Ocean</span>
    </div>
  );
}
