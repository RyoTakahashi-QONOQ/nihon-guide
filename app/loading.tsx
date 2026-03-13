export default function Loading() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--cream)",
    }}>
      <div style={{
        fontFamily: "var(--font-cg)",
        fontSize: "0.9rem",
        letterSpacing: "0.3em",
        color: "var(--gold)",
        animation: "fi 0.9s ease both",
      }}>
        NIHON
      </div>
    </div>
  );
}
