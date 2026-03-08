"use client";

interface CategoryBarProps {
  category: string;
  setCategory: (c: string) => void;
}

const CATS = [
  { key: "all", label: "All" },
  { key: "shrine", label: "⛩ Shrines & Temples" },
  { key: "nature", label: "🗻 Nature" },
  { key: "food", label: "🍜 Food & Gourmet" },
  { key: "onsen", label: "♨️ Onsen" },
  { key: "culture", label: "🎭 Culture" },
  { key: "castle", label: "🏯 Castles" },
  { key: "city", label: "🌆 Cities" },
  { key: "stay", label: "🏨 Ryokan & Stay" },
];

export default function CategoryBar({ category, setCategory }: CategoryBarProps) {
  return (
    <div
      className="flex gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center py-2.5 px-10"
      style={{ background: "var(--paper)", borderBottom: "1px solid var(--pale)" }}
    >
      <span className="text-[.58rem] text-stone tracking-[.14em] whitespace-nowrap font-[family-name:var(--font-dm-sans)] mr-1">
        FILTER:
      </span>
      {CATS.map((c) => (
        <button
          key={c.key}
          onClick={() => setCategory(c.key)}
          className="shrink-0 py-1 px-3.5 text-[.63rem] tracking-[.07em] cursor-pointer transition-all duration-250 font-[family-name:var(--font-dm-sans)] whitespace-nowrap"
          style={{
            background: category === c.key ? "var(--ink)" : "#fff",
            color: category === c.key ? "var(--gold2)" : "var(--stone)",
            border: `1px solid ${category === c.key ? "var(--ink)" : "var(--pale)"}`,
          }}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
