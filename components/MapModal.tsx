"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MAP_PINS } from "@/data/map-pins";
import { JAPAN_REGION_PATHS } from "@/data/japan-map-paths";

interface MapModalProps {
  open: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

const REGION_IDS = ["hokkaido", "tohoku", "kanto", "chubu", "kansai", "chugoku", "shikoku", "kyushu", "okinawa"] as const;

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
              {REGION_IDS.map((id) => (
                <path key={id} className={regClass(id)} d={JAPAN_REGION_PATHS[id]}
                  onClick={() => { setSelReg(id); onToast(`Region: ${id.charAt(0).toUpperCase() + id.slice(1)}`); }} />
              ))}
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
