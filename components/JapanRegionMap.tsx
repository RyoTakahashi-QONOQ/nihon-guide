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

interface JapanRegionMapProps {
  activeRegion: string;
  size?: "sm" | "md";
  className?: string;
}

export default function JapanRegionMap({ activeRegion, size = "md", className }: JapanRegionMapProps) {
  return (
    <div className={`jrm jrm-${size}${className ? ` ${className}` : ""}`}>
      <svg viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
        {REGION_PATHS.map((reg) => (
          <path
            key={reg.id}
            className={reg.id === activeRegion ? "jrm-active" : "jrm-region"}
            d={reg.d}
          />
        ))}
        <ellipse
          className={activeRegion === "okinawa" ? "jrm-active" : "jrm-region"}
          cx={80} cy={640} rx={28} ry={16}
        />
        <line
          x1="80" y1="624" x2="105" y2="548"
          stroke="var(--stone2)" strokeWidth="1" strokeDasharray="4,4" opacity="0.3"
        />
      </svg>
    </div>
  );
}
