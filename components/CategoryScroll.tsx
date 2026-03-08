"use client";
import { CATEGORIES } from "@/data/categories";

interface CategoryScrollProps {
  setCategory: (c: string) => void;
  onToast: (msg: string) => void;
}

export default function CategoryScroll({ setCategory, onToast }: CategoryScrollProps) {
  const handleClick = (id: string) => {
    setCategory(id);
    onToast("Category filter applied");
    document.getElementById("spots")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="cats" style={{ background: "var(--ink2)" }} className="py-22">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="flex items-end justify-between mb-12 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.75rem] font-light tracking-[.04em] text-washi">
            <em className="font-[family-name:var(--font-cormorant-garamond)] not-italic text-[.82rem] text-gold block tracking-[.25em] mb-0.5">
              EXPLORE BY CATEGORY
            </em>
            カテゴリで探す
          </div>
          <a
            href="#"
            className="text-[.66rem] tracking-[.18em] text-gold no-underline border-b border-gold2 pb-0.5 font-[family-name:var(--font-cormorant-garamond)] whitespace-nowrap"
          >
            All →
          </a>
        </div>

        <div className="flex gap-4.5 overflow-x-auto pb-3 [scrollbar-width:thin]" style={{ scrollbarColor: "var(--gold) transparent" }}>
          {CATEGORIES.map((c, i) => (
            <div
              key={`${c.id}-${i}`}
              onClick={() => handleClick(c.id)}
              className="min-w-[195px] p-7 px-5 cursor-pointer transition-all duration-350 relative overflow-hidden group hover:border-gold"
              style={{
                border: "1px solid rgba(201,168,76,.13)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <div
                className="absolute top-0 left-0 h-0.5 w-0 transition-[width] duration-350 group-hover:w-full"
                style={{ background: "var(--gold)" }}
              />
              <span className="text-[1.75rem] block mb-3.5">{c.ico}</span>
              <div className="font-[family-name:var(--font-noto-serif-jp)] text-[.92rem] text-washi mb-0.5 font-light">
                {c.n}
              </div>
              <div className="font-[family-name:var(--font-cormorant-garamond)] text-[.62rem] text-stone tracking-[.12em] italic">
                {c.en}
              </div>
              <div className="mt-4 text-[1.4rem] font-[family-name:var(--font-cormorant-garamond)] text-gold font-light">
                {c.num.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
