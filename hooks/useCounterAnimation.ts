"use client";
import { useEffect, useRef, useState } from "react";

export function useCounterAnimation(target: number, threshold = 0.3) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const inc = target / 55;
          let c = 0;
          const ti = setInterval(() => {
            c = Math.min(c + inc, target);
            setCount(Math.floor(c));
            if (c >= target) clearInterval(ti);
          }, 22);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, threshold]);

  return { count, ref };
}
