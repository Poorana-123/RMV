import "../styles/CareerAdvantages.css";


function CareerAdvantages() {
  const advantages = [
    {
      number: "01",
      label: "EXPERIENCE",
      title: "Internship Certificate",
      description:
        "Validate your practical learning with an internship certificate.",
    },
    {
      number: "02",
      label: "SUPPORT",
      title: "1 Year Career Assistance",
      description:
        "Stay connected with job openings and freelance opportunities.",
    },
    {
      number: "03",
      label: "EXPOSURE",
      title: "1 Month IT Company Exposure",
      description:
        "Work on live projects and experience a real IT environment.",
    },
    {
      number: "04",
      label: "INDEPENDENCE",
      title: "Run Your Own IT Company",
      description:
        "Get the tools and support to start working independently.",
    },
  ];

  return (
    <section className="build-future">

      {/* HEADER */}
      <div className="build-header">

        <div className="build-eyebrow">
          <span>03</span>
          BEYOND TRAINING
        </div>

        <h2>
          Build more than
          <br />
          <em>just skills.</em>
        </h2>

        <p>
          At RMV Academy, learning continues beyond the classroom.
          Gain experience, support and opportunities that help
          you move towards your career.
        </p>

      </div>


      {/* JOURNEY */}
      <div className="future-journey">

        <div className="journey-line">
          <span></span>
        </div>

        <div className="future-items">

          {advantages.map((item) => (
            <article
              className="future-item"
              key={item.number}
            >

              <div className="future-number">
                {item.number}
              </div>

              <div className="future-node"></div>

              <div className="future-content">

                <span className="future-label">
                  {item.label}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="future-arrow">
                  ↗
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>


      {/* BOTTOM MESSAGE */}
      <div className="future-footer">

        <span>RMV ACADEMY</span>

        <div className="future-footer-line"></div>

        <strong>
          LEARN → BUILD → GROW
        </strong>

      </div>

    </section>
  );
}

export default CareerAdvantages;