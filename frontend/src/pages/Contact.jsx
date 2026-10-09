import { useState } from "react";
import "../styles/Contact.css";
import Study from "../assets/programmer.jpg"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const whatsappNumber = "+919047660095";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello RMV Academy,

I would like to enquire about your programs.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${formData.program}

Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="contact-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="contact-hero">

        {/* Background Image */}
        <img
          src={Study}
          alt="Student learning at RMV Academy"
          className="contact-hero-image"
        />

        {/* Blue Overlay */}
        <div className="contact-hero-overlay"></div>

        {/* Hero Content */}
        <div className="contact-hero-content">

          <span className="contact-hero-label">
            RMV ACADEMY · CONTACT
          </span>

          <h1>
            Let's start your
            <br />
            <em>next chapter.</em>
          </h1>

          <p>
            Have a question about our programs,
            admissions or career opportunities?
            Send us your enquiry and our team
            will help you find the right direction.
          </p>

          <a
            href="#enquiry"
            className="contact-hero-button"
          >
            Send an Enquiry
            <span>↗</span>
          </a>

        </div>

        {/* Hero Bottom Navigation */}
        <div className="contact-hero-bottom">

          <span>COURSES</span>

          <i></i>

          <span>CAREERS</span>

          <i></i>

          <span>ADMISSIONS</span>

          <i></i>

          <span>GUIDANCE</span>

        </div>

      </section>


      {/* ==================================================
          ENQUIRY SECTION
      ================================================== */}

      <section
        className="contact-enquiry"
        id="enquiry"
      >

        {/* LEFT CONTENT */}

        <div className="enquiry-intro">

          <span className="section-number">
            01
          </span>

          <span className="section-label">
            SEND AN ENQUIRY
          </span>

          <h2>
            Tell us what
            <br />
            you <em>need.</em>
          </h2>

          <p>
            Tell us what you are looking for and
            our team will connect with you through
            WhatsApp.
          </p>

          <div className="enquiry-note">

            <span></span>

            <p>
              Quick enquiry.
              <br />
              Direct WhatsApp response.
            </p>

          </div>

        </div>


        {/* RIGHT FORM */}

        <div className="contact-form-card">

          <div className="form-heading">

            <div>

              <span>
                RMV ACADEMY
              </span>

              <h3>
                Start here.
              </h3>

            </div>

            <strong>
              01
            </strong>

          </div>


          <form onSubmit={handleSubmit}>

            {/* NAME + EMAIL */}

            <div className="form-row">

              <div className="input-group">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="input-group">

                <label>
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* PHONE + PROGRAM */}

            <div className="form-row">

              <div className="input-group">

                <label>
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="input-group">

                <label>
                  PROGRAM
                </label>

                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a program
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Web App Development">
                    Web App Development
                  </option>

                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>

                  <option value="Data Analyst">
                    Data Analyst
                  </option>

                  <option value="BI Analyst">
                    BI Analyst
                  </option>

                  <option value="AI Agent Development">
                    AI Agent Development
                  </option>

                  <option value="AI Utilities">
                    AI Utilities
                  </option>

                  <option value="Blockchain Developer">
                    Blockchain Developer
                  </option>

                  <option value="Search & Growth Marketing">
                    Search & Growth Marketing
                  </option>

                  <option value="Sales & Marketing">
                    Sales & Marketing
                  </option>

                  <option value="Game Design">
                    Game Design
                  </option>

                  <option value="Graphic & Creative Art Design">
                    Graphic & Creative Art Design
                  </option>

                </select>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="input-group message-group">

              <label>
                YOUR MESSAGE
              </label>

              <textarea
                name="message"
                rows="3"
                placeholder="Tell us what you'd like to know..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>


            {/* SUBMIT */}

            <div className="form-bottom">

              <div className="form-security">

                <span></span>

                <p>
                  Your details are used only
                  to respond to your enquiry.
                </p>

              </div>


              <button type="submit">

                Send via WhatsApp

                <b>
                  ↗
                </b>

              </button>

            </div>

          </form>

        </div>

      </section>


      {/* ==================================================
          SMALL WHATSAPP SECTION
      ================================================== */}

      <section className="whatsapp-mini">

        <div className="whatsapp-mini-icon">
          WA
        </div>


        <div className="whatsapp-mini-content">

          <span>
            QUICK CHAT
          </span>

          <h3>
            Have a quick question?
          </h3>

          <p>
            Message RMV Academy directly on WhatsApp.
          </p>

        </div>


        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-mini-button"
        >
          WhatsApp Us
          <span>↗</span>
        </a>

      </section>


      {/* ==================================================
          CONTACT INFORMATION
      ================================================== */}

      <section className="contact-information">

        {/* LEFT */}

        <div className="information-heading">

          <span>
            02 · CONTACT INFORMATION
          </span>

          <h2>
            We're here
            <br />
            to <em>help.</em>
          </h2>

        </div>


        {/* RIGHT */}

        <div className="information-list">

          {/* EMAIL */}

          <a
            href="mailto:info@rmvacademy.com"
            className="information-item"
          >

            <span>
              EMAIL
            </span>

            <strong>
              info@rmvacademy.com
            </strong>

            <b>
              ↗
            </b>

          </a>


          {/* PHONE */}

          <a
            href="tel:+919047660095"
            className="information-item"
          >

            <span>
              PHONE
            </span>

            <strong>
              +91 90476 60095
            </strong>

            <b>
              ↗
            </b>

          </a>


          {/* WHATSAPP */}

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="information-item"
          >

            <span>
              WHATSAPP
            </span>

            <strong>
              Chat with RMV Academy
            </strong>

            <b>
              ↗
            </b>

          </a>


          {/* LOCATION */}

          <div className="information-item">

            <span>
              LOCATION
            </span>

            <strong>
              Tamil Nadu, India
            </strong>

            <b>
              ⌖
            </b>

          </div>

        </div>

      </section>


      

    </main>
  );
}

export default Contact;