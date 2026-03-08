import Image from "next/image";

interface DetailHeroProps {
  img: string;
  title: string;
  subtitle?: string;
  badge?: string;
  desc?: string;
  rating?: number;
}

export default function DetailHero({ img, title, subtitle, badge, desc, rating }: DetailHeroProps) {
  return (
    <div className="detail-hero">
      <div className="detail-hero-img">
        <Image src={img} alt={title} fill style={{ objectFit: "cover" }} sizes="100vw" priority />
      </div>
      <div className="detail-hero-content">
        {badge && <span className="badge">{badge}</span>}
        <h1>
          {title}
          {subtitle && <span>{subtitle}</span>}
        </h1>
        {rating && <span className="rating-badge">★ {rating}</span>}
        {desc && <p className="hero-desc">{desc}</p>}
      </div>
    </div>
  );
}
