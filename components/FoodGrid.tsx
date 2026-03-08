"use client";
import Image from "next/image";
import { FOODS } from "@/data/foods";

interface FoodGridProps {
  onToast: (msg: string) => void;
}

export default function FoodGrid({ onToast }: FoodGridProps) {
  return (
    <section id="gourmet">
      <div className="py-22 px-10 max-w-[1380px] mx-auto">
        <div className="flex items-end justify-between mb-12 pb-5 border-b border-pale">
          <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.75rem] font-light tracking-[.04em]">
            <em className="font-[family-name:var(--font-cormorant-garamond)] not-italic text-[.82rem] text-gold block tracking-[.25em] mb-0.5">
              CULINARY JAPAN
            </em>
            食の日本
          </div>
          <a
            href="#"
            className="text-[.66rem] tracking-[.18em] text-gold no-underline border-b border-gold2 pb-0.5 font-[family-name:var(--font-cormorant-garamond)] whitespace-nowrap"
          >
            Food guide →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] grid-rows-[auto_auto] gap-5">
          {FOODS.map((f, i) => (
            <div
              key={f.en}
              className={`relative overflow-hidden cursor-pointer group ${
                i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[494px]" : "min-h-[235px]"
              }`}
              onClick={() => onToast(`Opening ${f.en} guide...`)}
            >
              <div className={`absolute inset-0 ${f.css} transition-transform duration-500 group-hover:scale-[1.06]`}>
                <Image src={f.img} alt={f.en} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
              </div>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top,rgba(0,0,0,.78) 0%,rgba(0,0,0,.04) 60%,transparent 100%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-[.56rem] tracking-[.2em] mb-1 font-[family-name:var(--font-dm-sans)]" style={{ color: "var(--gold2)" }}>
                  {f.cat}
                </div>
                <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.2rem] font-extralight mb-0.5">
                  {f.n}{" "}
                  <span className="font-[family-name:var(--font-cormorant-garamond)] text-[.9rem] opacity-55 italic">
                    {f.en}
                  </span>
                </div>
                <p className="text-[.66rem] opacity-50 leading-[1.7]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
