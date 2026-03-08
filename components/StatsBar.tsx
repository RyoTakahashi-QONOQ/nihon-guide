"use client";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

function StatItem({
  target,
  suffix,
  unit,
  label,
}: {
  target: number;
  suffix?: string;
  unit: string;
  label: string;
}) {
  const { count, ref } = useCounterAnimation(target);
  return (
    <div
      ref={ref}
      className="text-center py-7 border-r last:border-r-0"
      style={{ borderColor: "rgba(138,130,117,.16)" }}
    >
      <div className="font-[family-name:var(--font-cormorant-garamond)] text-[2.7rem] font-light leading-none text-ink">
        {count}
        {suffix}
      </div>
      <div className="text-[.62rem] text-gold tracking-[.1em] font-[family-name:var(--font-cormorant-garamond)]">
        {unit}
      </div>
      <div className="text-[.62rem] text-stone mt-1 tracking-[.06em]">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" style={{ background: "var(--pale)" }}>
      <StatItem target={47} unit="都道府県 / Prefectures" label="Complete coverage" />
      <StatItem target={10} suffix="K+" unit="Destinations" label="Curated spots" />
      <StatItem target={25} unit="UNESCO Sites" label="World heritage" />
      <StatItem target={3} suffix=" Cities" unit="Michelin Guide" label="World's top dining" />
    </div>
  );
}
