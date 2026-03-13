"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      background: "var(--cream)",
    }}>
      <h1 style={{ fontFamily: "var(--font-sj)", fontSize: "1.4rem", fontWeight: 300, marginBottom: "0.5rem" }}>
        エラーが発生しました
      </h1>
      <p style={{ fontFamily: "var(--font-cg)", fontSize: "0.85rem", color: "var(--stone)", fontStyle: "italic", letterSpacing: "0.1em", marginBottom: "2rem" }}>
        Something went wrong
      </p>
      <button
        onClick={reset}
        style={{
          padding: "0.75rem 2rem",
          border: "1px solid var(--gold)",
          background: "none",
          color: "var(--gold)",
          fontFamily: "var(--font-cg)",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          cursor: "pointer",
        }}
      >
        TRY AGAIN
      </button>
    </div>
  );
}
