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
    <div className="seasonal">
      <div className="seasi">
        <div className="seast">
          <div style={{ width: 34, height: 1, background: "var(--gold)", marginBottom: "0.85rem" }} />
          <h2><em>SEASONAL HIGHLIGHTS</em>Where to Go<br />This Season</h2>
          <p>Japan&apos;s four seasons transform the same landscapes into completely different worlds — cherry blossoms, summer festivals, crimson maples, snow villages. Each season holds its own unrepeatable magic.</p>
          <a href="/regions/hokkaido" className="btnol">Explore seasonal guide</a>
        </div>
        <div className="smcards">
          {CARDS.map((c) => (
            <div key={c.key} className="smini" onClick={() => setSeason(c.key)}>
              <div className="smini-i">{c.icon}</div>
              <div className="smini-t">{c.title}</div>
              <div className="smini-d">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
