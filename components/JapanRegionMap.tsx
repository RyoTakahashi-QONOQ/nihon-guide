import { JAPAN_REGION_PATHS } from "@/data/japan-map-paths";

const REGION_IDS = ["hokkaido", "tohoku", "kanto", "chubu", "kansai", "chugoku", "shikoku", "kyushu", "okinawa"] as const;

interface JapanRegionMapProps {
  activeRegion: string;
  size?: "sm" | "md";
  className?: string;
}

export default function JapanRegionMap({ activeRegion, size = "md", className }: JapanRegionMapProps) {
  return (
    <div className={`jrm jrm-${size}${className ? ` ${className}` : ""}`}>
      <svg viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
        {REGION_IDS.map((id) => (
          <path
            key={id}
            className={id === activeRegion ? "jrm-active" : "jrm-region"}
            d={JAPAN_REGION_PATHS[id]}
          />
        ))}
      </svg>
    </div>
  );
}
