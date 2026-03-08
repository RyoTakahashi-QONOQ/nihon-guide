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

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const region = REGIONS.find((r) => r.id === params.id);
  if (!region) return {};
  return {
    title: `${region.n} (${region.en}) — NIHON Japan Travel Guide`,
    description: region.desc.slice(0, 160),
    openGraph: {
      title: `${region.en} — NIHON Japan Travel Guide`,
      description: region.desc.slice(0, 160),
      images: [{ url: region.img.replace(/w=\d+/, "w=1200"), width: 1200, height: 630 }],
    },
  };
}

export default function RegionPage({ params }: { params: { id: string } }) {
  const region = REGIONS.find((r) => r.id === params.id);
  if (!region) notFound();

  const regionSpots = SPOTS.filter((s) => s.r === region.id);

  return (
    <>
      <Breadcrumb items={[{ label: "Regions", href: "/#regions" }, { label: region.en }]} />
      <DetailHero
        img={region.img.replace(/w=\d+/, "w=1400")}
        title={region.n}
        subtitle={region.en}
        badge={`REGION ${region.num}`}
        desc={region.desc.split(".").slice(0, 2).join(".") + "."}
      />

      <div className="detail-content">
        {/* Info Cards */}
        <div className="info-grid">
          <div className="info-card">
            <div className="info-card-label">SPOTS</div>
            <div className="info-card-value">{region.cnt} destinations</div>
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

        {/* Description */}
        <div className="detail-section">
          <h2><em>ABOUT</em>{region.en}について</h2>
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

        {/* Access */}
        <div className="detail-section">
          <h2><em>ACCESS</em>アクセス</h2>
          <p>{region.access}</p>
        </div>

        {/* Spots in this region */}
        {regionSpots.length > 0 && (
          <div className="detail-section">
            <h2><em>DESTINATIONS</em>この地域のスポット</h2>
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

        <Link href="/" className="back-link">← Back to NIHON top</Link>
      </div>
      <Footer />
    </>
  );
}
