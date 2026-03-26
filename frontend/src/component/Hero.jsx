export default function Hero() {
  return (
    <section style={styles.hero}>
      
      <h1 style={styles.title}>
        I build full-stack web apps that solve real problems.
      </h1>

      <p style={styles.subtitle}>
        React • Node.js • MongoDB • Real-world Projects
      </p>

      <div style={styles.buttons}>
        <button style={styles.primary}>View Projects</button>
        <button style={styles.secondary}>Contact Me</button>
      </div>

    </section>
  );
}

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px"
  },
  title: {
    fontSize: "40px",
    maxWidth: "800px",
    lineHeight: "1.3"
  },
  subtitle: {
    marginTop: "20px",
    color: "#aaa",
    fontSize: "18px"
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "20px"
  },
  primary: {
    padding: "12px 25px",
    background: "#6366f1",
    border: "none",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer"
  },
  secondary: {
    padding: "12px 25px",
    background: "transparent",
    border: "1px solid #555",
    color: "#da1313",
    borderRadius: "8px",
    cursor: "pointer"
  }
};