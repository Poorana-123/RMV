import React from "react";
import "../styles/BusinessSkills.css";

const businessSkills = [
  {
    number: "01",
    title: "Lead Generation",
    description: "Find businesses that need IT services.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Freelance Projects",
    description: "Bid, pitch, and win projects on freelance platforms.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Coding Basics",
    description: "Learn enough coding to scope and deliver small jobs.",
    icon: "</>",
  },
  {
    number: "04",
    title: "Communication Skills",
    description: "Communicate confidently with clients and teams.",
    icon: "◉",
  },
  {
    number: "05",
    title: "LinkedIn Personal Branding",
    description: "Build a profile that attracts career opportunities.",
    icon: "in",
  },
  {
    number: "06",
    title: "Profile Building by Vertical",
    description: "Create a portfolio tailored to your chosen field.",
    icon: "▤",
  },
  {
    number: "07",
    title: "Digital Marketing Basics",
    description: "Learn to market yourself and your IT services.",
    icon: "↗",
  },
  {
    number: "08",
    title: "Content Marketing Basics",
    description: "Create posts and case studies that build trust.",
    icon: "✎",
  },
  {
    number: "09",
    title: "Proposal Writing",
    description: "Turn a client's requirements into a clear proposal.",
    icon: "▧",
  },
  {
    number: "10",
    title: "Contract Writing",
    description: "Define project scope, payments, and timelines.",
    icon: "▣",
  },
  {
    number: "11",
    title: "Invoice Generation",
    description: "Create professional invoices and track payments.",
    icon: "₹",
  },
  {
    number: "12",
    title: "IT Environment Practice",
    description: "Experience tools, tickets, teamwork, and deadlines.",
    icon: "⌘",
  },
];

const careerBenefits = [
  {
    number: "01",
    title: "Internship Certificate",
    description:
      "Receive an internship certificate you can present to potential employers.",
  },
  {
    number: "02",
    title: "1 Month IT Company Exposure",
    description:
      "Gain exposure to RMV Technologies and participate in live client projects under team guidance.",
  },
];

function BusinessSkills() {
  return (
    <section className="business-skills-section">
      <div className="business-skills-container">

        {/* HERO HEADER */}
        <div className="business-skills-header">
          <span className="business-eyebrow">
            <span className="business-eyebrow-line"></span>
            BEYOND TECHNICAL SKILLS
          </span>

          <h2>
            Learn to Code.
            <br />
            <span>Learn to Build a Business.</span>
          </h2>

          <p>
            Whatever course you choose, learn how to find clients,
            deliver projects, and manage your own IT business.
            Develop the skills to pursue freelance opportunities
            while building your career.
          </p>

          <a href="#business-skills-list" className="business-primary-btn">
            Explore Business Skills <span>→</span>
          </a>
        </div>

        {/* HIGHLIGHT STRIP */}
        <div className="business-highlight-strip">
          <div className="business-highlight-item">
            <span className="highlight-symbol">01</span>
            <div>
              <h3>Find Clients</h3>
              <p>Learn lead generation and pitching.</p>
            </div>
          </div>

          <div className="business-highlight-item">
            <span className="highlight-symbol">02</span>
            <div>
              <h3>Deliver Projects</h3>
              <p>Manage scope, quality, and deadlines.</p>
            </div>
          </div>

          <div className="business-highlight-item">
            <span className="highlight-symbol">03</span>
            <div>
              <h3>Grow Your Career</h3>
              <p>Build your profile and professional network.</p>
            </div>
          </div>
        </div>

        {/* SKILLS GRID */}
        <div
          className="business-skills-content"
          id="business-skills-list"
        >
          <div className="business-section-heading">
            <div>
              <span className="business-eyebrow">
                YOUR BUSINESS TOOLKIT
              </span>

              <h2>
                12 Skills to Take You
                <br />
                <span>From Learning to Earning.</span>
              </h2>
            </div>

            <p>
              Technical knowledge is just the beginning.
              Learn the professional skills needed to find,
              manage, and deliver IT projects.
            </p>
          </div>

          <div className="business-skills-grid">
            {businessSkills.map((skill) => (
              <article className="business-skill-card" key={skill.number}>
                <div className="business-skill-card-top">
                  <span className="business-skill-number">
                    {skill.number}
                  </span>

                  <span className="business-skill-icon">
                    {skill.icon}
                  </span>
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

                <span className="business-card-line"></span>
              </article>
            ))}
          </div>
        </div>

        {/* CAREER SUPPORT */}
        <div className="business-career-section">
          <div className="business-career-intro">
            <span className="business-eyebrow">
              YOUR CAREER, BACKED BY US
            </span>

            <h2>
              Learn Here.
              <br />
              <span>Experience the IT Industry.</span>
            </h2>

            <p>
              Go beyond classroom learning with career-focused
              support and practical exposure to a professional
              IT working environment.
            </p>
          </div>

          <div className="business-career-cards">
            {careerBenefits.map((benefit) => (
              <article
                className="business-career-card"
                key={benefit.number}
              >
                <span className="career-card-number">
                  {benefit.number}
                </span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>

                <span className="career-card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
}

export default BusinessSkills;