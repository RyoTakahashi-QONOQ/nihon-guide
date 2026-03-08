"use client";
import Image from "next/image";
import { FOODS } from "@/data/foods";

interface FoodGridProps {
  onToast: (msg: string) => void;
}

export default function FoodGrid({ onToast }: FoodGridProps) {
  return (
    <section id="gourmet">
      <div className="sec">
        <div className="sech">
          <div className="sect"><em>CULINARY JAPAN</em>食の日本</div>
          <a href="#" className="seeall">Food guide →</a>
        </div>
        <div className="fgrid">
          {FOODS.map((f) => (
            <div key={f.en} className="fcard" onClick={() => onToast(`Opening ${f.en} guide...`)}>
              <div className={`fbg ${f.css}`}>
                <Image src={f.img} alt={f.en} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
              </div>
              <div className="fov" />
              <div className="fbody">
                <div className="fcat">{f.cat}</div>
                <div className="fname">{f.n} <span style={{ fontFamily: "var(--font-cg)", fontSize: "0.9rem", opacity: 0.55, fontStyle: "italic" }}>{f.en}</span></div>
                <p className="fdesc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
