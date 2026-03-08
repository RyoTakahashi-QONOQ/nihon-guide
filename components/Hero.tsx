"use client";
import Image from "next/image";

interface HeroProps {
  onSearch: (q: string) => void;
  query: string;
}

export default function Hero({ onSearch, query }: HeroProps) {
  return (
    <section className="hero">
      <div className="hbg">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1800&q=80"
          alt="Japan landscape"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="hov" />
      <div className="hring" />
      <div className="hvt">発見の旅へ · DISCOVER JAPAN</div>
      <div className="hcon">
        <span className="heye">THE COMPLETE GUIDE TO JAPAN · 日本旅行完全ガイド</span>
        <h1 className="hh1">
          日本を、<br />深く知る
          <span>Discover the Soul of Japan</span>
        </h1>
        <p className="hsub">
          47 Prefectures · 10,000+ Destinations · Four Seasons of Wonder<br />
          Where ancient tradition meets the pulse of tomorrow
        </p>
        <div className="sbar">
          <input
            type="text"
            value={query}
            placeholder="Search destinations, food, culture..."
            onChange={(e) => onSearch(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") onSearch((e.target as HTMLInputElement).value); }}
          />
          <button onClick={() => onSearch(query)}>SEARCH</button>
        </div>
      </div>
      <div className="scue">
        <span>SCROLL</span>
        <div className="scueln" />
      </div>
    </section>
  );
}
