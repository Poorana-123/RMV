import "../styles/WhyJoinUs.css";
import Why from "../assets/Why1.avif"
function WhyJoinUs() {
  const features = [
    {
      icon: "✦",
      title: "Practical Learning",
      text: "Learn through hands-on projects and real-world applications, not just theory.",
    },
    {
      icon: "↗",
      title: "Industry Exposure",
      text: "Gain practical experience and understand how technology is used in real companies.",
    },
    {
      icon: "◆",
      title: "Expert Guidance",
      text: "Learn with guidance from experienced professionals throughout your journey.",
    },
    {
      icon: "✓",
      title: "Career Opportunities",
      text: "Build skills that can lead towards jobs, internships and freelance opportunities.",
    },
  ];

  return (
    <section className="why-section" id="about">

      {/* LEFT VISUAL */}
      <div className="why-visual">

        <div className="visual-main-card">
          <img
            src={Why}
            alt="Student learning at RMV Academy"
          />

          <div className="visual-overlay"></div>

          <div className="visual-caption">
            <span>RMV ACADEMY</span>
            <strong>Learn. Build. Grow.</strong>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-icon">✦</div>

          <div>
            <span>LEARNING</span>
            <strong>100% Practical</strong>
          </div>
        </div>

        

        
      </div>


      {/* RIGHT CONTENT */}
      <div className="why-content">

        <div className="why-label">
          <span></span>
          WHY JOIN RMV ACADEMY?
        </div>

        <h2>
          Learn today.
          <br />
          <em>Build your future.</em>
        </h2>

        <p className="why-intro">
          RMV Academy combines practical learning, industry
          exposure and career-focused skills to help students
          move confidently from learning to opportunity.
        </p>


        <div className="why-features">

          {features.map((feature, index) => (
            <div className="why-feature" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <div className="feature-text">
                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </div>

              <div className="feature-arrow">
                ↗
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyJoinUs;