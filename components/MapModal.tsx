"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MAP_PINS } from "@/data/map-pins";

interface MapModalProps {
  open: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

const REGION_PATHS = [
  { id: "hokkaido", d: "M310 30 L370 25 L420 45 L440 80 L420 110 L390 125 L360 130 L330 120 L310 100 L295 75 Z" },
  { id: "tohoku", d: "M300 160 L330 150 L350 170 L345 200 L335 230 L320 255 L305 265 L290 260 L280 240 L285 210 L290 185 Z" },
  { id: "kanto", d: "M275 275 L310 265 L330 280 L335 310 L320 330 L300 340 L275 340 L260 325 L258 300 Z" },
  { id: "chubu", d: "M230 305 L260 295 L275 310 L280 340 L265 370 L245 385 L220 385 L200 370 L195 345 L205 320 Z" },
  { id: "kansai", d: "M185 375 L215 365 L240 380 L245 410 L230 435 L205 445 L180 440 L165 420 L165 400 Z" },
  { id: "chugoku", d: "M140 415 L175 400 L195 415 L195 445 L175 460 L150 465 L125 460 L115 445 L120 425 Z" },
  { id: "shikoku", d: "M175 470 L205 462 L225 475 L225 500 L205 510 L180 510 L162 498 L162 480 Z" },
  { id: "kyushu", d: "M100 455 L130 445 L145 460 L145 500 L128 525 L105 535 L82 530 L68 510 L70 485 L82 465 Z" },
];

const PIN_COORDS = [
  { id: "sapporo", cx: 370, cy: 72, r: 3.5, label: "札幌", sublabel: "Sapporo" },
  { id: "sendai", cx: 322, cy: 208, r: 3.5, label: "仙台" },
  { id: "tokyo", cx: 305, cy: 305, r: 4, label: "東京", sublabel: "Tokyo" },
  { id: "fuji", cx: 267, cy: 340, r: 3.5, label: "富士山" },
  { id: "kyoto", cx: 207, cy: 406, r: 3.5, label: "京都", sublabel: "Kyoto" },
  { id: "osaka", cx: 192, cy: 428, r: 3.5, label: "大阪" },
  { id: "hiroshima", cx: 152, cy: 438, r: 3.5, label: "広島" },
  { id: "fukuoka", cx: 100, cy: 486, r: 3.5, label: "福岡" },
  { id: "naha", cx: 80, cy: 638, r: 3.5, label: "那覇" },
];

export default function MapModal({ open, onClose, onToast }: MapModalProps) {
  const router = useRouter();
  const [selReg, setSelReg] = useState<string | null>(null);
  const [selPin, setSelPin] = useState<string | null>(null);

  const handleClose = useCallback(() => {
    setSelReg(null);
    setSelPin(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [open, handleClose]);

  const pinData = selPin ? MAP_PINS[selPin] : null;

  const regClass = (id: string) => {
    if (selReg === id) return "mreg sel";
    if (selReg && selReg !== id) return "mreg dim";
    return "mreg";
  };

  return (
    <div className={`mmodal${open ? " open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="mbox">
        <div className="mhead">
          <span className="mhtitle">🗾 JAPAN — Interactive Map · インタラクティブ地図</span>
          <button className="mhclose" onClick={handleClose}>✕ CLOSE</button>
        </div>
        <div className="mbody">
          <div className="msvgw">
            <svg id="jsvg" viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
              {REGION_PATHS.map((reg) => (
                <path key={reg.id} className={regClass(reg.id)} d={reg.d}
                  onClick={() => { setSelReg(reg.id); onToast(`Region: ${reg.id.charAt(0).toUpperCase() + reg.id.slice(1)}`); }} />
              ))}
              <ellipse className={regClass("okinawa")} cx={80} cy={640} rx={28} ry={16}
                onClick={() => { setSelReg("okinawa"); onToast("Region: Okinawa"); }} />
              <line x1="80" y1="624" x2="105" y2="548" stroke="rgba(201,168,76,.1)" strokeWidth="1" strokeDasharray="4,4" />
              {PIN_COORDS.map((pin) => (
                <g key={pin.id} className={`mpin${selPin === pin.id ? " sel" : ""}`} onClick={() => setSelPin(pin.id)}>
                  <circle className="mpring" cx={pin.cx} cy={pin.cy} r="10" />
                  <circle className="mpdot" cx={pin.cx} cy={pin.cy} r={pin.r} />
                  <text className="mplbl" x={pin.cx} y={pin.cy - 12}>{pin.label}</text>
                  {pin.sublabel && <text className="mpsubl" x={pin.cx} y={pin.cy - 21}>{pin.sublabel}</text>}
                </g>
              ))}
            </svg>
          </div>
          <div className={`mdet${pinData ? " vis" : ""}`}>
            {pinData && (
              <>
                <button className="mdclose" onClick={() => setSelPin(null)}>✕</button>
                <div className="mdthumb">
                  <Image src={pinData.img} alt={pinData.en} fill style={{ objectFit: "cover" }} sizes="225px" />
                </div>
                <div className="mdbody">
                  <div className="mdreg">{pinData.r}</div>
                  <div className="mdname">{pinData.n}</div>
                  <div className="mden">{pinData.en}</div>
                  <p className="mddesc">{pinData.d}</p>
                  <button className="mdbtn" onClick={() => { handleClose(); router.push(`/spots/${selPin}`); }}>
                    View full guide →
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="mleg">
            <div className="mlegtitle">LEGEND</div>
            <div className="mlegrow"><div className="mlegdot" style={{ background: "var(--gold2)" }} />Featured city</div>
            <div className="mlegrow"><div className="mlegdot" style={{ background: "var(--red)" }} />Selected</div>
            <div className="mlegrow"><div className="mlegdot" style={{ background: "rgba(201,168,76,.14)", border: "1px solid rgba(201,168,76,.32)" }} />Region</div>
          </div>
        </div>
      </div>
    </div>
  );
}
