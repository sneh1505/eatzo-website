import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.main}>
      {/* HEADER */}
      <header style={styles.header}>
        <a href="/" style={styles.logoWrapper}>
          <Image
            src="/logo1.png"
            alt="Eatzo Logo"
            width={120}
            height={32}
            priority
            style={{ objectFit: "contain" }}
          />
        </a>

        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>
            Home
          </a>

          <a href="/restaurants" style={styles.navLink}>
            Restaurants
          </a>

          <a
            href="https://instagram.com/eatzoofficial"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.headerBtn}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>A smarter way to eat.</h1>
        <p style={styles.subtitle}>
          Order ahead. Skip the wait. Pick up fresh.
        </p>

        <div style={styles.buttons}>
          <a
            href="https://instagram.com/eatzoofficial"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryBtn}
          >
            Message us on Instagram
          </a>

          <span style={styles.secondaryText}>Launching Soon</span>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Eatzo?</h2>
        <div style={styles.features}>
          <div style={styles.card}>Pre-order before you arrive</div>
          <div style={styles.card}>Zero waiting time</div>
          <div style={styles.card}>Trusted restaurant partners</div>
          <div style={styles.card}>Built for speed & simplicity</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Eatzo</p>
      </footer>
    </main>
  );
}

/* ===================== STYLES ===================== */

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    backgroundColor: "#0b0b0b",
    color: "#ffffff",
    minHeight: "100vh",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },

  /* HEADER */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    borderBottom: "1px solid #1f1f1f",
  },
  logoWrapper: {
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#ffffff",
    opacity: 0.7,
    fontSize: "0.95rem",
  },
  headerBtn: {
    border: "1px solid #ffffff",
    padding: "8px 18px",
    borderRadius: "999px",
    fontSize: "0.9rem",
    textDecoration: "none",
    fontWeight: 500,
  },

  /* HERO */
  hero: {
    padding: "140px 20px 120px",
    textAlign: "center",
  },
  title: {
    fontSize: "3.6rem",
    fontWeight: 800,
    letterSpacing: "-1px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.25rem",
    opacity: 0.75,
    marginBottom: "48px",
    maxWidth: "620px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "14px 28px",
    borderRadius: "999px",
    fontWeight: 600,
    textDecoration: "none",
  },
  secondaryText: {
    opacity: 0.7,
    fontSize: "0.95rem",
  },

  /* FEATURES */
  section: {
    padding: "80px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "40px",
    fontWeight: 700,
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#161616",
    padding: "28px",
    borderRadius: "14px",
    fontSize: "1rem",
  },

  /* FOOTER */
  footer: {
    padding: "32px",
    textAlign: "center",
    opacity: 0.6,
    fontSize: "0.9rem",
  },
};
