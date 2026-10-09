import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const categories = [
  "All Courses",
  "Development",
  "Data & Analytics",
  "AI & Blockchain",
  "Marketing & Business",
  "Creative",
];

const courses = [
  {
    id: 1,
    title: "Website Development",
    category: "Development",
    description:
      "Learn to build responsive websites using modern frontend technologies.",
    duration: "12 Weeks",
    level: "Beginner",
    format: "Practical Learning",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    title: "Web Application Development",
    category: "Development",
    description:
      "Develop dynamic web applications with frontend and backend technologies.",
    duration: "16 Weeks",
    level: "Intermediate",
    format: "Project Based",
    skills: ["React", "Node.js", "APIs", "Database"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "Development",
    description:
      "Explore mobile application development and create useful applications.",
    duration: "14 Weeks",
    level: "Beginner",
    format: "Practical Learning",
    skills: ["Mobile UI", "App Logic", "APIs", "Testing"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    title: "Data Analyst",
    category: "Data & Analytics",
    description:
      "Transform raw data into meaningful insights using analytical tools.",
    duration: "12 Weeks",
    level: "Beginner",
    format: "Project Based",
    skills: ["Python", "SQL", "Excel", "Data Visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    title: "Business Intelligence Analyst",
    category: "Data & Analytics",
    description:
      "Learn to analyze business performance and create insightful dashboards.",
    duration: "12 Weeks",
    level: "Intermediate",
    format: "Practical Learning",
    skills: ["SQL", "Power BI", "Dashboards", "Reporting"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    title: "Blockchain Developer",
    category: "AI & Blockchain",
    description:
      "Understand blockchain fundamentals and smart contract development.",
    duration: "16 Weeks",
    level: "Intermediate",
    format: "Project Based",
    skills: ["Blockchain", "Solidity", "Smart Contracts", "Web3"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    title: "AI Agent Development",
    category: "AI & Blockchain",
    description:
      "Explore intelligent agents, AI integrations, and automated workflows.",
    duration: "14 Weeks",
    level: "Intermediate",
    format: "Project Based",
    skills: ["Python", "LLMs", "APIs", "Automation"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    title: "AI Utilities",
    category: "AI & Blockchain",
    description:
      "Discover AI tools and learn how to use them to solve practical problems.",
    duration: "8 Weeks",
    level: "Beginner",
    format: "Practical Learning",
    skills: ["AI Tools", "Prompting", "Automation", "Productivity"],
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=800&q=85",
  },
  
  {
    id: 9,
    title: "Search & Growth Marketing",
    category: "Marketing & Business",
    description:
      "Learn search optimization, digital growth strategies, and analytics.",
    duration: "10 Weeks",
    level: "Beginner",
    format: "Practical Learning",
    skills: ["SEO", "Keyword Research", "Analytics", "Content"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 10,
    title: "Sales & Marketing",
    category: "Marketing & Business",
    description:
      "Build practical skills in customer engagement and marketing strategy.",
    duration: "10 Weeks",
    level: "Beginner",
    format: "Practical Learning",
    skills: ["Sales", "Communication", "Marketing", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 11,
    title: "Game Design",
    category: "Creative",
    description:
      "Explore game concepts, gameplay design, and interactive experiences.",
    duration: "12 Weeks",
    level: "Beginner",
    format: "Project Based",
    skills: ["Game Concepts", "Level Design", "UI Design", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 12,
    title: "Graphic & Creative Art Design",
    category: "Creative",
    description:
      "Develop visual communication skills and create compelling designs.",
    duration: "10 Weeks",
    level: "Beginner",
    format: "Practical Learning",
    skills: ["Graphic Design", "Typography", "Color Theory", "Branding"],
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=85",
  },
];

const categoryIcons = {
  Development: "⌘",
  "Data & Analytics": "▥",
  "AI & Blockchain": "✳",
  "Marketing & Business": "↗",
  Creative: "✎",
};

function CourseCard({ course }) {
  return (
    <article className="rmv-course-card">
      <Link
        to={`/program/${course.id}`}
        className="rmv-course-image-link"
        aria-label={`Explore ${course.title}`}
      >
        <img
          className="rmv-course-image"
          src={course.image}
          alt={course.title}
          loading="lazy"
        />

        <span className="rmv-course-category">{course.category}</span>
      </Link>

      <div className="rmv-course-content">
        <h3>{course.title}</h3>

        <p className="rmv-course-description">{course.description}</p>

        <div className="rmv-course-specs">
          <span>
            <span className="rmv-spec-icon">◷</span>
            {course.duration}
          </span>

          <span>
            <span className="rmv-spec-icon">▤</span>
            {course.level}
          </span>
        </div>

        <div className="rmv-course-card-footer">
          <span className="rmv-course-format">{course.format}</span>

          <Link
            to={`/program/${course.id}`}
            className="rmv-course-link"
          >
            Explore Course <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCourses = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All Courses" ||
        course.category === activeCategory;

      const searchableText = [
        course.title,
        course.category,
        course.description,
        course.level,
        ...course.skills,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(search);
    });
  }, [activeCategory, searchTerm]);

  const displayedCourses = showAll
    ? filteredCourses
    : filteredCourses.slice(0, 6);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <main className="rmv-courses-page">
      {/* PAGE INTRODUCTION */}
      <section className="rmv-courses-hero">
        <div className="rmv-courses-hero-content">
          <span className="rmv-section-eyebrow">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h1>
            Learn New Skills.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Explore practical learning programs designed to help you develop
            valuable skills, create projects, and move toward your goals.
          </p>

          <div className="rmv-hero-actions">
            <a href="#rmv-course-catalog" className="rmv-primary-button">
              Explore Courses <span aria-hidden="true">→</span>
            </a>

            <a href="#rmv-course-categories" className="rmv-secondary-button">
              Browse Categories
            </a>
          </div>

          <div className="rmv-hero-note">
            <span className="rmv-hero-note-icon">✦</span>
            <span>
              <strong>Learn by doing</strong>
              <small>Build practical skills through projects.</small>
            </span>
          </div>
        </div>

        <div className="rmv-hero-visual">
          <div className="rmv-hero-photo-main">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85"
              alt="Students learning together"
            />
          </div>

          <div className="rmv-hero-photo-small">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=85"
              alt="Student working on a computer"
            />
          </div>

          <div className="rmv-hero-info-card">
            <span className="rmv-hero-info-icon">✦</span>
            <div>
              <strong>Find your learning path</strong>
              <p>Discover a program that matches your interests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING BENEFITS */}
      <section className="rmv-learning-benefits">
        <div className="rmv-benefit-item">
          <span className="rmv-benefit-icon">◎</span>
          <div>
            <h3>Practical Learning</h3>
            <p>Build skills through hands-on activities.</p>
          </div>
        </div>

        <div className="rmv-benefit-item">
          <span className="rmv-benefit-icon">▣</span>
          <div>
            <h3>Flexible Programs</h3>
            <p>Explore learning paths that fit your goals.</p>
          </div>
        </div>

        <div className="rmv-benefit-item">
          <span className="rmv-benefit-icon">✧</span>
          <div>
            <h3>Project Focused</h3>
            <p>Apply your knowledge to practical projects.</p>
          </div>
        </div>
      </section>

      {/* COURSE CATALOGUE */}
      <section
        className="rmv-course-catalog"
        id="rmv-course-catalog"
      >
        <div className="rmv-section-heading">
          <div>
            <span className="rmv-section-eyebrow">
              FIND YOUR NEXT SKILL
            </span>

            <h2>Explore Our Courses</h2>

            <p>
              Discover a program that matches your interests and ambitions.
            </p>
          </div>

          <span className="rmv-course-count">
            {filteredCourses.length} Programs
          </span>
        </div>

        {/* SEARCH */}
        <div className="rmv-course-search">
          <span aria-hidden="true">⌕</span>

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setShowAll(false);
            }}
            placeholder="Search courses, skills, or categories..."
            aria-label="Search courses"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="rmv-clear-search"
            >
              Clear
            </button>
          )}
        </div>

        {/* CATEGORY FILTERS */}
        <div
          className="rmv-category-filters"
          id="rmv-course-categories"
          aria-label="Filter courses by category"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rmv-category-filter ${
                activeCategory === category ? "active" : ""
              }`}
              aria-pressed={activeCategory === category}
            >
              {category !== "All Courses" && (
                <span aria-hidden="true">
                  {categoryIcons[category]}
                </span>
              )}

              {category}
            </button>
          ))}
        </div>

        {/* FEATURED PROGRAM */}
        {activeCategory === "All Courses" &&
          searchTerm.trim() === "" && (
            <div className="rmv-featured-course">
              <div className="rmv-featured-course-image">
                <img
                  src={courses[0].image}
                  alt="Website development learning program"
                  loading="lazy"
                />

                <span className="rmv-featured-label">
                  FEATURED PROGRAM
                </span>
              </div>

              <div className="rmv-featured-course-content">
                <span className="rmv-section-eyebrow">
                  START YOUR JOURNEY
                </span>

                <h3>Website Development</h3>

                <p>
                  Learn the foundations of modern web development and
                  understand how to create responsive, user-friendly websites.
                </p>

                <div className="rmv-featured-specs">
                  <span>◷ {courses[0].duration}</span>
                  <span>▤ {courses[0].level}</span>
                </div>

                <Link
                  to={`/program/${courses[0].id}`}
                  className="rmv-primary-button"
                >
                  Explore Course <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          )}

        {/* COURSE CARDS */}
        <div className="rmv-course-grid">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="rmv-no-courses">
            <span>⌕</span>
            <h3>No matching courses found</h3>
            <p>
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              className="rmv-primary-button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Courses");
                setShowAll(false);
              }}
            >
              Show All Courses
            </button>
          </div>
        )}

        {filteredCourses.length > 6 && (
          <div className="rmv-view-all">
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              className="rmv-view-all-button"
            >
              {showAll ? "Show Fewer Courses" : "View All Courses"}
              <span aria-hidden="true">
                {showAll ? " ↑" : " →"}
              </span>
            </button>
          </div>
        )}
      </section>

      {/* LEARNING PROCESS */}
      <section className="rmv-learning-process">
        <div className="rmv-process-heading">
          <span className="rmv-section-eyebrow">
            YOUR LEARNING JOURNEY
          </span>

          <h2>A Simple Way to Get Started</h2>

          <p>
            Choose your course and take the next step toward your learning goals.
          </p>
        </div>

        <div className="rmv-process-grid">
          <article className="rmv-process-card">
            <span className="rmv-process-number">01</span>
            <h3>Explore Courses</h3>
            <p>
              Browse our programs and discover subjects that interest you.
            </p>
          </article>

          <article className="rmv-process-card">
            <span className="rmv-process-number">02</span>
            <h3>Choose Your Program</h3>
            <p>
              Review course details, learning objectives, and required skills.
            </p>
          </article>

          <article className="rmv-process-card">
            <span className="rmv-process-number">03</span>
            <h3>Start Learning</h3>
            <p>
              Contact our team to learn more about enrollment and the next steps.
            </p>
          </article>
        </div>
      </section>

      {/* ENROLLMENT CTA */}
      <section className="rmv-courses-cta">
        <div>
          <span className="rmv-cta-eyebrow">READY TO GET STARTED?</span>

          <h2>Your Next Skill Starts Here.</h2>

          <p>
            Find the right program for your interests and take the next step
            in your learning journey.
          </p>
        </div>

        <Link to="/contact" className="rmv-cta-button">
          Enquire Now <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}