"use client";
import Image from "next/image";
import Link from "next/link";
import { Spot } from "@/types";

interface SpotGridProps {
  spots: Spot[];
}

export default function SpotGrid({ spots }: SpotGridProps) {
  return (
    <section id="spots">
      <div className="sec">
        <div className="sech">
          <div className="sect"><em>MUST-SEE DESTINATIONS</em>厳選スポット</div>
          <Link href="/spots/tokyo" className="seeall">View all →</Link>
        </div>
        {spots.length === 0 ? (
          <div className="nores">No spots match your filters. Try adjusting season or category.</div>
        ) : (
          <div className="spgrid">
            {spots.map((s) => (
              <Link key={s.id} href={`/spots/${s.id}`} className="scard" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="scimg">
                  <div className={`scimgbg ${s.css}`}>
                    <Image src={s.img} alt={s.en} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  </div>
                  <div className="scbadge">{s.bdg}</div>
                  <div className="scrat">★ {s.rt}</div>
                </div>
                <div className="scbody">
                  <div className="scrl">{s.rl}</div>
                  <div className="scname">{s.n}</div>
                  <span className="scen">{s.en}</span>
                  <p className="scdesc">{s.desc}</p>
                  <div className="sctags">
                    {s.tags.map((t) => (<span key={t} className="tag">{t}</span>))}
                  </div>
                  <div className="scszn">
                    <div className={`sd${s.szn.includes("spring") ? " sp" : ""}`} />
                    <div className={`sd${s.szn.includes("summer") ? " su" : ""}`} />
                    <div className={`sd${s.szn.includes("autumn") ? " au" : ""}`} />
                    <div className={`sd${s.szn.includes("winter") ? " wi" : ""}`} />
                    <span className="sdlbl">Best: {s.best}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
