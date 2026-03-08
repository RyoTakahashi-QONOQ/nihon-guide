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
    <header
      className="fixed top-0 left-0 right-0 z-[500] h-[66px] flex items-center justify-between px-10 transition-shadow duration-300 border-b"
      style={{
        background: "rgba(250,247,242,.93)",
        backdropFilter: "blur(14px)",
        borderBottomColor: "rgba(201,168,76,.22)",
        boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,.05)" : "none",
      }}
    >
      <div className="flex items-baseline gap-3.5">
        <span className="font-[family-name:var(--font-cormorant-garamond)] text-[1.75rem] font-light tracking-[.35em] text-ink">
          NIHON
        </span>
        <span className="font-[family-name:var(--font-noto-serif-jp)] text-[.62rem] text-gold tracking-[.25em]">
          日本観光ガイド
        </span>
      </div>

      <nav className="hidden md:flex gap-8">
        {["REGIONS", "SPOTS", "GOURMET", "DISCOVER"].map((item) => (
          <a
            key={item}
            href={`#${item === "GOURMET" ? "gourmet" : item === "DISCOVER" ? "cats" : item.toLowerCase()}`}
            className="no-underline text-[.7rem] tracking-[.12em] text-stone hover:text-gold transition-colors duration-250"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex gap-px">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setActiveLang(l);
                onToast(`Language: ${langNames[l]}`);
              }}
              className="px-2.5 py-1 text-[.6rem] tracking-[.1em] cursor-pointer font-[family-name:var(--font-dm-sans)] transition-all duration-250"
              style={{
                background: activeLang === l ? "var(--gold)" : "none",
                color: activeLang === l ? "#fff" : "var(--stone)",
                border: `1px solid ${activeLang === l ? "var(--gold)" : "rgba(201,168,76,.25)"}`,
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <button
          onClick={onOpenMap}
          className="flex items-center gap-1.5 px-4 py-1.5 border-none text-[.68rem] tracking-[.12em] cursor-pointer font-[family-name:var(--font-dm-sans)] whitespace-nowrap transition-colors duration-250 hover:bg-red"
          style={{ background: "var(--ink)", color: "var(--gold2)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--gold)", animation: "pulse-dot 1.6s ease-in-out infinite" }}
          />
          🗾 OPEN MAP
        </button>
      </div>
    </header>
  );
}
