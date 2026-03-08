export default function Footer() {
  return (
    <footer className="py-16 px-10 pb-8" style={{ background: "#0a0804" }}>
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
        <div>
          <div className="flex items-baseline gap-3.5">
            <span className="font-[family-name:var(--font-cormorant-garamond)] text-[1.4rem] font-light tracking-[.35em] text-gold">
              NIHON
            </span>
          </div>
          <p className="mt-4 text-[.7rem] leading-8" style={{ color: "rgba(255,255,255,.22)" }}>
            The most comprehensive Japan travel guide — built for every season, every region, every
            palate. Bringing the depth and beauty of Japan to travellers worldwide.
          </p>
          <p className="mt-3 text-[.6rem]" style={{ color: "rgba(255,255,255,.14)" }}>
            © 2024 NIHON Japan Travel Guide
          </p>
        </div>
        {[
          {
            title: "DISCOVER",
            links: ["Regions", "UNESCO Sites", "Seasonal Guide", "Hidden Gems", "Day Trips"],
          },
          {
            title: "PLAN",
            links: ["Itineraries", "Transport", "Ryokan Guide", "Budget Tips", "Visa Info"],
          },
          {
            title: "ABOUT",
            links: ["Editorial", "Contributors", "Photography", "Contact", "Press"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-[family-name:var(--font-cormorant-garamond)] text-[.78rem] tracking-[.2em] text-gold mb-4">
              {col.title}
            </h4>
            <ul className="list-none">
              {col.links.map((link) => (
                <li key={link} className="mb-2.5">
                  <a
                    href="#"
                    className="no-underline text-[.7rem] tracking-[.04em] transition-colors duration-250 hover:text-gold"
                    style={{ color: "rgba(255,255,255,.26)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="max-w-[1380px] mx-auto pt-6 flex justify-between text-[.6rem] tracking-[.08em]"
        style={{
          borderTop: "1px solid rgba(255,255,255,.04)",
          color: "rgba(255,255,255,.18)",
        }}
      >
        <span>NIHON — Japan&apos;s Premier Travel Guide</span>
        <span>日本観光ガイド · Inbound Welcome</span>
      </div>
    </footer>
  );
}
