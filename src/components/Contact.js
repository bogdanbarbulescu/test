import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-light text-center">
      <div className="container">
        <h2 className="mb-4">Contact Me</h2>
        <p>Follow me on my social media profiles or send me a message directly.</p>
        <div className="social-icons">
          <a href="https://github.com/bogdanbarbulescu" target="_blank" className="text-light me-3" aria-label="GitHub">
            <i className="bi bi-github fs-3"></i>
          </a>
          <a href="https://www.linkedin.com/in/bogdan-barbulescu/" target="_blank" className="text-light me-3" aria-label="LinkedIn">
            <i className="bi bi-linkedin fs-3"></i>
          </a>
          <a href="https://instagram.com/bogdanbarbulescu" target="_blank" className="text-light me-3" aria-label="Instagram">
            <i className="bi bi-instagram fs-3"></i>
          </a>
          <a href="https://www.youtube.com/@bogdanbarbulescu800" target="_blank" className="text-light" aria-label="YouTube">
            <i className="bi bi-youtube fs-3"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
