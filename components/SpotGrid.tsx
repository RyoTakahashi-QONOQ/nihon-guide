"use client";
import Image from "next/image";
import { Spot } from "@/types";

interface SpotGridProps {
  spots: Spot[];
  onToast: (msg: string) => void;
}

export default function SpotGrid({ spots, onToast }: SpotGridProps) {
  return (
    <section id="spots">
      <div className="py-22 px-10 max-w-[1380px] mx-auto">
        <div className="flex items-end justify-between mb-12 pb-5 border-b border-pale">
          <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.75rem] font-light tracking-[.04em]">
            <em className="font-[family-name:var(--font-cormorant-garamond)] not-italic text-[.82rem] text-gold block tracking-[.25em] mb-0.5">
              MUST-SEE DESTINATIONS
            </em>
            厳選スポット
          </div>
          <a
            href="#"
            className="text-[.66rem] tracking-[.18em] text-gold no-underline border-b border-gold2 pb-0.5 font-[family-name:var(--font-cormorant-garamond)] whitespace-nowrap"
          >
            View all →
          </a>
        </div>

        {spots.length === 0 ? (
          <div className="text-center py-12 text-stone text-[.83rem]">
            No spots match your filters. Try adjusting season or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {spots.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-pale overflow-hidden cursor-pointer transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(0,0,0,.08)] group"
                onClick={() => onToast(`Opening ${s.en}...`)}
              >
                <div className="h-[194px] relative overflow-hidden">
                  <div className={`w-full h-full ${s.css} transition-transform duration-550 group-hover:scale-[1.08]`}>
                    <Image src={s.img} alt={s.en} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  </div>
                  <div
                    className="absolute top-3 left-3 text-white text-[.55rem] tracking-[.12em] py-0.5 px-2 font-[family-name:var(--font-dm-sans)] font-medium"
                    style={{ background: "rgba(201,168,76,.92)" }}
                  >
                    {s.bdg}
                  </div>
                  <div
                    className="absolute bottom-3 right-3 text-gold text-[.76rem] py-0.5 px-2 font-[family-name:var(--font-cormorant-garamond)]"
                    style={{ background: "rgba(0,0,0,.48)", backdropFilter: "blur(4px)" }}
                  >
                    ★ {s.rt}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[.58rem] tracking-[.18em] text-gold mb-1 font-[family-name:var(--font-dm-sans)] font-medium">
                    {s.rl}
                  </div>
                  <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.05rem] font-light">
                    {s.n}
                  </div>
                  <span className="font-[family-name:var(--font-cormorant-garamond)] text-[.7rem] text-stone italic block mt-0.5 mb-2.5">
                    {s.en}
                  </span>
                  <p className="text-[.73rem] leading-[1.85] text-stone">{s.desc}</p>
                  <div className="mt-3.5 flex gap-1.5 flex-wrap">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="py-0.5 px-2 text-[.57rem] text-stone tracking-[.05em]"
                        style={{ background: "var(--pale)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-0.5 mt-2.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${s.szn.includes("spring") ? "bg-[#f4a4b4]" : "bg-pale"}`} />
                    <div className={`w-1.5 h-1.5 rounded-full ${s.szn.includes("summer") ? "bg-[#78c878]" : "bg-pale"}`} />
                    <div className={`w-1.5 h-1.5 rounded-full ${s.szn.includes("autumn") ? "bg-[#e8a060]" : "bg-pale"}`} />
                    <div className={`w-1.5 h-1.5 rounded-full ${s.szn.includes("winter") ? "bg-[#90b8e0]" : "bg-pale"}`} />
                    <span className="text-[.54rem] text-stone2 tracking-[.04em] ml-0.5">
                      Best: {s.best}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
