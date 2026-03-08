"use client";
import Image from "next/image";
import Link from "next/link";
import { FOODS } from "@/data/foods";

export default function FoodGrid() {
  return (
    <section id="gourmet">
      <div className="sec">
        <div className="sech">
          <div className="sect"><em>CULINARY JAPAN</em>食の日本</div>
          <Link href="/food/sushi" className="seeall">Food guide →</Link>
        </div>
        <div className="fgrid">
          {FOODS.map((f) => (
            <Link key={f.id} href={`/food/${f.id}`} className="fcard" style={{ textDecoration: "none" }}>
              <div className={`fbg ${f.css}`}>
                <Image src={f.img} alt={f.en} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
              </div>
              <div className="fov" />
              <div className="fbody">
                <div className="fcat">{f.cat}</div>
                <div className="fname">{f.n} <span style={{ fontFamily: "var(--font-cg)", fontSize: "0.9rem", opacity: 0.55, fontStyle: "italic" }}>{f.en}</span></div>
                <p className="fdesc">{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
