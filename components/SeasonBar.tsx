"use client";

interface SeasonBarProps {
  season: string;
  setSeason: (s: string) => void;
  onToast: (msg: string) => void;
}

const SEASONS = [
  { key: "all", label: "ALL YEAR", jp: "Year-round" },
  { key: "spring", label: "🌸 SPRING", jp: "Mar – May" },
  { key: "summer", label: "🎆 SUMMER", jp: "Jun – Aug" },
  { key: "autumn", label: "🍁 AUTUMN", jp: "Sep – Nov" },
  { key: "winter", label: "❄️ WINTER", jp: "Dec – Feb" },
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
