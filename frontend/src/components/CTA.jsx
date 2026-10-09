import "../styles/CTA.css";
import Study from "../assets/Study2.webp"

function CTA() {
  return (
    <section className="rmv-cta-section">
      <div className="rmv-cta">

        {/* Left Content */}
        <div className="rmv-cta-content">
          <span className="rmv-cta-label">
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to Build Your
            <br />
            <strong>Future With RMV?</strong>
          </h2>

          <p>
            Learn practical skills, gain real experience,
            and prepare yourself for exciting career
            opportunities.
          </p>

          <a href="#courses" className="rmv-cta-button">
            Explore Programs
            <span>↗</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="rmv-cta-image">
          <div className="rmv-cta-circle"></div>

          <img
            src={Study}
            alt="Student learning at RMV Academy"
          />

          <div className="rmv-tech-badge rmv-ai">
            AI
          </div>

          <div className="rmv-tech-badge rmv-js">
            JS
          </div>

          <div className="rmv-tech-badge rmv-code">
            &lt;/&gt;
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;