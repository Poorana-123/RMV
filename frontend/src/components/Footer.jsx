import "../styles/Footer.css";
import Logo from "../assets/logo-bg.png";

function Footer() {
  return (
    <footer className="rmv-footer">
      {/* =====================================
          TOP BRAND AREA
      ===================================== */}

      <div className="rmv-footer-top">
        <div className="footer-brand-block">
          <div className="footer-logo-wrap">
            <img
              src={Logo}
              alt="RMV Academy"
              className="footer-logo"
            />
          </div>

          <h2>
            Learn today.
            <br />
            <span>Build tomorrow.</span>
          </h2>

          <p>
            Practical learning, real-world experience,
            and career-focused skills designed for the
            next generation.
          </p>
        </div>

        {/* =====================================
            FOOTER NAVIGATION
        ===================================== */}

        <div className="footer-navigation">
          <div className="footer-column">
            <span className="footer-column-title">
              EXPLORE
            </span>

            <a href="/about">About RMV</a>
            <a href="/courses">Programs</a>
            <a href="/#advantages">Why RMV</a>
            <a href="/#contact">Contact</a>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              PROGRAMS
            </span>

            <a href="/courses">Development</a>
            <a href="/courses">Data &amp; Analytics</a>
            <a href="/courses">AI &amp; Blockchain</a>
            <a href="/courses">Marketing</a>
            <a href="/courses">Creative Design</a>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              CAREER
            </span>

            <a href="/#advantages">Internship</a>
            <a href="/#advantages">IT Exposure</a>
            <a href="/#advantages">Career Assistance</a>
            <a href="/#advantages">Freelance Support</a>
          </div>
        </div>
      </div>

      {/* =====================================
          SOCIAL MEDIA SECTION
      ===================================== */}

      <div className="footer-connect">
        <div className="connect-content">
          <span className="connect-small">
            STAY CONNECTED
          </span>

          <h3>Follow the RMV journey.</h3>

          <p>
            Connect with us for updates, learning opportunities,
            and the latest from RMV Technologies.
          </p>
        </div>

        <div className="footer-socials">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/rmvtechnologies/"
            className="social-icon"
            aria-label="Instagram"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                className="social-dot"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/rmv-technologies"
            className="social-icon"
            aria-label="LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9v9" />
              <path d="M6 6.5v.01" />
              <path d="M10 18v-5.2a3 3 0 0 1 6 0V18" />
              <path d="M10 9v9" />
              <path d="M16 18v-5" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919047660095"
            className="social-icon"
            aria-label="WhatsApp"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 19l1.2-3A8 8 0 1 1 8 18.5z" />
              <path d="M9 9.5c.3 2 2 3.7 4 4" />
            </svg>
          </a>
        </div>
      </div>

      {/* =====================================
          CONTACT STRIP
      ===================================== */}

      <div className="footer-contact-strip">
        <a href="mailto:info@rmvacademy.com">
          <span className="contact-icon">✉</span>
          info@rmvacademy.com
        </a>

        <a href="tel:+919047660095">
          <span className="contact-icon">☎</span>
          +91 90476 60095
        </a>

        <span>
          <span className="contact-icon">⌖</span>
          Tamil Nadu, India
        </span>
      </div>

      {/* =====================================
          FOOTER BOTTOM
      ===================================== */}

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} RMV Academy.
          All rights reserved.
        </span>

        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
        </div>

        <strong>
          LEARN <i>•</i> BUILD <i>•</i> GROW
        </strong>
      </div>
    </footer>
  );
}

export default Footer;