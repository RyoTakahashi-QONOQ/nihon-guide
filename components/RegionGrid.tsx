"use client";
import Image from "next/image";
import { REGIONS } from "@/data/regions";

interface RegionGridProps {
  onToast: (msg: string) => void;
}

export default function RegionGrid({ onToast }: RegionGridProps) {
  return (
    <section id="regions">
      <div className="py-22 px-10 max-w-[1380px] mx-auto">
        <div className="flex items-end justify-between mb-12 pb-5 border-b border-pale">
          <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.75rem] font-light tracking-[.04em]">
            <em className="font-[family-name:var(--font-cormorant-garamond)] not-italic text-[.82rem] text-gold block tracking-[.25em] mb-0.5">
              REGIONS OF JAPAN
            </em>
            地域から探す
          </div>
          <a
            href="#"
            className="text-[.66rem] tracking-[.18em] text-gold no-underline border-b border-gold2 pb-0.5 font-[family-name:var(--font-cormorant-garamond)] whitespace-nowrap"
          >
            View all regions →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {REGIONS.map((r, i) => (
            <div
              key={r.id}
              className={`relative overflow-hidden cursor-pointer group ${
                i === 0 ? "lg:row-span-2 aspect-auto" : ""
              } ${i === 0 ? "" : "aspect-[3/4]"} ${i === 1 || i === 2 ? "lg:aspect-[4/3]" : ""}`}
              style={{ aspectRatio: i === 0 ? undefined : undefined }}
              onClick={() => onToast(`Exploring ${r.en}...`)}
            >
              <div className={`absolute inset-0 ${r.css} transition-transform duration-600 group-hover:scale-[1.06]`}>
                <Image src={r.img} alt={r.en} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,.04) 55%,transparent 100%)",
                }}
              />
              <div
                className="absolute top-3.5 right-3.5 text-white py-0.5 px-2 text-[.56rem] tracking-[.12em] font-[family-name:var(--font-cormorant-garamond)]"
                style={{
                  background: "rgba(255,255,255,.11)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,.14)",
                }}
              >
                {r.cnt} SPOTS
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-[family-name:var(--font-cormorant-garamond)] text-[.56rem] tracking-[.3em] opacity-55 text-white mb-1">
                  {r.num}
                </div>
                <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.2rem] font-extralight text-white">
                  {r.n}
                </div>
                <div className="font-[family-name:var(--font-cormorant-garamond)] text-[.68rem] tracking-[.18em] opacity-55 text-white italic">
                  {r.en}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
