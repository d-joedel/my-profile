import React from "react";

function Contact() {
  return (
    <div className="contact-section page">

      <div className="contact-card">
        <h1 className="glow">Contact Me</h1>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            defaultValue="Joe Del Dacudao"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message..."
            rows="5"
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;