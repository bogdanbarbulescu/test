import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center text-dark mb-4">Projects</h2>
        <div className="row">
          {/* Networking Project */}
          <div className="col-md-3 mb-3">
            <div className="card h-100">
              <img src="images/network.png" alt="Networking" className="card-img-top" loading="lazy" />
              <div className="card-body">
                <h5 className="card-title">Networking</h5>
                <p className="card-text">Automating configurations and monitoring using Python and APIs.</p>
                <a href="network-automation.html" className="btn btn-warning">Read more</a>
              </div>
            </div>
          </div>

          {/* Cybersecurity Project */}
          <div className="col-md-3 mb-3">
            <div className="card h-100">
              <img src="images/head.webp" alt="Cybersecurity" className="card-img-top" loading="lazy" />
              <div className="card-body">
                <h5 className="card-title">Cybersecurity</h5>
                <p className="card-text">Building custom labs to study and practice cybersecurity tools.</p>
                <a href="cybersecurity.html" className="btn btn-warning">Read more</a>
              </div>
            </div>
          </div>

          {/* Web Development Project */}
          <div className="col-md-3 mb-3">
            <div className="card h-100">
              <img src="images/web.webp" alt="Web Development" className="card-img-top" loading="lazy" />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Creating responsive and modern interfaces using HTML, CSS and JS.</p>
                <a href="web-development-projects.html" className="btn btn-warning">Read more</a>
              </div>
            </div>
          </div>

          {/* Learning Resources */}
          <div className="col-md-3 mb-3">
            <div className="card h-100">
              <img src="images/learn.webp" alt="Learning Resources" className="card-img-top" loading="lazy" />
              <div className="card-body">
                <h5 className="card-title">Learning Resources</h5>
                <p className="card-text">Collection of resources spanning Networking, Certifications, and more.</p>
                <a href="learning.html" className="btn btn-warning">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
