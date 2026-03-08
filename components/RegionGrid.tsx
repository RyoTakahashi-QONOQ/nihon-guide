"use client";
import Image from "next/image";
import Link from "next/link";
import { REGIONS } from "@/data/regions";

export default function RegionGrid() {
  return (
    <section id="regions">
      <div className="sec">
        <div className="sech">
          <div className="sect"><em>REGIONS OF JAPAN</em>地域から探す</div>
          <Link href="/regions/hokkaido" className="seeall">View all regions →</Link>
        </div>
        <div className="rgrid">
          {REGIONS.map((r) => (
            <Link key={r.id} href={`/regions/${r.id}`} className="rcard" style={{ textDecoration: "none" }}>
              <div className={`rcimg ${r.css}`}>
                <Image src={r.img} alt={r.en} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 50vw, 25vw" />
              </div>
              <div className="rcov" />
              <div className="rcnt">{r.cnt} SPOTS</div>
              <div className="rcbody">
                <div className="rnum">{r.num}</div>
                <div className="rname">{r.n}</div>
                <div className="ren">{r.en}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
