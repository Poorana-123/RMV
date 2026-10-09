import React from "react";
import { Link } from "react-router-dom";
import "../styles/Program.css";

const programs = [
  {
    id: 1,
    title: "Web Development",
    description: "Create responsive websites and modern web experiences.",
    icon: "</>",
    color: "blue",
  },
  {
    id: 4,
    title: "Data Analytics",
    description: "Discover insights and make data-driven decisions.",
    icon: "↗",
    color: "gold",
  },
  {
    id: 7,
    title: "AI Development",
    description: "Build intelligent applications using AI technologies.",
    icon: "✳",
    color: "navy",
  },
  {
    id: 5,
    title: "Business Intelligence Analyst",
    description: "Scrape data, model it and build dashboards that decision-makers rely on.",
    icon: "⌁",
    color: "blue",
  },
];

export default function Programs() {
  return (
    <section className="home-programs">
      <div className="home-programs-heading">
        <div>
          <span className="home-programs-label">LEARN • BUILD • GROW</span>
          <h2>
            Explore Our <span>Programs</span>
          </h2>
          <p>Practical skills to take your next step forward.</p>
        </div>

        <Link to="/courses" className="home-programs-more">
          All Programs <span>↗</span>
        </Link>
      </div>

      <div className="home-programs-grid">
        {programs.map((program) => (
          <article className="home-program-card" key={program.id}>
            <div className={`home-program-icon ${program.color}`}>
              {program.icon}
            </div>

            <span className="home-program-number">
              PROGRAM 0{program.id}
            </span>

            <h3>{program.title}</h3>
            <p>{program.description}</p>

            <Link
              to={`/program/${program.id}`}
              className="home-program-link"
            >
              Explore Course <span>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}