"use client"

export default function ResumePage() {
  return (
    <>
      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--accent-retro)" }}>Amr.DEV</div>
          <nav className="nav-links" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <a href="/#home">HOME</a>
            <a href="/#about">ABOUT</a>
            <a href="/#experience">EXPERIENCE</a>
            <a href="/#education">EDUCATION</a>
            <a href="/#skills">SKILLS</a>
            <a href="/#work">PROJECTS</a>
            <a href="/#contact">CONTACT</a>
            <a 
              href="/resume"
              style={{
                color: "var(--text-primary)",
                fontWeight: "700",
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              RESUME
            </a>
          </nav>
        </div>
      </header>

      <div className="container" style={{ marginTop: "80px", marginBottom: "80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 className="hero-title" style={{ fontSize: "3.5rem", color: "var(--accent-retro)", marginBottom: "20px", textAlign: "center" }}>
            RESUME
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textAlign: "center", marginBottom: "60px" }}>
            Choose an option to view or download my resume
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <a
              href="https://drive.google.com/file/d/1kLa70itYGUDGpLynCetU67-cpQa38VJd/view"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--accent-retro)",
                color: "var(--bg-color)",
                padding: "30px",
                textDecoration: "none",
                fontWeight: "700",
                border: "2px solid var(--text-primary)",
                display: "block",
                transition: "all 0.2s",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
              className="contact-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(2px, 2px)"
                e.currentTarget.style.boxShadow = "2px 2px 0px var(--text-primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)"
                e.currentTarget.style.boxShadow = "4px 4px 0px var(--text-primary)"
              }}
            >
              VIEW CV
            </a>

            <a
              href="https://drive.google.com/file/d/1kLa70itYGUDGpLynCetU67-cpQa38VJd/view"
              download
              style={{
                background: "var(--accent-retro)",
                color: "var(--bg-color)",
                padding: "30px",
                textDecoration: "none",
                fontWeight: "700",
                border: "2px solid var(--text-primary)",
                display: "block",
                transition: "all 0.2s",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
              className="contact-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(2px, 2px)"
                e.currentTarget.style.boxShadow = "2px 2px 0px var(--text-primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)"
                e.currentTarget.style.boxShadow = "4px 4px 0px var(--text-primary)"
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          <div style={{ marginTop: "60px", textAlign: "center" }}>
            <a 
              href="/"
              style={{
                color: "var(--accent-retro)",
                fontWeight: "700",
                fontSize: "0.95rem",
                textDecoration: "none",
                borderBottom: "2px solid var(--accent-retro)",
                paddingBottom: "5px",
              }}
            >
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
