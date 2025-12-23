import Image from "next/image";

export default function RestaurantsPage() {
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
          />
        </a>

        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/restaurants" style={styles.navLinkActive}>Restaurants</a>
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
        <h1 style={styles.title}>Eatzo for Restaurants</h1>
        <p style={styles.subtitle}>
          More orders. Less waiting. A smoother pickup experience for your customers.
        </p>

        <a
          href="https://instagram.com/eatzoofficial"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.primaryBtn}
        >
          Partner with Eatzo
        </a>
      </section>

      {/* PROBLEM */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>The problem restaurants face</h2>
        <div style={styles.grid}>
          <div style={styles.card}>Crowded counters during peak hours</div>
          <div style={styles.card}>Customers waiting & getting frustrated</div>
          <div style={styles.card}>Order mix-ups & communication issues</div>
          <div style={styles.card}>Inefficient pickup flow</div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>How Eatzo helps</h2>
        <div style={styles.grid}>
          <div style={styles.cardAlt}>Pre-orders before customers arrive</div>
          <div style={styles.cardAlt}>Structured pickup system</div>
          <div style={styles.cardAlt}>Reduced chaos & waiting</div>
          <div style={styles.cardAlt}>Better customer experience</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why partner with Eatzo</h2>
        <div style={styles.grid}>
          <div style={styles.card}>Faster order turnover</div>
          <div style={styles.card}>More repeat customers</div>
          <div style={styles.card}>Transparent pricing</div>
          <div style={styles.card}>No delivery headaches</div>
        </div>
      </section>

      {/* PRICING */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>Simple & transparent pricing</h2>

        <div style={styles.pricingGrid}>
          <div style={styles.pricingCard}>
            <h3>Starter</h3>
            <p style={styles.price}>₹1,499 / month</p>
            <ul style={styles.list}>
              <li>Pickup-only orders</li>
              <li>Basic restaurant profile</li>
              <li>Order management</li>
            </ul>
          </div>

          <div style={styles.pricingHighlight}>
            <h3>Growth</h3>
            <p style={styles.price}>₹1,999 / month</p>
            <ul style={styles.list}>
              <li>Everything in Starter</li>
              <li>Higher order volume</li>
              <li>Priority onboarding</li>
            </ul>
          </div>

          <div style={styles.pricingCard}>
            <h3>Pro</h3>
            <p style={styles.price}>₹2,499 / month</p>
            <ul style={styles.list}>
              <li>Multiple branches</li>
              <li>Advanced insights</li>
              <li>Early access to features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Frequently asked questions</h2>
        <div style={styles.faq}>
          <div>
            <strong>Is Eatzo a delivery platform?</strong>
            <p>No. Eatzo focuses on pickup-first to reduce waiting time.</p>
          </div>

          <div>
            <strong>Do I need extra hardware?</strong>
            <p>No additional hardware or POS changes required.</p>
          </div>

          <div>
            <strong>How are payouts handled?</strong>
            <p>Regular, transparent settlements with full visibility.</p>
          </div>

          <div>
            <strong>Can I manage multiple branches?</strong>
            <p>Yes, multi-branch support is available in higher plans.</p>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>How onboarding works</h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <p>Connect with Eatzo</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <p>Restaurant verification</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <p>Menu & setup</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepNumber}>4</span>
            <p>Go live on Eatzo</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to grow with Eatzo?</h2>
        <p>Restaurant onboarding opening soon.</p>

        <a
          href="https://instagram.com/eatzoofficial"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.primaryBtn}
        >
          Contact us on Instagram
        </a>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Eatzo
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
    fontFamily: "system-ui, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    borderBottom: "1px solid #1f1f1f",
  },
  logoWrapper: { textDecoration: "none" },
  nav: { display: "flex", gap: "20px", alignItems: "center" },
  navLink: { textDecoration: "none", color: "#fff", opacity: 0.7 },
  navLinkActive: { textDecoration: "none", color: "#fff", fontWeight: 600 },
  headerBtn: {
    border: "1px solid #fff",
    padding: "8px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "0.9rem",
  },

  hero: {
    padding: "120px 20px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.2rem, 6vw, 3rem)",
    fontWeight: 800,
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
    opacity: 0.75,
    marginBottom: "40px",
  },
  primaryBtn: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "14px 28px",
    borderRadius: "999px",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
  },

  section: {
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionAlt: {
    padding: "80px 20px",
    backgroundColor: "#111111",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "40px",
    fontWeight: 700,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#161616",
    padding: "28px",
    borderRadius: "14px",
  },
  cardAlt: {
    backgroundColor: "#0b0b0b",
    padding: "28px",
    borderRadius: "14px",
  },

  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  pricingCard: {
    backgroundColor: "#161616",
    padding: "32px",
    borderRadius: "16px",
  },
  pricingHighlight: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "32px",
    borderRadius: "16px",
  },
  price: {
    fontSize: "1.6rem",
    fontWeight: 700,
    margin: "16px 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.9",
  },

  faq: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "grid",
    gap: "24px",
    textAlign: "left",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "30px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  step: {
    backgroundColor: "#0b0b0b",
    padding: "30px",
    borderRadius: "16px",
  },
  stepNumber: {
    fontSize: "1.8rem",
    fontWeight: 800,
    display: "block",
    marginBottom: "10px",
  },

  cta: {
    padding: "100px 20px",
    textAlign: "center",
  },

  footer: {
    padding: "32px",
    textAlign: "center",
    opacity: 0.6,
    fontSize: "0.9rem",
  },
};
