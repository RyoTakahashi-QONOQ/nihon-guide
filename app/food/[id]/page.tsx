import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FOODS } from "@/data/foods";
import Breadcrumb from "@/components/Breadcrumb";
import DetailHero from "@/components/DetailHero";
import Footer from "@/components/Footer";
import ArticleGallery from "@/components/ArticleGallery";

export function generateStaticParams() {
  return FOODS.map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const food = FOODS.find((f) => f.id === id);
  if (!food) return {};
  return {
    title: `${food.n} (${food.en}) — NIHON Japan Food Guide`,
    description: food.desc,
    openGraph: {
      title: `${food.en} — Japanese Cuisine Guide | NIHON`,
      description: food.desc,
      images: [{ url: food.img.replace(/w=\d+/, "w=1200"), width: 1200, height: 630 }],
    },
  };
}

export default async function FoodPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const food = FOODS.find((f) => f.id === id);
  if (!food) notFound();

  const otherFoods = FOODS.filter((f) => f.id !== food.id);

  return (
    <>
      <Breadcrumb items={[{ label: "Cuisine", href: "/#gourmet" }, { label: food.en }]} />
      <DetailHero
        img={food.img.replace(/w=\d+/, "w=1400")}
        title={food.n}
        subtitle={food.en}
        badge={food.cat}
      />

      <div className="detail-content">
        <div className="detail-section">
          <h2><em>GUIDE</em>{food.n}ガイド</h2>
          <p>{food.longDesc}</p>
        </div>

        {food.gallery && food.gallery.length > 0 && (
          <div className="detail-section">
            <h2><em>GALLERY</em>ギャラリー</h2>
            <ArticleGallery images={food.gallery} cols={2} />
          </div>
        )}

        <div className="detail-section">
          <h2><em>HISTORY</em>歴史</h2>
          <p>{food.history}</p>
        </div>

        <div className="detail-section">
          <h2><em>WHERE TO EAT</em>おすすめ地域</h2>
          <ul className="highlights-list">
            {food.bestRegions.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2><em>MORE CUISINE</em>他の料理</h2>
          <div className="related-grid">
            {otherFoods.map((f) => (
              <Link key={f.id} href={`/food/${f.id}`} className="related-card">
                <div className="related-card-body">
                  <h3>{f.n}</h3>
                  <span className="en">{f.en}</span>
                  <p>{f.desc}</p>
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
