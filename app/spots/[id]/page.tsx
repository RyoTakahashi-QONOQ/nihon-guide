import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SPOTS } from "@/data/spots";
import { REGIONS } from "@/data/regions";
import { bookingUrl, klookUrl } from "@/data/affiliate";
import Breadcrumb from "@/components/Breadcrumb";
import DetailHero from "@/components/DetailHero";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return SPOTS.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const spot = SPOTS.find((s) => s.id === params.id);
  if (!spot) return {};
  return {
    title: `${spot.n} (${spot.en}) — NIHON Japan Travel Guide`,
    description: spot.desc,
    openGraph: {
      title: `${spot.en} — NIHON Japan Travel Guide`,
      description: spot.desc,
      images: [{ url: spot.img.replace(/w=\d+/, "w=1200"), width: 1200, height: 630 }],
    },
  };
}

export default function SpotPage({ params }: { params: { id: string } }) {
  const spot = SPOTS.find((s) => s.id === params.id);
  if (!spot) notFound();

  const region = REGIONS.find((r) => r.id === spot.r);
  const relatedSpots = SPOTS.filter((s) => s.r === spot.r && s.id !== spot.id);

  const seasonLabels: Record<string, string> = {
    spring: "Spring 春", summer: "Summer 夏", autumn: "Autumn 秋", winter: "Winter 冬",
  };

  return (
    <>
      <Breadcrumb items={[
        { label: region?.en || spot.rl, href: `/regions/${spot.r}` },
        { label: spot.en },
      ]} />
      <DetailHero
        img={spot.img.replace(/w=\d+/, "w=1400")}
        title={spot.n}
        subtitle={spot.en}
        badge={spot.bdg}
        rating={spot.rt}
      />

      <div className="detail-content">
        {/* Info Cards */}
        <div className="info-grid">
          <div className="info-card">
            <div className="info-card-label">REGION</div>
            <div className="info-card-value">
              <Link href={`/regions/${spot.r}`} style={{ color: "var(--gold)", textDecoration: "none" }}>{spot.rl}</Link>
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-label">BEST TIME</div>
            <div className="info-card-value">{spot.best}</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">CATEGORY</div>
            <div className="info-card-value" style={{ textTransform: "capitalize" }}>{spot.cat}</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">RATING</div>
            <div className="info-card-value">★ {spot.rt} / 5.0</div>
          </div>
        </div>

        {/* Seasons */}
        <div className="tag-list" style={{ marginBottom: "2rem" }}>
          {spot.szn.map((s) => (
            <span key={s} className="tag">{seasonLabels[s]}</span>
          ))}
        </div>

        {/* Long Description */}
        <div className="detail-section">
          <h2><em>OVERVIEW</em>{spot.n}ガイド</h2>
          <p>{spot.longDesc}</p>
        </div>

        {/* Tags */}
        <div className="detail-section">
          <h2><em>FEATURES</em>特徴</h2>
          <div className="tag-list">
            {spot.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Access */}
        <div className="detail-section">
          <h2><em>ACCESS</em>アクセス</h2>
          <p>{spot.access}</p>
        </div>

        {/* Tips */}
        <div className="detail-section">
          <h2><em>TIPS</em>旅のヒント</h2>
          <ul className="tips-list">
            {spot.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Affiliate */}
        <div className="detail-section">
          <h2><em>BOOK</em>予約する</h2>
          <div className="affiliate-row">
            <a href={bookingUrl(spot.en)} target="_blank" rel="noopener noreferrer" className="affiliate-btn">
              Hotels in {spot.en} →
            </a>
            <a href={klookUrl(spot.en)} target="_blank" rel="noopener noreferrer" className="affiliate-btn">
              Activities in {spot.en} →
            </a>
          </div>
        </div>

        {/* Related Spots */}
        {relatedSpots.length > 0 && (
          <div className="detail-section">
            <h2><em>NEARBY</em>同じ地域のスポット</h2>
            <div className="related-grid">
              {relatedSpots.map((rs) => (
                <Link key={rs.id} href={`/spots/${rs.id}`} className="related-card">
                  <div className="related-card-img">
                    <Image src={rs.img} alt={rs.en} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="related-card-body">
                    <h3>{rs.n}</h3>
                    <span className="en">{rs.en}</span>
                    <p>{rs.desc}</p>
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
