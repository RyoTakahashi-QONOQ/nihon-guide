"use client";
import { useState } from "react";
import Link from "next/link";
import { useScrollHeader } from "@/hooks/useScrollHeader";

interface HeaderProps {
  onOpenMap: () => void;
  onToast: (msg: string) => void;
}

export default function Header({ onOpenMap, onToast }: HeaderProps) {
  const scrolled = useScrollHeader();
  const [activeLang, setActiveLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const langs = ["EN", "JA", "中", "한"] as const;
  const langNames: Record<string, string> = { EN: "English", JA: "日本語", "中": "中文", "한": "한국어" };

  const navLinks = [
    { href: "/#regions", label: "REGIONS" },
    { href: "/#spots", label: "SPOTS" },
    { href: "/#gourmet", label: "GOURMET" },
    { href: "/#cats", label: "DISCOVER" },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          <span className="logo-m">NIHON</span>
          <span className="logo-j">日本観光ガイド</span>
        </Link>
        <nav className="site-nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
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
            🗾 MAP
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${menuOpen ? "open" : ""}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <nav className="mobile-menu-nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <button className="mapbtn" onClick={() => { setMenuOpen(false); onOpenMap(); }}>
            <span className="pulse" />
            🗾 OPEN MAP
          </button>
        </div>
      </div>
    </>
  );
}
