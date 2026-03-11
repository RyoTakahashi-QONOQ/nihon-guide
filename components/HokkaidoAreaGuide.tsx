"use client";

import { useState } from "react";
import Image from "next/image";
import HokkaidoAreaMap from "./HokkaidoAreaMap";

interface AreaData {
  name: string;
  img: string;
  alt: string;
  cities: string;
  desc: string;
}

export default function HokkaidoAreaGuide({ areas }: { areas: AreaData[] }) {
  const [activeArea, setActiveArea] = useState<number | null>(null);

  return (
    <div className="rmap-guide">
      <div className="rmap-map-wrap">
        <HokkaidoAreaMap activeArea={activeArea} onHover={setActiveArea} />
      </div>
      <div className="rmap-cards">
        {areas.map((a, i) => (
          <div
            key={i}
            className={`rmap-card ${activeArea === i ? "rmap-card--active" : ""}`}
            onMouseEnter={() => setActiveArea(i)}
            onMouseLeave={() => setActiveArea(null)}
          >
            <div className="rmap-card-img">
              <Image src={a.img} alt={a.alt} fill style={{ objectFit: "cover" }} sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="rmap-card-body">
              <div className="info-card-label">{a.name}</div>
              <div style={{ fontSize: ".68rem", color: "var(--gold)", marginBottom: ".45rem", letterSpacing: ".04em" }}>
                {a.cities}
              </div>
              <p style={{ fontSize: ".75rem", lineHeight: 1.85, color: "var(--stone)" }}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
