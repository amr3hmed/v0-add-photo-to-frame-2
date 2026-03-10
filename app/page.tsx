"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add scroll animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-section")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all fade-in sections and experience cards
    const fadeInSections = document.querySelectorAll(".fade-in-section")
    const experienceCards = document.querySelectorAll(".experience-card")

    fadeInSections.forEach((section) => {
      observer.observe(section)
    })

    experienceCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => {
      fadeInSections.forEach((section) => observer.unobserve(section))
      experienceCards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--accent-retro)" }}>Amr.DEV</div>
          <nav className="nav-links" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#education">EDUCATION</a>
            <a href="#skills">SKILLS</a>
            <a href="#work">PROJECTS</a>
            <a href="#contact">CONTACT</a>
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

      <div className="container">
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent-retro)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "10px" }}>
              [ JUNIOR BACKEND DEVELOPER ]
            </p>
            <h1>BUILDING <span>APIS &</span> SYSTEMS</h1>
            <p>
              Backend Developer specialized in backend development, database architecture, and system design. Experienced in building scalable and maintainable backend systems using .NET, Node.js, and SQL Server. Skilled in developing RESTful APIs, optimizing performance, and applying clean architecture principles to deliver reliable and efficient cloud-ready applications.
            </p>
            <a href="#contact" className="btn-retro">
              GET IN TOUCH
            </a>
          </div>
          <div className="window-frame">
            <div className="window-header">
              <span>PROFILE.JPG</span>
              <div className="window-controls">
                <button aria-label="Minimize window" className="window-btn">
                  <span className="minimize-icon"></span>
                </button>
                <button aria-label="Maximize window" className="window-btn">
                  <span className="maximize-icon"></span>
                </button>
                <button aria-label="Close window" className="window-btn window-close">
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>
            <img
              src="/profile.jpg"
              alt="Professional Portrait of Amr Ahmed Ismail"
              className="hero-image"
              style={{
                aspectRatio: "16/10",
                height: "auto"
              }}
            />
          </div>
        </section>

        {/* About / Professional Summary Section */}
        <section id="about" className="fade-in-section">
          <h2 className="section-title">Professional Summary</h2>
          <div
            style={{
              border: "2px solid var(--border-color)",
              background: "var(--surface)",
              padding: "40px",
              marginBottom: "40px",
            }}
          >
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "30px" }}>
              Results-driven Backend Developer with 1 year of experience, specialized in Node.js and .NET, adept at architecting scalable, high-performance systems. I champion clean architecture and efficiency, leveraging AI as a strategic productivity accelerator to optimize development workflows and enhance delivery speed. My commitment lies in consistently delivering robust, maintainable solutions and driving continuous improvements in system performance and scalability.
            </p>

          </div>
        </section>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">1+</div>
            <div className="stat-label">YEARS XP</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">10+</div>
            <div className="stat-label">PROJECTS BUILT</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">10+</div>
            <div className="stat-label">TECH STACK</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">6</div>
            <div className="stat-label">CERTIFICATIONS</div>
          </div>
        </div>

        {/* Experience Section */}
        <section id="experience" className="fade-in-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            <div className="experience-card slide-in">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                <h3 style={{ margin: "0", color: "var(--text-primary)", fontWeight: "700" }}>Leader & Coach</h3>
                <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "700" }}>Part-time</span>
              </div>
              <p style={{ margin: "0 0 10px 0", color: "var(--accent-retro)", fontSize: "0.95rem", fontWeight: "700" }}>
                ICPC Club HIMIT - KFS, Egypt
              </p>
              <p style={{ margin: "0", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Led competitive programming training sessions and problem-solving workshops. Mentored participants in algorithms, data structures, and ICPC-style competitions.
              </p>
            </div>

            <div className="experience-card slide-in">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                <h3 style={{ margin: "0", color: "var(--text-primary)", fontWeight: "700" }}>Vice Head – Node.js Track</h3>
                <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "700" }}>Feb 2026 - Present</span>
              </div>
              <p style={{ margin: "0 0 10px 0", color: "var(--accent-retro)", fontSize: "0.95rem", fontWeight: "700" }}>
                IEEE - KFS
              </p>
              <p style={{ margin: "0", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Delivered backend sessions covering REST APIs, authentication, and database integration. Guided members in building real-world backend projects using Node.js.
              </p>
            </div>

            <div className="experience-card slide-in">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                <h3 style={{ margin: "0", color: "var(--text-primary)", fontWeight: "700" }}>Project Lead</h3>
                <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "700" }}>Feb 2026 - Present</span>
              </div>
              <p style={{ margin: "0 0 10px 0", color: "var(--accent-retro)", fontSize: "0.95rem", fontWeight: "700" }}>
                GDG Delta Hackathon - Egypt
              </p>
              <p style={{ margin: "0", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Led full-stack project team in 3-day hackathon focused on educational solutions. Worked on backend development, API integration, and system scalability.
              </p>
            </div>

            <div className="experience-card slide-in">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                <h3 style={{ margin: "0", color: "var(--text-primary)", fontWeight: "700" }}>Intern - Node.js Backend Developer</h3>
                <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "700" }}>Sep 2025 - Nov 2025</span>
              </div>
              <p style={{ margin: "0 0 10px 0", color: "var(--accent-retro)", fontSize: "0.95rem", fontWeight: "700" }}>
                NTI - Egypt
              </p>
              <p style={{ margin: "0", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Completed intensive 2-month Node.js backend training. Built RESTful APIs, integrated databases, and gained hands-on experience in scalable backend systems.
              </p>
            </div>

            <div className="experience-card slide-in">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                <h3 style={{ margin: "0", color: "var(--text-primary)", fontWeight: "700" }}>Freelance WordPress Developer</h3>
                <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "700" }}>Jan 2025 - Present</span>
              </div>
              <p style={{ margin: "0 0 10px 0", color: "var(--accent-retro)", fontSize: "0.95rem", fontWeight: "700" }}>
                Self-Employed
              </p>
              <p style={{ margin: "0", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Developed and customized WordPress websites. Handled theme customization, plugin integration, SEO configuration, and website maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="fade-in-section">
          <h2 className="section-title">Education</h2>
          <div
            style={{
              border: "2px solid var(--border-color)",
              background: "var(--surface)",
              padding: "40px",
              marginBottom: "60px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
              <div>
                <h3 style={{ margin: "0 0 5px 0", color: "var(--text-primary)", fontWeight: "700" }}>
                  Bachelor's Degree in Computer Science
                </h3>
                <p style={{ margin: "0", color: "var(--accent-retro)", fontSize: "0.95rem", fontWeight: "700" }}>
                  KFS-HIMIT - Kafr El-Sheikh, Egypt
                </p>
              </div>
              <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "700" }}>Sep 2023 - Sep 2027</span>
            </div>
            <p style={{ margin: "20px 0 0 0", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              GPA: <strong>3.2/4</strong>
            </p>
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="fade-in-section">
          <h2 className="section-title">Latest Projects</h2>
          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PULSE_MARKETING</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-marketing.jpg"
                alt="Pulse Marketing - Digital Marketing Agency specializing in business growth"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#NODEJS #MARKETING #STRATEGY</span>
                <h3 className="project-title">نبض التسويق - Pulse Marketing</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Digital marketing agency specializing in helping businesses grow and expand in the digital world through innovative strategies.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>COMPANY_PROGRAMMING</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-programming.jpg"
                alt="Programming Company - Professional website and ERP systems development"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#NODEJS #FIREBASE #ERP</span>
                <h3 className="project-title">شركة البرمجة - Programming Company</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Design and develop professional websites, stores, applications, and ERP systems. Integrated solutions for business transformation.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>REAL_ESTATE_COMPANY</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-realestate.jpg"
                alt="Real Estate Company - Premium property collection and management"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#FIGMA #DESIGN #REALESTATE</span>
                <h3 className="project-title">Website for Real Estate Company</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Discover the perfect home from an exclusive collection of premium properties. Modern design and seamless user experience.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>STUDY_SHIELD</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-studyshield.jpg"
                alt="Study Shield - Educational monitoring with Telegram notifications"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#NODEJS #GOOGLE_CLOUD #TELEGRAM</span>
                <h3 className="project-title">Study Shield</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Monitor study habits effortlessly. Receive instant Telegram notifications when your child starts or finishes study sessions. Pure focus, zero distractions.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 5 - Weather App */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>WEATHER_APP_API</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-weather.jpg"
                alt="Weather forecasting application with real-time data"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#NODEJS #API #WEATHER</span>
                <h3 className="project-title">Weather Forecasting App</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Real-time weather forecasting application with location-based data, API integration, and predictive analytics.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 6 - Payment Gateway */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PAYMENT_GATEWAY_SYSTEM</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-payment.jpg"
                alt="Payment gateway system with secure transactions"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#.NET #PAYMENTS #SECURITY</span>
                <h3 className="project-title">Payment Gateway System</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Secure payment processing system with transaction logging, refund handling, and PCI DSS compliance standards.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 7 - Import/Export System */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>IMPORT_EXPORT_SYSTEM</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-logistics.jpg"
                alt="Import/Export management and tracking system"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#NODEJS #TRACKING #LOGISTICS</span>
                <h3 className="project-title">Import/Export & Inquiry System</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Complete import/export management platform with shipment tracking, customs documentation, and inquiry system.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 8 - E-Commerce Backend */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>ECOMMERCE_BACKEND</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-ecommerce.jpg"
                alt="E-Commerce platform with shopping and payment"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#.NET #SQL_SERVER #ECOMMERCE</span>
                <h3 className="project-title">E-Commerce Platform Backend</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Full-featured e-commerce backend with product catalogs, shopping cart, order management, and inventory tracking.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 9 - Task Management */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>TASK_MANAGEMENT_APP</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-tasks.jpg"
                alt="Task management and team collaboration tool"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#NODEJS #MONGODB #COLLABORATION</span>
                <h3 className="project-title">Task Management & Collaboration</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Team task management platform with real-time updates, progress tracking, and team collaboration features.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

            {/* Project 10 - Analytics Dashboard */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>ANALYTICS_DASHBOARD</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="/project-analytics.jpg"
                alt="Business analytics and reporting dashboard"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#.NET #DATA_ANALYTICS #REPORTING</span>
                <h3 className="project-title">Business Analytics Dashboard</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  Advanced analytics dashboard with real-time data visualization, custom reports, and performance metrics.
                </p>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    display: "inline-block",
                    transition: "all 0.2s",
                    fontSize: "0.8rem",
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
                  VIEW ON GITHUB
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>JUNIOR BACKEND DEVELOPER • </span>
          <span>PYTHON • C++ • TYPESCRIPT • </span>
          <span>.NET & SQL SERVER SPECIALIST • </span>
          <span>COMPETITIVE PROGRAMMER • </span>
          <span>JUNIOR BACKEND DEVELOPER ��� </span>
          <span>PYTHON • C++ • TYPESCRIPT • </span>
          <span>.NET & SQL SERVER SPECIALIST • </span>
          <span>COMPETITIVE PROGRAMMER • </span>
        </div>
      </div>

      <div className="container">
        {/* Terminal Section */}
        <section className="terminal-section fade-in-section" id="skills">
          <div className="terminal-header">SYSTEM_CONSOLE.EXE</div>
          <div className="terminal-row">
            <span className="output">{"> Analyzing core competencies..."}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[███████████���██░░░░] 70% - BACKEND DEVELOPMENT (.NET, C#)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[███████████████░░░] 75% - DATABASE DESIGN (SQL Server, MongoDB)"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████���█████████░░] 85% - PROBLEM SOLVING & ALGORITHMS"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[███████████░░░░░░░] 60% - CLOUD ARCHITECTURE (Azure, Docker, CI/CD)"}</span>
          </div>
          <div className="terminal-row">
            <span className="prompt">{"guest@amr:~$"}</span>
            <span className="command">contact --email amrw4634@gmail.com --phone +201281378331</span>
          </div>
          <div className="terminal-row">
            <span className="output">
              {"> Connection established... "}
              <span className="cursor-blink">_</span>
            </span>
          </div>
        </section>

        {/* Skills Grid Section */}
        <section className="fade-in-section" style={{ marginTop: "60px" }}>
          <h2 className="section-title">Technical & Soft Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
            {/* Technical Skills */}
            <div
              style={{
                border: "2px solid var(--border-color)",
                background: "var(--surface)",
                padding: "40px",
              }}
            >
              <h3 style={{ marginTop: "0", marginBottom: "25px", color: "var(--text-primary)" }}>Technical Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  "JavaScript",
                  "C#",
                  "TypeScript",
                  "C++",
                  "HTML/CSS",
                  "ASP.NET",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                  "SQL Server",
                  "Git",
                  "GitHub",
                  "Google Cloud",
                  "CI/CD",
                  "Azure",
                  "Docker",
                  "REST API",
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "var(--accent-retro)",
                      color: "var(--bg-color)",
                      padding: "8px 16px",
                      border: "1px solid var(--text-primary)",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div
              style={{
                border: "2px solid var(--border-color)",
                background: "var(--surface)",
                padding: "40px",
              }}
            >
              <h3 style={{ marginTop: "0", marginBottom: "25px", color: "var(--text-primary)" }}>Soft Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  "Leadership",
                  "Teamwork",
                  "Problem Solving",
                  "Critical Thinking",
                  "Time Management",
                  "Communication",
                  "Project Planning",
                  "Team Training",
                  "Performance Management",
                  "Written Communication",
                  "Presentation Skills",
                  "Content Creation",
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "var(--accent-retro)",
                      color: "var(--bg-color)",
                      padding: "8px 16px",
                      border: "1px solid var(--text-primary)",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Languages */}
        <section className="fade-in-section" style={{ marginBottom: "60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {/* Certifications */}
            <div
              style={{
                border: "2px solid var(--border-color)",
                background: "var(--surface)",
                padding: "40px",
              }}
            >
              <h3 style={{ marginTop: "0", marginBottom: "25px", color: "var(--text-primary)" }}>Certifications</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {[
                  { name: "Python Programming", org: "Kaggle", year: "2024" },
                  { name: "Advanced Problem Solving", org: "HackerRank", year: "2024" },
                  { name: "ECPC Finals Participation", org: "Competition", year: "2025" },
                  { name: "Node Developer", org: "NTI", year: "20/9/2025" },
                  { name: "Back-End .Net", org: "IEEE", year: "20/12/2025" },
                  { name: "B1 English", org: "EF SET", year: "15/6/2024" },
                ].map((cert, idx) => (
                  <div key={idx} style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0 0 5px 0",
                        color: "var(--text-primary)",
                        fontWeight: "700",
                        fontSize: "0.95rem",
                      }}
                    >
                      {cert.name}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                      <span style={{ color: "var(--accent-retro)" }}>{cert.org}</span>
                      <span style={{ color: "var(--accent)" }}>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div
              style={{
                border: "2px solid var(--border-color)",
                background: "var(--surface)",
                padding: "40px",
              }}
            >
              <h3 style={{ marginTop: "0", marginBottom: "25px", color: "var(--text-primary)" }}>Languages</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { lang: "Arabic", level: "Fluent", proficiency: "90%" },
                  { lang: "English", level: "Intermediate", proficiency: "75%" },
                ].map((lang, idx) => (
                  <div key={idx}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <p style={{ margin: "0", color: "var(--text-primary)", fontWeight: "700" }}>
                        {lang.lang}
                      </p>
                      <span style={{ color: "var(--accent)", fontWeight: "700" }}>{lang.proficiency}</span>
                    </div>
                    <p style={{ margin: "0", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      {lang.level}
                    </p>
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        background: "var(--border-color)",
                        border: "1px solid var(--text-primary)",
                        marginTop: "8px",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: lang.proficiency,
                          background: "var(--accent-retro)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="fade-in-section">
          <h2 className="section-title">Get In Touch</h2>
          <div
            style={{
              border: "2px solid var(--border-color)",
              background: "var(--surface)",
              padding: "60px 40px",
              marginBottom: "100px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
              <div>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "40px" }}>
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out through
                  any of the channels below. Let's build something amazing together!
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <a
                    href="mailto:amrw4634@gmail.com"
                    style={{
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      transition: "color 0.3s",
                    }}
                    className="contact-link"
                  >
                    <span>📧</span> amrw4634@gmail.com
                  </a>
                  <a
                    href="tel:+201281378331"
                    style={{
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      transition: "color 0.3s",
                    }}
                    className="contact-link"
                  >
                    <span>📱</span> +20 1281378331
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <a
                  href="https://web.facebook.com/amr.ahmed.422543/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "20px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    textAlign: "center",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "0.95rem",
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
                  FACEBOOK
                </a>
                <a
                  href="https://www.linkedin.com/in/%F0%9D%91%A8%F0%9D%91%B4%F0%9D%91%B9-%F0%9D%91%A8%F0%9D%91%AF%F0%9D%91%B4%F0%9D%91%AC%F0%9D%91%AB-613085328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "20px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    textAlign: "center",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "0.95rem",
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
                  LINKEDIN
                </a>
                <a
                  href="https://wa.me/201281378331"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "20px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    textAlign: "center",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "0.95rem",
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
                  WHATSAPP
                </a>
                <a
                  href="https://github.com/amr586"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "20px",
                    textDecoration: "none",
                    fontWeight: "700",
                    border: "2px solid var(--text-primary)",
                    textAlign: "center",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "0.95rem",
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
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-logo">
            <p style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
            <h2>
              AMR.DEV
              <br />
              2026©
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "20px" }}>
              <a
                href="https://github.com/amr586"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}
                className="contact-link"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/%F0%9D%91%A8%F0%9D%91%B4%F0%9D%91%B9-%F0%9D%91%A8%F0%9D%91%AF%F0%9D%91%B4%F0%9D%91%AC%F0%9D%91%AB-613085328/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}
                className="contact-link"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:amrw4634@gmail.com"
                style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}
                className="contact-link"
              >
                EMAIL
              </a>
            </div>
            <p className="copyright">CS STUDENT | COMPETITIVE PROGRAMMER | VICE HEAD BACK-END @IEEE | LEADER & COACH @ICPC CLUB HIMIT | STUDENT AMBASSADOR @SPRINTS | TEAM LEAD @GDG DELTA HACKATHON '26</p>
          </div>
        </footer>
      </div>
    </>
  )
}
