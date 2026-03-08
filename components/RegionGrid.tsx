"use client";
import Image from "next/image";
import { REGIONS } from "@/data/regions";

interface RegionGridProps {
  onToast: (msg: string) => void;
}

export default function RegionGrid({ onToast }: RegionGridProps) {
  return (
    <section id="regions">
      <div className="sec">
        <div className="sech">
          <div className="sect"><em>REGIONS OF JAPAN</em>地域から探す</div>
          <a href="#" className="seeall">View all regions →</a>
        </div>
        <div className="rgrid">
          {REGIONS.map((r) => (
            <div key={r.id} className="rcard" onClick={() => onToast(`Exploring ${r.en}...`)}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
