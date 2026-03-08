"use client";

interface SeasonalSectionProps {
  setSeason: (s: string) => void;
}

const CARDS = [
  { key: "spring", icon: "🌸", title: "Cherry Blossom Guide", sub: "Late March – Early May" },
  { key: "summer", icon: "🎆", title: "Festivals & Fireworks", sub: "July – August" },
  { key: "autumn", icon: "🍁", title: "Autumn Foliage", sub: "October – December" },
  { key: "winter", icon: "❄️", title: "Snow & Onsen Season", sub: "December – February" },
];

export default function SeasonalSection({ setSeason }: SeasonalSectionProps) {
  return (
    <div
      className="py-20 px-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#b52b20 0%,#8a1e14 45%,#1a0700 100%)",
      }}
    >
      <span
        className="absolute -right-12 -top-16 font-[family-name:var(--font-noto-serif-jp)] text-[22rem] leading-none pointer-events-none"
        style={{ color: "rgba(255,255,255,.022)" }}
      >
        春
      </span>
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-[34px] h-px mb-3.5" style={{ background: "var(--gold)" }} />
          <h2 className="font-[family-name:var(--font-noto-serif-jp)] text-[2.2rem] text-white font-extralight leading-[1.5] mb-5">
            <em className="font-[family-name:var(--font-cormorant-garamond)] not-italic text-gold text-[.85rem] block tracking-[.3em] mb-1.5">
              SEASONAL HIGHLIGHTS
            </em>
            今の季節に
            <br />
            行くべき場所
          </h2>
          <p className="text-[.78rem] leading-[2.1] mb-7" style={{ color: "rgba(255,255,255,.48)" }}>
            Japan&apos;s four seasons transform the same landscapes into completely different worlds —
            cherry blossoms, summer festivals, crimson maples, snow villages. Each season holds its
            own unrepeatable magic.
          </p>
          <a
            href="#"
            className="inline-block py-3 px-8 font-[family-name:var(--font-cormorant-garamond)] text-[.8rem] tracking-[.2em] cursor-pointer no-underline transition-all duration-300 bg-transparent hover:bg-gold hover:text-ink"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            Explore seasonal guide
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {CARDS.map((c) => (
            <div
              key={c.key}
              onClick={() => setSeason(c.key)}
              className="p-4.5 cursor-pointer transition-colors duration-300 hover:border-gold"
              style={{ border: "1px solid rgba(255,255,255,.08)" }}
            >
              <div className="text-[1.35rem] mb-2">{c.icon}</div>
              <div className="font-[family-name:var(--font-noto-serif-jp)] text-[.8rem] text-white mb-0.5 font-light">
                {c.title}
              </div>
              <div className="text-[.58rem] tracking-[.06em]" style={{ color: "rgba(255,255,255,.32)" }}>
                {c.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
