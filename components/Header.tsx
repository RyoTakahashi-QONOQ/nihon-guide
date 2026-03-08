"use client";
import { useState } from "react";
import { useScrollHeader } from "@/hooks/useScrollHeader";

interface HeaderProps {
  onOpenMap: () => void;
  onToast: (msg: string) => void;
}

export default function Header({ onOpenMap, onToast }: HeaderProps) {
  const scrolled = useScrollHeader();
  const [activeLang, setActiveLang] = useState("EN");

  const langs = ["EN", "JA", "中", "한"] as const;
  const langNames: Record<string, string> = { EN: "English", JA: "日本語", "中": "中文", "한": "한국어" };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="logo">
        <span className="logo-m">NIHON</span>
        <span className="logo-j">日本観光ガイド</span>
      </div>
      <nav className="site-nav">
        <a href="#regions">REGIONS</a>
        <a href="#spots">SPOTS</a>
        <a href="#gourmet">GOURMET</a>
        <a href="#cats">DISCOVER</a>
      </nav>
      <div className="hright">
        <div className="lg">
          {langs.map((l) => (
            <button
              key={l}
              className={`lb${activeLang === l ? " active" : ""}`}
              onClick={() => { setActiveLang(l); onToast(`Language: ${langNames[l]}`); }}
            >
              {l}
            </button>
          ))}
        </div>
        <button className="mapbtn" onClick={onOpenMap}>
          <span className="pulse" />
          🗾 OPEN MAP
        </button>
      </div>
    </header>
  );
}
