import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-V90EZVCGP8"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V90EZVCGP8');
          `,
        }}
      />

      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">BVB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="text-center text-light py-5 bg-dark">
        <div className="container">
          <h1 className="display-4">Networking and Cybersecurity:<br /> Projects, Resources, and Insights</h1>
          <a href="#projects" className="btn btn-outline-warning mt-3">View My Work</a>
        </div>
      </header>

      <section id="about" className="py-5 bg-light">
        <div className="container text-center">
          <h2>About Me</h2>
          <p>Hi, I'm Bogdan, an engineer from Romania passionate about <b>network security</b>, <b>ethical hacking</b>, and <b>front-end development</b>.</p>
          <a href="about-me.html" className="btn btn-warning">Read more</a>
        </div>
      </section>

      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center">Projects</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card h-100">
                <img src="images/network.png" alt="Networking" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Networking</h5>
                  <p className="card-text">Automating configurations and monitoring using Python and APIs.</p>
                  <a href="network-automation.html" className="btn btn-warning">Read more</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100">
                <img src="images/head.webp" alt="Cybersecurity" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Cybersecurity</h5>
                  <p className="card-text">Building custom labs to study and practice cybersecurity tools.</p>
                  <a href="cybersecurity.html" className="btn btn-warning">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-dark text-light text-center">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="social-icons">
            <a href="https://github.com/bogdanbarbulescu" target="_blank" className="text-light me-3">
              <i className="bi bi-github fs-3"></i>
            </a>
            <a href="https://www.linkedin.com/in/bogdan-barbulescu/" target="_blank" className="text-light me-3">
              <i className="bi bi-linkedin fs-3"></i>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2025 Bogdan Bărbulescu | All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
