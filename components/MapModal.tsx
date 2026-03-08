"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MAP_PINS } from "@/data/map-pins";

interface MapModalProps {
  open: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

const REGION_PATHS: { id: string; d: string; type: "path" | "ellipse"; cx?: number; cy?: number; rx?: number; ry?: number }[] = [
  { id: "hokkaido", type: "path", d: "M310 30 L370 25 L420 45 L440 80 L420 110 L390 125 L360 130 L330 120 L310 100 L295 75 Z" },
  { id: "tohoku", type: "path", d: "M300 160 L330 150 L350 170 L345 200 L335 230 L320 255 L305 265 L290 260 L280 240 L285 210 L290 185 Z" },
  { id: "kanto", type: "path", d: "M275 275 L310 265 L330 280 L335 310 L320 330 L300 340 L275 340 L260 325 L258 300 Z" },
  { id: "chubu", type: "path", d: "M230 305 L260 295 L275 310 L280 340 L265 370 L245 385 L220 385 L200 370 L195 345 L205 320 Z" },
  { id: "kansai", type: "path", d: "M185 375 L215 365 L240 380 L245 410 L230 435 L205 445 L180 440 L165 420 L165 400 Z" },
  { id: "chugoku", type: "path", d: "M140 415 L175 400 L195 415 L195 445 L175 460 L150 465 L125 460 L115 445 L120 425 Z" },
  { id: "shikoku", type: "path", d: "M175 470 L205 462 L225 475 L225 500 L205 510 L180 510 L162 498 L162 480 Z" },
  { id: "kyushu", type: "path", d: "M100 455 L130 445 L145 460 L145 500 L128 525 L105 535 L82 530 L68 510 L70 485 L82 465 Z" },
  { id: "okinawa", type: "ellipse", d: "", cx: 80, cy: 640, rx: 28, ry: 16 },
];

const PIN_COORDS: { id: string; cx: number; cy: number; r: number; ringR: number; label: string; sublabel?: string }[] = [
  { id: "sapporo", cx: 370, cy: 72, r: 3.5, ringR: 10, label: "札幌", sublabel: "Sapporo" },
  { id: "sendai", cx: 322, cy: 208, r: 3.5, ringR: 10, label: "仙台" },
  { id: "tokyo", cx: 305, cy: 305, r: 4, ringR: 11, label: "東京", sublabel: "Tokyo" },
  { id: "fuji", cx: 267, cy: 340, r: 3.5, ringR: 9, label: "富士山" },
  { id: "kyoto", cx: 207, cy: 406, r: 3.5, ringR: 10, label: "京都", sublabel: "Kyoto" },
  { id: "osaka", cx: 192, cy: 428, r: 3.5, ringR: 9, label: "大阪" },
  { id: "hiroshima", cx: 152, cy: 438, r: 3.5, ringR: 9, label: "広島" },
  { id: "fukuoka", cx: 100, cy: 486, r: 3.5, ringR: 9, label: "福岡" },
  { id: "naha", cx: 80, cy: 638, r: 3.5, ringR: 9, label: "那覇" },
];

export default function MapModal({ open, onClose, onToast }: MapModalProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedPin, setSelectedPin] = useState<string | null>(null);

  const handleClose = useCallback(() => {
    setSelectedRegion(null);
    setSelectedPin(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, handleClose]);

  const pinData = selectedPin ? MAP_PINS[selectedPin] : null;

  const regionFill = (id: string) => {
    if (selectedRegion === id) return "rgba(155,35,53,.22)";
    if (selectedRegion && selectedRegion !== id) return "rgba(201,168,76,.02)";
    return "rgba(201,168,76,.07)";
  };

  const regionStroke = (id: string) => {
    if (selectedRegion === id) return "var(--red)";
    if (selectedRegion && selectedRegion !== id) return "rgba(201,168,76,.09)";
    return "rgba(201,168,76,.28)";
  };

  return (
    <div
      className={`fixed inset-0 z-[800] flex items-center justify-center transition-opacity duration-350 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "rgba(14,11,6,.88)", backdropFilter: "blur(8px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`w-[min(860px,92vw)] h-[min(620px,88vh)] relative flex flex-col transition-transform duration-350 ${
          open ? "scale-100" : "scale-95"
        }`}
        style={{
          background: "var(--indigo)",
          border: "1px solid rgba(201,168,76,.18)",
        }}
      >
        {/* Header */}
        <div
          className="py-3.5 px-5 flex items-center justify-between"
          style={{
            borderBottom: "1px solid rgba(201,168,76,.13)",
            background: "rgba(13,10,5,.55)",
          }}
        >
          <span className="font-[family-name:var(--font-cormorant-garamond)] text-[.95rem] tracking-[.2em]" style={{ color: "var(--gold2)" }}>
            🗾 JAPAN — Interactive Map · インタラクティブ地図
          </span>
          <button
            onClick={handleClose}
            className="bg-transparent border-none cursor-pointer text-base py-1 px-2.5 transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(255,255,255,.35)" }}
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 relative overflow-hidden">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(201,168,76,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.03) 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* SVG Map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 500 700"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[44%] max-w-[310px]"
              style={{ filter: "drop-shadow(0 0 28px rgba(201,168,76,.1))" }}
            >
              {REGION_PATHS.map((reg) =>
                reg.type === "ellipse" ? (
                  <ellipse
                    key={reg.id}
                    cx={reg.cx}
                    cy={reg.cy}
                    rx={reg.rx}
                    ry={reg.ry}
                    fill={regionFill(reg.id)}
                    stroke={regionStroke(reg.id)}
                    strokeWidth={selectedRegion === reg.id ? 1.2 : 0.8}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => {
                      setSelectedRegion(reg.id);
                      onToast(`Region: ${reg.id.charAt(0).toUpperCase() + reg.id.slice(1)}`);
                    }}
                  />
                ) : (
                  <path
                    key={reg.id}
                    d={reg.d}
                    fill={regionFill(reg.id)}
                    stroke={regionStroke(reg.id)}
                    strokeWidth={selectedRegion === reg.id ? 1.2 : 0.8}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => {
                      setSelectedRegion(reg.id);
                      onToast(`Region: ${reg.id.charAt(0).toUpperCase() + reg.id.slice(1)}`);
                    }}
                  />
                )
              )}

              {/* Dashed line to Okinawa */}
              <line x1="80" y1="624" x2="105" y2="548" stroke="rgba(201,168,76,.1)" strokeWidth="1" strokeDasharray="4,4" />

              {/* Pins */}
              {PIN_COORDS.map((pin) => (
                <g
                  key={pin.id}
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedPin(pin.id);
                  }}
                >
                  <circle
                    cx={pin.cx}
                    cy={pin.cy}
                    r={pin.ringR}
                    fill="none"
                    stroke={selectedPin === pin.id ? "var(--red)" : "var(--gold2)"}
                    strokeWidth="0.8"
                    opacity="0.4"
                    style={{ animation: "map-pin-ring 2.5s ease-in-out infinite" }}
                  />
                  <circle
                    cx={pin.cx}
                    cy={pin.cy}
                    r={pin.r}
                    fill={selectedPin === pin.id ? "var(--red)" : "var(--gold2)"}
                    className="transition-all duration-200"
                  />
                  <text
                    x={pin.cx}
                    y={pin.cy - 12}
                    textAnchor="middle"
                    className="font-[family-name:var(--font-noto-serif-jp)] pointer-events-none"
                    style={{ fontSize: "7px", fill: "rgba(255,255,255,.75)" }}
                  >
                    {pin.label}
                  </text>
                  {pin.sublabel && (
                    <text
                      x={pin.cx}
                      y={pin.cy - 21}
                      textAnchor="middle"
                      className="font-[family-name:var(--font-dm-sans)] pointer-events-none"
                      style={{ fontSize: "5.5px", fill: "rgba(255,255,255,.32)" }}
                    >
                      {pin.sublabel}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Detail panel */}
          <div
            className={`absolute right-4 md:right-5 top-1/2 w-[195px] md:w-[225px] transition-all duration-300 ${
              pinData ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-3.5"
            }`}
            style={{
              transform: `translateY(-50%) translateX(${pinData ? "0" : "14px"})`,
              background: "rgba(10,8,4,.88)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(201,168,76,.18)",
            }}
          >
            {pinData && (
              <>
                <button
                  onClick={() => setSelectedPin(null)}
                  className="absolute top-1.5 right-1.5 border-none cursor-pointer text-[.66rem] py-0.5 px-1.5 transition-colors duration-200 hover:text-white z-10"
                  style={{ background: "rgba(0,0,0,.38)", color: "rgba(255,255,255,.38)" }}
                >
                  ✕
                </button>
                <div className="h-[108px] relative">
                  <Image src={pinData.img} alt={pinData.en} fill className="object-cover" sizes="225px" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(10,8,4,.78) 0%,transparent 55%)" }}
                  />
                </div>
                <div className="p-3.5">
                  <div className="text-[.54rem] tracking-[.18em] mb-1 font-[family-name:var(--font-dm-sans)]" style={{ color: "var(--gold2)" }}>
                    {pinData.r}
                  </div>
                  <div className="font-[family-name:var(--font-noto-serif-jp)] text-[1.15rem] text-white font-extralight mb-0.5">
                    {pinData.n}
                  </div>
                  <div className="font-[family-name:var(--font-cormorant-garamond)] text-[.68rem] italic mb-2.5" style={{ color: "rgba(255,255,255,.32)" }}>
                    {pinData.en}
                  </div>
                  <p className="text-[.63rem] leading-[1.75] mb-3.5" style={{ color: "rgba(255,255,255,.48)" }}>
                    {pinData.d}
                  </p>
                  <button
                    onClick={() => {
                      handleClose();
                      document.getElementById("spots")?.scrollIntoView({ behavior: "smooth" });
                      onToast("Showing spots...");
                    }}
                    className="w-full py-2 border-none text-[.6rem] tracking-[.12em] cursor-pointer font-[family-name:var(--font-dm-sans)] font-medium transition-colors duration-250 hover:bg-gold2"
                    style={{ background: "var(--gold)", color: "var(--ink)" }}
                  >
                    View full guide →
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Legend */}
          <div
            className="absolute bottom-4.5 left-4.5 py-3 px-4"
            style={{
              background: "rgba(10,8,4,.68)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(201,168,76,.1)",
            }}
          >
            <div className="text-[.52rem] tracking-[.2em] text-gold mb-1.5 font-[family-name:var(--font-dm-sans)]">
              LEGEND
            </div>
            <div className="flex items-center gap-1.5 text-[.55rem] mb-0.5" style={{ color: "rgba(255,255,255,.32)" }}>
              <div className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: "var(--gold2)" }} />
              Featured city
            </div>
            <div className="flex items-center gap-1.5 text-[.55rem] mb-0.5" style={{ color: "rgba(255,255,255,.32)" }}>
              <div className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: "var(--red)" }} />
              Selected
            </div>
            <div className="flex items-center gap-1.5 text-[.55rem]" style={{ color: "rgba(255,255,255,.32)" }}>
              <div
                className="w-[7px] h-[7px] rounded-full shrink-0"
                style={{ background: "rgba(201,168,76,.14)", border: "1px solid rgba(201,168,76,.32)" }}
              />
              Region
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
