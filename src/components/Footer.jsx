function Footer() {
  return (
    <footer
      className="text-center py-10 px-6"
      style={{
        borderTop: "1px solid rgba(249,168,201,0.08)",
        color: "rgba(240,216,232,0.5)",
      }}
    >
      <p
        style={{
          fontSize: "0.9rem",
          letterSpacing: "0.03em",
        }}
      >
        © 2026 Eda Grace Paragoso
      </p>

      <p
        style={{
          marginTop: "0.4rem",
          fontSize: "0.78rem",
          color: "rgba(240,216,232,0.35)",
        }}
      >
        Full-Stack Web Developer • UI/UX Designer
      </p>
    </footer>
  )
}

export default Footer