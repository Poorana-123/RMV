import "../styles/Hero.css";
import Study from "../assets/Student.avif"

function Hero() {
  return (
    <section className="rmv-hero">

      <div className="rmv-hero-content">

        <div className="rmv-hero-badge">
          <span></span>
          FUTURE-READY LEARNING ACADEMY
        </div>

        <h1 className="rmv-hero-title">
          Unlock Your
          <br />
          <strong>Potential</strong>
          <br />
          With RMV
          <br />
          Academy
        </h1>

        <div className="rmv-learners">
          <div className="learner-avatars">
            <div className="avatar">P</div>
            <div className="avatar">A</div>
            <div className="avatar">R</div>
            <div className="avatar-plus">+</div>
          </div>

          <p>
            Join learners building their
            <br />
            skills for tomorrow
          </p>
        </div>

        <div className="rmv-divider"></div>

        <p className="rmv-hero-description">
          Learn through practical programs, expert guidance,
          and real-world experiences designed to help you
          grow with confidence.
        </p>

        <div className="rmv-hero-actions">
          <a href="#courses" className="rmv-primary-btn">
            Explore Programs
            <span>↗</span>
          </a>

          <a href="#about" className="rmv-secondary-btn">
            Discover RMV
          </a>
        </div>

      </div>


      <div className="rmv-hero-visual">

        <div className="visual-panel"></div>

        <div className="student-image-wrapper">
          <img
            src={Study}
            alt="Student learning at RMV Academy"
          />
        </div>

        <div className="floating-learning-card">
          <div className="learning-icon">✦</div>

          <div>
            <span>RMV ACADEMY</span>
            <strong>Learn. Build. Grow.</strong>
          </div>
        </div>

        <div className="visual-number">01</div>

        <div className="scroll-indicator">
          <span>SCROLL DOWN</span>
          <div></div>
          <b>↓</b>
        </div>

      </div>


      <div className="rmv-trust-section">

        <div className="trust-label">
          <span>THE RMV APPROACH</span>
          <small>Learning with purpose.</small>
        </div>

        <div className="trust-items">
          <span>LEARN</span>
          <span>CREATE</span>
          <span>BUILD</span>
          <span>GROW</span>
          <span>ACHIEVE</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;