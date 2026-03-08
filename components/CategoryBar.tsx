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
    <div className="catbar">
      <span className="catbar-label">FILTER:</span>
      {CATS.map((c) => (
        <button
          key={c.key}
          className={`cp${category === c.key ? " active" : ""}`}
          onClick={() => setCategory(c.key)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
