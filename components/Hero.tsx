"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroProps {
  onSearch: (q: string) => void;
  query: string;
}

const SLIDES = [
  { src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1800&q=80", alt: "Fushimi Inari shrine gates in Kyoto" },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1800&q=80", alt: "Mount Fuji with cherry blossoms" },
  { src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1800&q=80", alt: "Traditional Japanese temple in autumn" },
  { src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1800&q=80", alt: "Shibuya crossing at night in Tokyo" },
  { src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1800&q=80", alt: "Cherry blossom canal in spring" },
];

export default function Hero({ onSearch, query }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const advance = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
      setTransitioning(false);
    }, 800);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="hero">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{
            opacity: i === current ? (transitioning ? 0 : 1) : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}
      <div className="hero-overlay" />
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
        {/* Slide indicators */}
        <div className="hero-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? "hero-dot--active" : ""}`}
              onClick={() => { setCurrent(i); setTransitioning(false); }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="scue">
        <span>SCROLL</span>
        <div className="scueln" />
      </div>
    </section>
  );
}
