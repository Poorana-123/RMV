import React, { useEffect, useState } from "react";
import "../styles/Testimonials.css";

const defaultTestimonials = [
  {
    id: 1,
    name: "Divya",
    course: "Website Development",
    rating: 5,
    review:
      "The classes helped me understand web development through practical projects. I feel more confident building responsive websites.",
  },
  {
    id: 2,
    name: "Mohan",
    course: "Python Programming",
    rating: 5,
    review:
      "The concepts were explained clearly, and the practical exercises helped me improve my programming skills.",
  },
  {
    id: 3,
    name: "Kumar",
    course: "Full Stack Development",
    rating: 4,
    review:
      "I enjoyed learning frontend and backend development. Building projects helped me understand how web applications work.",
  },
  {
    id: 4,
    name: "Praveen",
    course: "Data Analyst",
    rating: 5,
    review:
      "The training introduced me to useful data analysis tools and helped me understand how to work with real datasets.",
  },
];

const STORAGE_KEY = "rmv-academy-testimonials";

function Testimonials() {
  const [testimonials, setTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultTestimonials;
    } catch {
      return defaultTestimonials;
    }
  });

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    rating: "5",
    review: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(testimonials)
      );
    } catch {
      // Saving may fail if browser storage is unavailable.
    }
  }, [testimonials]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const review = formData.review.trim();
    const course = formData.course.trim();
    const rating = Number(formData.rating);

    if (!name || !course || !review) {
      setMessage("Please complete all fields.");
      return;
    }

    if (name.length > 50 || course.length > 80 || review.length > 500) {
      setMessage("Please check the maximum character limits.");
      return;
    }

    const newTestimonial = {
      id: Date.now(),
      name,
      course,
      rating,
      review,
    };

    setTestimonials((previous) => [
      newTestimonial,
      ...previous,
    ]);

    setFormData({
      name: "",
      course: "",
      rating: "5",
      review: "",
    });

    setMessage("Thank you! Your testimonial has been added.");
    setShowForm(false);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Heading */}
        <div className="testimonials-heading">
          <span className="testimonials-label">
            STUDENT EXPERIENCES
          </span>

          <h2>
            Real Stories.
            <span> Real Growth.</span>
          </h2>

          <p>
            Every learning journey has a story. Share yours with
            the RMV Academy community.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article
              className="testimonial-card"
              key={item.id}
            >
              <div className="testimonial-card-top">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>

                <div
                  className="testimonial-rating"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  <span aria-hidden="true">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </span>
                  <span className="rating-number">
                    {item.rating}/5
                  </span>
                </div>
              </div>

              <p className="testimonial-review">
                {item.review}
              </p>

              <span className="testimonial-course">
                {item.course}
              </span>

              <div className="testimonial-divider" />

              <div className="testimonial-student">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.name.charAt(0).toUpperCase()}
                </div>

                <div className="testimonial-student-info">
                  <h3>{item.name}</h3>
                  <p>RMV Academy Student</p>
                </div>

                <span
                  className="testimonial-check"
                  title="Submitted testimonial"
                  aria-label="Submitted testimonial"
                >
                  ✓
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Add testimonial button */}
        <div className="testimonial-action">
          <div>
            <h3>Have a story to share?</h3>
            <p>
              Tell us about your learning experience at RMV Academy.
            </p>
          </div>

          <button
            type="button"
            className="testimonial-cta"
            onClick={() => {
              setShowForm((previous) => !previous);
              setMessage("");
            }}
            aria-expanded={showForm}
            aria-controls="testimonial-form"
          >
            {showForm ? "Close Form" : "Write a Testimonial"}
            <span aria-hidden="true">
              {showForm ? "−" : "+"}
            </span>
          </button>
        </div>

        {/* Submission form */}
        {showForm && (
          <form
            id="testimonial-form"
            className="testimonial-form"
            onSubmit={handleSubmit}
          >
            <div className="testimonial-form-heading">
              <span className="testimonials-label">
                YOUR EXPERIENCE
              </span>
              <h3>Share Your Story</h3>
              <p>
                Your testimonial will appear in this section.
              </p>
            </div>

            <div className="testimonial-form-grid">
              <div className="testimonial-field">
                <label htmlFor="testimonial-name">
                  Your Name
                </label>
                <input
                  id="testimonial-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={50}
                  required
                />
              </div>

              <div className="testimonial-field">
                <label htmlFor="testimonial-course">
                  Course Name
                </label>
                <input
                  id="testimonial-course"
                  type="text"
                  name="course"
                  placeholder="e.g. Python Programming"
                  value={formData.course}
                  onChange={handleChange}
                  maxLength={80}
                  required
                />
              </div>

              <div className="testimonial-field">
                <label htmlFor="testimonial-rating">
                  Your Rating
                </label>
                <select
                  id="testimonial-rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="5">★★★★★ — Excellent</option>
                  <option value="4">★★★★☆ — Very Good</option>
                  <option value="3">★★★☆☆ — Good</option>
                  <option value="2">★★☆☆☆ — Fair</option>
                  <option value="1">★☆☆☆☆ — Needs Improvement</option>
                </select>
              </div>

              <div className="testimonial-field testimonial-field-full">
                <label htmlFor="testimonial-review">
                  Your Testimonial
                </label>
                <textarea
                  id="testimonial-review"
                  name="review"
                  placeholder="Tell us about your learning experience..."
                  value={formData.review}
                  onChange={handleChange}
                  rows={5}
                  maxLength={500}
                  required
                />

                <span className="testimonial-character-count">
                  {formData.review.length}/500 characters
                </span>
              </div>
            </div>

            {message && (
              <p
                className="testimonial-message"
                role="status"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="testimonial-submit"
            >
              Submit Testimonial <span>→</span>
            </button>

            <p className="testimonial-privacy-note">
              This demo saves submissions only in this browser.
              They are not sent to RMV Academy.
            </p>
          </form>
        )}

        {!showForm && message && (
          <p className="testimonial-success" role="status">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Testimonials;