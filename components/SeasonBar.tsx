"use client";

interface SeasonBarProps {
  season: string;
  setSeason: (s: string) => void;
  onToast: (msg: string) => void;
}

const SEASONS = [
  { key: "all", label: "ALL YEAR", jp: "通年" },
  { key: "spring", label: "🌸 SPRING", jp: "春 Mar–May" },
  { key: "summer", label: "🎆 SUMMER", jp: "夏 Jun–Aug" },
  { key: "autumn", label: "🍁 AUTUMN", jp: "秋 Sep–Nov" },
  { key: "winter", label: "❄️ WINTER", jp: "冬 Dec–Feb" },
];

export default function SeasonBar({ season, setSeason, onToast }: SeasonBarProps) {
  return (
    <div className="sznbar">
      {SEASONS.map((s) => (
        <button
          key={s.key}
          className={`stab${season === s.key ? " active" : ""}`}
          onClick={() => {
            setSeason(s.key);
            if (s.key !== "all") onToast(`Season: ${s.key.charAt(0).toUpperCase() + s.key.slice(1)}`);
          }}
        >
          {s.label}
          <span className="jp">{s.jp}</span>
        </button>
      ))}
    </div>
  );
}
