import { useEffect, useState } from "react";
import "./About.css";
import Study from "../assets/Study1.avif";

function About() {
  /* ==================================================
     WHO WE ARE - AUTO CONTENT
  ================================================== */

  const storyCards = [
    {
      number: "01",
      tag: "OUR FOUNDATION",
      title: "Learning with a purpose.",
      text: "RMV Academy was created with a simple idea — learning should prepare students for what comes next, not only for what comes next in an examination.",
      highlight: "Learn with direction.",
    },
    {
      number: "02",
      tag: "PRACTICAL MINDSET",
      title: "Knowledge becomes valuable when you use it.",
      text: "Students learn by practicing concepts, building projects and solving problems instead of depending only on theoretical knowledge.",
      highlight: "Learn → Practice → Apply.",
    },
    {
      number: "03",
      tag: "REAL EXPERIENCE",
      title: "Experience changes confidence.",
      text: "Real projects and industry exposure help students understand professional environments and become more confident in using their skills.",
      highlight: "Experience creates confidence.",
    },
    {
      number: "04",
      tag: "CAREER DIRECTION",
      title: "Skills should create opportunities.",
      text: "Our learning journey connects technical and creative skills with career opportunities, internships, freelance work and professional growth.",
      highlight: "Skills → Opportunities.",
    },
    {
      number: "05",
      tag: "THE RMV BELIEF",
      title: "Build something of your own.",
      text: "We encourage learners to think beyond getting a job — develop the confidence to create products, solve problems and explore entrepreneurship.",
      highlight: "Learn. Build. Grow.",
    },
  ];

  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((current) =>
        current === storyCards.length - 1 ? 0 : current + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [storyCards.length]);


  /* ==================================================
     RENDER
  ================================================== */

  return (
    <main className="about-page">

      {/* ==================================================
          HERO
          DO NOT CHANGE
      ================================================== */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-eyebrow">
            <i></i>
            ABOUT RMV ACADEMY
          </span>

          <h1>
            More Than
            <br />
            <strong>Learning.</strong>
            <br />
            We Build
            <br />
            <em>Futures.</em>
          </h1>

          <p>
            RMV Academy is a career-focused learning platform
            designed to help students turn knowledge into
            practical skills, experience and opportunities.
          </p>

          <div className="about-hero-actions">

            <a
              href="#story"
              className="about-primary-btn"
            >
              Discover RMV
              <span>↗</span>
            </a>

            <a
              href="#mission"
              className="about-secondary-btn"
            >
              Our Mission
            </a>

          </div>

        </div>


        <div className="about-hero-visual">

          <div className="about-image-frame">

            <img
              src={Study}
              alt="Student learning at RMV Academy"
            />

            <div className="image-gradient"></div>

            <div className="image-caption">

              <span>
                RMV ACADEMY
              </span>

              <strong>
                Learn. Build. Grow.
              </strong>

            </div>

          </div>


          <div className="about-stat-card">

            <strong>
              01
            </strong>

            <span>
              PRACTICAL
              <br />
              LEARNING
            </span>

          </div>


          <div className="about-year-card">

            <span>
              FOCUS
            </span>

            <strong>
              CAREER
            </strong>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHO WE ARE
          AUTOMATIC 5-CARD CONTENT
      ================================================== */}

      <section
        className="about-story"
        id="story"
      >

        <div className="story-top">

          <div className="story-label">
            <span>01</span>
            WHO WE ARE
          </div>

          <div className="story-heading">

            <h2>
              More than
              <br />
              <em>a classroom.</em>
            </h2>

          </div>

          <p className="story-description">
            RMV Academy brings together learning,
            practice, experience and career direction
            to help learners move forward with confidence.
          </p>

        </div>


        <div className="story-card-area">

          {/* LEFT NUMBER */}

          <div className="story-index">

            <span>
              0{activeStory + 1}
            </span>

            <div className="story-index-line">
              <div
                style={{
                  height: `${((activeStory + 1) / storyCards.length) * 100}%`,
                }}
              ></div>
            </div>

            <span className="story-total">
              05
            </span>

          </div>


          {/* MAIN CARD */}

          <div className="story-card-wrapper">

            {storyCards.map((card, index) => (

              <article
                key={card.number}
                className={`story-card ${
                  index === activeStory ? "active" : ""
                }`}
              >

                <div className="story-card-number">
                  {card.number}
                </div>

                <div className="story-card-content">

                  <span className="story-card-tag">
                    {card.tag}
                  </span>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.text}
                  </p>

                  <div className="story-highlight">
                    <span></span>

                    <strong>
                      {card.highlight}
                    </strong>

                    <b>
                      ↗
                    </b>
                  </div>

                </div>

                <div className="story-card-mark">
                  RMV
                </div>

              </article>

            ))}

          </div>


          {/* MANUAL DOTS */}

          <div className="story-controls">

            {storyCards.map((card, index) => (

              <button
                key={card.number}
                type="button"
                className={
                  index === activeStory
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveStory(index)
                }
                aria-label={`Show story ${index + 1}`}
              >
                <span></span>
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          OUR PURPOSE
          TIMELINE
      ================================================== */}

      <section
        className="about-mission"
        id="mission"
      >

        <div className="mission-header">

          <span>
            <i></i>
            OUR PURPOSE
          </span>

          <h2>
            Where learning
            <br />
            <em>takes you.</em>
          </h2>

          <p>
            Our purpose is not a single destination.
            It is a journey from learning the basics
            to becoming ready for real opportunities.
          </p>

        </div>


        <div className="purpose-timeline">

          <div className="timeline-track">

            <div className="timeline-progress"></div>

          </div>


          <div className="timeline-item">

            <div className="timeline-node">
              <span>01</span>
            </div>

            <div className="timeline-content">

              <span>
                START
              </span>

              <h3>
                Discover
              </h3>

              <p>
                Understand your interests,
                strengths and the skills you
                want to develop.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-node">
              <span>02</span>
            </div>

            <div className="timeline-content">

              <span>
                BUILD
              </span>

              <h3>
                Learn
              </h3>

              <p>
                Build strong foundations through
                structured and practical learning.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-node">
              <span>03</span>
            </div>

            <div className="timeline-content">

              <span>
                PRACTICE
              </span>

              <h3>
                Create
              </h3>

              <p>
                Turn knowledge into projects,
                solutions and meaningful work.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-node">
              <span>04</span>
            </div>

            <div className="timeline-content">

              <span>
                EXPERIENCE
              </span>

              <h3>
                Grow
              </h3>

              <p>
                Experience professional environments,
                teamwork and real-world expectations.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-node">
              <span>05</span>
            </div>

            <div className="timeline-content">

              <span>
                FUTURE
              </span>

              <h3>
                Launch
              </h3>

              <p>
                Move towards jobs, internships,
                freelance work or your own ideas.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          APPROACH
      ================================================== */}

      <section className="about-approach">

        <div className="approach-header">

          <div>

            <span className="approach-label">

              <i></i>

              HOW WE LEARN

            </span>

            <h2>
              From knowledge
              <br />
              <em>to real-world impact.</em>
            </h2>

          </div>

          <p>
            Our learning approach connects every stage of
            development — from understanding the basics to
            applying skills in real situations.
          </p>

        </div>


        <div className="approach-steps">

          <div className="approach-step">

            <span>01</span>

            <div className="step-icon">
              01
            </div>

            <h3>
              Learn
            </h3>

            <p>
              Understand the fundamentals.
            </p>

          </div>


          <div className="approach-arrow">
            →
          </div>


          <div className="approach-step">

            <span>02</span>

            <div className="step-icon">
              02
            </div>

            <h3>
              Practice
            </h3>

            <p>
              Strengthen knowledge through practice.
            </p>

          </div>


          <div className="approach-arrow">
            →
          </div>


          <div className="approach-step">

            <span>03</span>

            <div className="step-icon">
              03
            </div>

            <h3>
              Build
            </h3>

            <p>
              Create projects and solve problems.
            </p>

          </div>


          <div className="approach-arrow">
            →
          </div>


          <div className="approach-step">

            <span>04</span>

            <div className="step-icon">
              04
            </div>

            <h3>
              Experience
            </h3>

            <p>
              Work with real-world environments.
            </p>

          </div>


          <div className="approach-arrow">
            →
          </div>


          <div className="approach-step">

            <span>05</span>

            <div className="step-icon">
              05
            </div>

            <h3>
              Launch
            </h3>

            <p>
              Move confidently towards opportunity.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHY RMV IS DIFFERENT
          DO NOT CHANGE
      ================================================== */}

      <section className="about-difference">

        <div className="difference-top">

          <div>

            <span className="difference-label">

              <i></i>

              WHY RMV IS DIFFERENT

            </span>

            <h2>
              Education that
              <br />
              <em>goes beyond the classroom.</em>
            </h2>

          </div>

          <p>
            We don't stop at teaching a skill. We focus on
            helping students understand, apply and use that
            skill to create real opportunities.
          </p>

        </div>


        <div className="difference-list">

          <article>

            <span>01</span>

            <div>

              <h3>
                Practical Learning
              </h3>

              <p>
                Projects and hands-on activities that connect
                concepts with real applications.
              </p>

            </div>

            <b>
              ↗
            </b>

          </article>


          <article>

            <span>02</span>

            <div>

              <h3>
                Industry Exposure
              </h3>

              <p>
                Experience real IT environments and understand
                how professional teams work.
              </p>

            </div>

            <b>
              ↗
            </b>

          </article>


          <article>

            <span>03</span>

            <div>

              <h3>
                Career Assistance
              </h3>

              <p>
                Continued support with job openings, internships
                and freelance opportunities.
              </p>

            </div>

            <b>
              ↗
            </b>

          </article>


          <article>

            <span>04</span>

            <div>

              <h3>
                Entrepreneurial Skills
              </h3>

              <p>
                Learn how to work independently and understand
                the basics of running an IT business.
              </p>

            </div>

            <b>
              ↗
            </b>

          </article>

        </div>

      </section>


      {/* ==================================================
          TRANSFORMED CTA
      ================================================== */}

      <section className="about-final">

        <div className="about-final-top">

          <span>
            THE NEXT MOVE
          </span>

          <div className="final-line"></div>

          <span>
            RMV ACADEMY
          </span>

        </div>


        <div className="about-final-main">

          <div className="about-final-heading">

            <h2>
              Don't just
              <br />
              <em>learn.</em>
            </h2>

          </div>


          <div className="about-final-action">

            <p>
              Choose a skill.
              Build something real.
              Take your next step with RMV Academy.
            </p>

            <a href="/courses">

              <span>
                Explore Programs
              </span>

              <b>
                ↗
              </b>

            </a>

          </div>

        </div>


        <div className="about-final-bottom">

          <div className="final-word">
            LEARN
          </div>

          <div className="final-arrow">
            →
          </div>

          <div className="final-word">
            BUILD
          </div>

          <div className="final-arrow">
            →
          </div>

          <div className="final-word">
            GROW
          </div>

          <div className="final-arrow">
            →
          </div>

          <div className="final-word active">
            ACHIEVE
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;