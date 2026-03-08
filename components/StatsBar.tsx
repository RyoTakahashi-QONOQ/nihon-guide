"use client";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

function StatItem({ target, suffix, unit, label }: { target: number; suffix?: string; unit: string; label: string }) {
  const { count, ref } = useCounterAnimation(target);
  return (
    <div ref={ref} className="stat">
      <div className="stn">{count}{suffix}</div>
      <div className="stu">{unit}</div>
      <div className="stl">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="stats">
      <StatItem target={47} unit="都道府県 / Prefectures" label="Complete coverage" />
      <StatItem target={10} suffix="K+" unit="Destinations" label="Curated spots" />
      <StatItem target={25} unit="UNESCO Sites" label="World heritage" />
      <StatItem target={3} suffix=" Cities" unit="Michelin Guide" label="World's top dining" />
    </div>
  );
}
