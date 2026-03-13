import Link from "next/link";

export default function NotFound() {
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
      <span style={{ fontFamily: "var(--font-sj)", fontSize: "6rem", fontWeight: 200, color: "var(--pale)", lineHeight: 1 }}>404</span>
      <h1 style={{ fontFamily: "var(--font-sj)", fontSize: "1.4rem", fontWeight: 300, margin: "1rem 0 0.5rem" }}>
        ページが見つかりません
      </h1>
      <p style={{ fontFamily: "var(--font-cg)", fontSize: "0.85rem", color: "var(--stone)", fontStyle: "italic", letterSpacing: "0.1em", marginBottom: "2rem" }}>
        Page not found
      </p>
      <Link href="/" style={{
        padding: "0.75rem 2rem",
        border: "1px solid var(--gold)",
        color: "var(--gold)",
        fontFamily: "var(--font-cg)",
        fontSize: "0.8rem",
        letterSpacing: "0.2em",
        textDecoration: "none",
      }}>
        BACK TO NIHON
      </Link>
    </div>
  );
}
