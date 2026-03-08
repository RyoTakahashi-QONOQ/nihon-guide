"use client";
import Image from "next/image";

interface HeroProps {
  onSearch: (q: string) => void;
  query: string;
}

export default function Hero({ onSearch, query }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1800&q=80"
          alt="Japan landscape"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%,rgba(201,168,76,.06) 0%,transparent 70%),linear-gradient(165deg,#f5f0e8 0%,#faf7f2 55%,#ede8df 100%)",
        }}
      />

      {/* Spinning ring */}
      <div
        className="absolute w-[680px] h-[680px] rounded-full top-1/2 left-1/2"
        style={{
          border: "1px solid rgba(201,168,76,.13)",
          animation: "spin-ring 80s linear infinite",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            inset: "42px",
            border: "1px solid rgba(201,168,76,.07)",
          }}
        />
      </div>

      {/* Vertical text */}
      <div
        className="absolute right-14 top-1/2 hidden md:block font-[family-name:var(--font-noto-serif-jp)] text-[.6rem] tracking-[.4em] font-extralight"
        style={{
          transform: "translateY(-50%)",
          writingMode: "vertical-rl",
          color: "rgba(138,130,117,.35)",
        }}
      >
        発見の旅へ · DISCOVER JAPAN
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center p-8"
        style={{ animation: "fade-in .9s ease both" }}
      >
        <span className="font-[family-name:var(--font-cormorant-garamond)] text-[.7rem] tracking-[.5em] text-gold mb-8 block italic">
          THE COMPLETE GUIDE TO JAPAN · 日本旅行完全ガイド
        </span>
        <h1 className="font-[family-name:var(--font-noto-serif-jp)] font-extralight leading-[1.05] mb-5 tracking-[.04em] text-[clamp(3rem,7vw,6.5rem)]">
          日本を、
          <br />
          深く知る
          <span className="block font-[family-name:var(--font-cormorant-garamond)] italic font-light text-stone tracking-[.18em] mt-1.5 text-[clamp(1.3rem,3vw,2.8rem)]">
            Discover the Soul of Japan
          </span>
        </h1>
        <p className="text-[.8rem] tracking-[.07em] text-stone mb-12 leading-8 font-light">
          47 Prefectures · 10,000+ Destinations · Four Seasons of Wonder
          <br />
          Where ancient tradition meets the pulse of tomorrow
        </p>

        {/* Search bar */}
        <div
          className="flex max-w-[540px] mx-auto"
          style={{
            border: "1px solid rgba(201,168,76,.38)",
            background: "rgba(255,255,255,.7)",
            backdropFilter: "blur(8px)",
          }}
        >
          <input
            type="text"
            value={query}
            placeholder="Search destinations, food, culture..."
            onChange={(e) => onSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch((e.target as HTMLInputElement).value);
            }}
            className="flex-1 py-4 px-5 border-none bg-transparent font-[family-name:var(--font-dm-sans)] text-[.8rem] text-ink outline-none tracking-[.04em] placeholder:text-stone"
          />
          <button
            onClick={() => onSearch(query)}
            className="py-4 px-7 border-none text-white text-[.7rem] tracking-[.2em] cursor-pointer font-[family-name:var(--font-cormorant-garamond)] transition-colors duration-300 hover:bg-ink"
            style={{ background: "var(--gold)" }}
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-stone text-[.58rem] tracking-[.25em]">
        <span>SCROLL</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom,var(--gold),transparent)",
            animation: "scroll-line 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
