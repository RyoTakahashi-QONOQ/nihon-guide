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
    <div
      className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ background: "var(--ink2)", borderBottom: "1px solid rgba(201,168,76,.08)" }}
    >
      {SEASONS.map((s) => (
        <button
          key={s.key}
          onClick={() => {
            setSeason(s.key);
            if (s.key !== "all") onToast(`Season: ${s.key.charAt(0).toUpperCase() + s.key.slice(1)}`);
          }}
          className="flex-1 min-w-[110px] py-4 px-6 border-none bg-transparent font-[family-name:var(--font-cormorant-garamond)] text-[.88rem] tracking-[.15em] cursor-pointer transition-all duration-300 whitespace-nowrap border-b-2"
          style={{
            color: season === s.key ? "var(--gold)" : "rgba(255,255,255,.28)",
            borderBottomColor: season === s.key ? "var(--gold)" : "transparent",
            background: season === s.key ? "rgba(201,168,76,.04)" : "none",
          }}
        >
          {s.label}
          <span
            className="block font-[family-name:var(--font-noto-serif-jp)] text-[.52rem] opacity-45 mt-0.5"
          >
            {s.jp}
          </span>
        </button>
      ))}
    </div>
  );
}
