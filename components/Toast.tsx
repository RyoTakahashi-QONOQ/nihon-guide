"use client";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  onDone: () => void;
}

export default function Toast({ message, onDone }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [message, onDone]);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[9000] font-[family-name:var(--font-dm-sans)] text-[.7rem] tracking-[.1em] px-5 py-2.5 border-l-2 border-gold transition-all duration-300 pointer-events-none ${
        message
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-1.5"
      }`}
      style={{ background: "var(--ink2)", color: "var(--gold2)" }}
    >
      {message}
    </div>
  );
}
