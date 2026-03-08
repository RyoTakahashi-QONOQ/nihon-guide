import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REGIONS } from "@/data/regions";
import { SPOTS } from "@/data/spots";
import Breadcrumb from "@/components/Breadcrumb";
import DetailHero from "@/components/DetailHero";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return REGIONS.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const region = REGIONS.find((r) => r.id === id);
  if (!region) return {};
  return {
    title: `${region.n} (${region.en}) Travel Guide — NIHON Japan`,
    description: region.desc.slice(0, 160),
    openGraph: {
      title: `${region.en} Complete Travel Guide — NIHON Japan`,
      description: region.desc.slice(0, 160),
      images: [{ url: region.img.replace(/w=\d+/, "w=1200"), width: 1200, height: 630 }],
    },
  };
}

/* ===== Hokkaido-specific rich content ===== */
const HOKKAIDO_SEASONS = [
  {
    season: "Winter 冬 (December – March)",
    desc: "Hokkaido's defining season. The island receives some of the heaviest snowfall on earth, transforming it into a winter wonderland. Sapporo Snow Festival (early February) fills Odori Park with massive ice sculptures; Niseko and Furano offer legendary powder skiing; Shiretoko's drift ice creates a frozen seascape; and every onsen town becomes magical under snow. Average temperatures: -4°C to -8°C in Sapporo.",
    highlights: ["Sapporo Snow Festival (early February)", "Niseko / Furano powder skiing", "Shiretoko drift ice walking (Feb–Mar)", "Otaru Snow Light Path Festival", "Asahikawa Winter Festival & Ice Village", "Lake Shikotsu Ice Festival"],
  },
  {
    season: "Spring 春 (April – May)",
    desc: "Cherry blossoms arrive in Hokkaido last in the nation — Matsumae and Goryōkaku Fort in Hakodate bloom in late April, while Sapporo's blossoms peak in early May. Spring is a quieter season with comfortable temperatures (8°C–18°C), fresh green landscapes, and fewer tourists. It's the best time for scenic drives as roads reopen after winter.",
    highlights: ["Cherry blossoms at Goryōkaku Fort, Hakodate (late April)", "Matsumae — Hokkaido's only castle town, 10,000 cherry trees", "Sapporo cherry blossoms at Maruyama Park (early May)", "Spring wildflowers across Daisetsuzan", "Road openings for scenic mountain passes"],
  },
  {
    season: "Summer 夏 (June – August)",
    desc: "Hokkaido's summer is Japan's most comfortable — no rainy season (tsuyu) like the mainland, with warm days (22°C–26°C) and cool nights. This is lavender season in Furano (peaking mid-July), hiking season in Daisetsuzan National Park, and the time when Hokkaido's countryside bursts into colour. Sapporo's beer gardens open, and festivals light up every city.",
    highlights: ["Furano lavender fields (late June – early August)", "Biei flower fields and Blue Pond", "Daisetsuzan hiking (Japan's largest national park)", "Sapporo Beer Garden & Summer Festival", "Shakotan Peninsula — Hokkaido's bluest sea", "Tomamu Cloud Sea Terrace (June–October)"],
  },
  {
    season: "Autumn 秋 (September – November)",
    desc: "Hokkaido's autumn foliage arrives first in Japan — Daisetsuzan's peaks turn crimson as early as mid-September, with colour descending to lower elevations through October. The autumn light creates spectacular photography conditions across Biei's patchwork hills and around Lake Shikotsu and Lake Tōya. Temperatures cool rapidly (5°C–18°C), and this is peak season for salmon runs and autumnal seafood.",
    highlights: ["Daisetsuzan autumn foliage (mid-September — Japan's earliest)", "Jōzankei Gorge autumn colours (October)", "Lake Shikotsu & Lake Tōya autumn scenery", "Biei patchwork hills in autumn light", "Salmon run season — rivers and markets", "Noboribetsu Hell Festival (late August)"],
  },
];

const HOKKAIDO_AREAS = [
  {
    name: "道央 Dō-ō (Central Hokkaido)",
    cities: "Sapporo, Otaru, Niseko, Noboribetsu, Lake Shikotsu, Lake Tōya",
    desc: "The heart of Hokkaido — home to Sapporo (population 1.97 million), the romantic canal city of Otaru, world-class skiing at Niseko, and the volcanic hot springs of Noboribetsu. Two stunning caldera lakes (Shikotsu and Tōya) offer year-round beauty. This is where most visitors base themselves.",
  },
  {
    name: "道北 Dō-hoku (Northern Hokkaido)",
    cities: "Asahikawa, Furano, Biei, Wakkanai, Rishiri & Rebun Islands",
    desc: "Japan's most dramatic countryside landscapes — the patchwork hills of Biei, lavender fields of Furano, and the vast Daisetsuzan mountain range. Wakkanai is Japan's northernmost city, with ferries to the remote islands of Rishiri and Rebun. Asahikawa is home to the famous Asahiyama Zoo.",
  },
  {
    name: "道東 Dō-tō (Eastern Hokkaido)",
    cities: "Shiretoko, Abashiri, Kushiro, Akan, Obihiro",
    desc: "The wildest part of Japan — Shiretoko UNESCO wilderness, drift ice at Abashiri, the mysterious marshlands of Kushiro (home to red-crowned cranes), and the Ainu cultural heartland of Lake Akan. Obihiro is famous for butadon (pork rice bowls) and sweets. This area is best explored by car.",
  },
  {
    name: "道南 Dō-nan (Southern Hokkaido)",
    cities: "Hakodate, Matsumae, Onuma, Esashi",
    desc: "The gateway to Hokkaido via the Hokkaido Shinkansen. Hakodate's million-dollar night view, Western architecture, and morning market are the highlights. Matsumae is Hokkaido's only castle town with spectacular cherry blossoms. Onuma Quasi-National Park offers serene lakeside scenery.",
  },
];

const HOKKAIDO_FOODS = [
  { name: "味噌ラーメン Miso Ramen", desc: "Born in Sapporo in the 1950s — rich miso broth with butter, corn, and bean sprouts. Try at Ramen Yokochō (Ramen Alley) or Sumire." },
  { name: "海鮮丼 Kaisendon", desc: "Seafood rice bowls piled high with uni (sea urchin), ikura (salmon roe), crab, scallops, and more. Nijo Market in Sapporo and Asaichi in Hakodate are legendary." },
  { name: "ジンギスカン Genghis Khan", desc: "Hokkaido's signature lamb barbecue — thin slices of lamb grilled on a dome-shaped iron plate. Beer Garden in Sapporo is the classic spot." },
  { name: "スープカレー Soup Curry", desc: "Sapporo's original creation — a spiced, fragrant curry broth with large vegetables and chicken on the bone. Garaku and Suage are local favourites." },
  { name: "蟹 Crab", desc: "Hokkaido produces Japan's finest crab — hairy crab (kegani), king crab (taraba), snow crab (zuwaigani). Best at Nijo Market or Kani Honke." },
  { name: "メロン Yūbari Melon", desc: "Japan's most premium melon — individually boxed and gift-wrapped. Can sell for over ¥30,000. Yūbari melon soft-serve is the affordable version." },
  { name: "白い恋人 Shiroi Koibito", desc: "Hokkaido's most famous souvenir — white chocolate cookies. Visit Shiroi Koibito Park in Sapporo to see the factory and try fresh-made versions." },
  { name: "乳製品 Dairy", desc: "Hokkaido produces over 50% of Japan's milk and butter. LeTAO cheesecake (Otaru), Royce chocolate, and fresh soft-serve ice cream everywhere." },
];

export default async function RegionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const region = REGIONS.find((r) => r.id === id);
  if (!region) notFound();

  const regionSpots = SPOTS.filter((s) => s.r === region.id);
  const isHokkaido = region.id === "hokkaido";

  return (
    <>
      <Breadcrumb items={[{ label: "Regions", href: "/#regions" }, { label: region.en }]} />
      <DetailHero
        img={region.img.replace(/w=\d+/, "w=1400")}
        title={region.n}
        subtitle={region.en}
        badge={`REGION ${region.num} — ${region.cnt} SPOTS`}
        desc={region.desc.split(".").slice(0, 2).join(".") + "."}
      />

      <div className="detail-content">
        {/* Quick Info */}
        <div className="info-grid">
          <div className="info-card">
            <div className="info-card-label">DESTINATIONS</div>
            <div className="info-card-value">{region.cnt} spots to explore</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">BEST SEASON</div>
            <div className="info-card-value">{region.bestSeason}</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">ACCESS</div>
            <div className="info-card-value">{region.access.split(".")[0]}.</div>
          </div>
        </div>

        {/* About */}
        <div className="detail-section">
          <h2><em>ABOUT</em>{region.en}完全ガイド</h2>
          <p>{region.desc}</p>
        </div>

        {/* Highlights */}
        <div className="detail-section">
          <h2><em>HIGHLIGHTS</em>見どころ</h2>
          <ul className="highlights-list">
            {region.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        {/* ===== HOKKAIDO-ONLY RICH SECTIONS ===== */}
        {isHokkaido && (
          <>
            {/* Seasonal Guide */}
            <div className="detail-section">
              <h2><em>SEASONAL GUIDE</em>四季の楽しみ方</h2>
              {HOKKAIDO_SEASONS.map((s, i) => (
                <div key={i} style={{ marginBottom: "2.2rem" }}>
                  <h3 style={{
                    fontFamily: "var(--font-cg)", fontSize: ".95rem", letterSpacing: ".12em",
                    color: "var(--gold)", marginBottom: ".45rem", fontWeight: 400,
                  }}>{s.season}</h3>
                  <p style={{ marginBottom: ".85rem" }}>{s.desc}</p>
                  <ul className="highlights-list">
                    {s.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* Area Guide */}
            <div className="detail-section">
              <h2><em>AREA GUIDE</em>エリア別ガイド</h2>
              <div className="info-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {HOKKAIDO_AREAS.map((a, i) => (
                  <div key={i} className="info-card">
                    <div className="info-card-label">{a.name}</div>
                    <div style={{ fontSize: ".68rem", color: "var(--gold)", marginBottom: ".45rem", letterSpacing: ".04em" }}>{a.cities}</div>
                    <p style={{ fontSize: ".75rem", lineHeight: 1.85, color: "var(--stone)" }}>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Culture */}
            <div className="detail-section">
              <h2><em>FOOD & DRINK</em>北海道グルメ</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Hokkaido is Japan&apos;s food paradise. Surrounded by cold, nutrient-rich seas and blessed with vast farmland, the island produces ingredients of unmatched freshness and quality. From the world-famous seafood markets of Sapporo and Hakodate to Sapporo&apos;s original miso ramen and soup curry, eating is the highlight of any Hokkaido trip.
              </p>
              <div className="info-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {HOKKAIDO_FOODS.map((f, i) => (
                  <div key={i} className="info-card">
                    <div className="info-card-label">{f.name}</div>
                    <p style={{ fontSize: ".75rem", lineHeight: 1.85, color: "var(--stone)" }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div className="detail-section">
              <h2><em>GETTING AROUND</em>交通ガイド</h2>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-card-label">AIR 空路</div>
                  <div className="info-card-value">New Chitose Airport (CTS) is the main gateway — domestic flights from Tokyo (1h30m), Osaka (2h), Nagoya, Fukuoka. International flights from Seoul, Taipei, Bangkok, Hong Kong. Smaller airports at Asahikawa, Hakodate, Kushiro, Obihiro, Memanbetsu (for Shiretoko).</div>
                </div>
                <div className="info-card">
                  <div className="info-card-label">RAIL 鉄道</div>
                  <div className="info-card-value">Hokkaido Shinkansen from Tokyo to Shin-Hakodate-Hokuto (4h). JR Hokkaido operates limited express trains connecting Sapporo to Hakodate (3h30m), Asahikawa (1h25m), Obihiro (2h30m), and Kushiro (4h). JR Hokkaido Pass offers excellent value for rail travellers.</div>
                </div>
                <div className="info-card">
                  <div className="info-card-label">CAR レンタカー</div>
                  <div className="info-card-value">Highly recommended for exploring beyond cities. Roads are well-maintained and scenic. In winter, 4WD with studless tyres is essential (rental companies provide these automatically). Drive on the left. Watch for deer, especially at dusk in eastern Hokkaido.</div>
                </div>
                <div className="info-card">
                  <div className="info-card-label">BUS バス</div>
                  <div className="info-card-value">Highway buses connect major cities affordably (Sapporo–Furano 2h30m, Sapporo–Niseko 3h). Resort liner buses serve ski areas and tourist destinations. City buses in Sapporo are comprehensive. Seasonal sightseeing buses run to Furano/Biei in summer.</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Access (non-Hokkaido shows full, Hokkaido is covered above) */}
        {!isHokkaido && (
          <div className="detail-section">
            <h2><em>ACCESS</em>アクセス</h2>
            <p>{region.access}</p>
          </div>
        )}

        {/* Spots in this region */}
        {regionSpots.length > 0 && (
          <div className="detail-section">
            <h2><em>DESTINATIONS</em>{isHokkaido ? "北海道の見どころ" : "この地域のスポット"}</h2>
            <div className="related-grid">
              {regionSpots.map((spot) => (
                <Link key={spot.id} href={`/spots/${spot.id}`} className="related-card">
                  <div className="related-card-img">
                    <Image src={spot.img} alt={spot.en} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="related-card-body">
                    <h3>{spot.n}</h3>
                    <span className="en">{spot.en}</span>
                    <p>{spot.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Other Regions */}
        <div className="detail-section">
          <h2><em>OTHER REGIONS</em>他の地域</h2>
          <div className="related-grid">
            {REGIONS.filter((r) => r.id !== region.id).slice(0, 4).map((r) => (
              <Link key={r.id} href={`/regions/${r.id}`} className="related-card">
                <div className="related-card-img">
                  <Image src={r.img} alt={r.en} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <div className="related-card-body">
                  <h3>{r.n}</h3>
                  <span className="en">{r.en}</span>
                  <p>{r.cnt} destinations — {r.bestSeason.split(".")[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link href="/" className="back-link">← Back to NIHON top</Link>
      </div>
      <Footer />
    </>
  );
}
