import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center text-dark mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Networking</h5>
            <ul>
              <li>Network Configuration</li>
              <li>Routing and Switching</li>
              <li>Network Monitoring</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Cybersecurity</h5>
            <ul>
              <li>Penetration Testing</li>
              <li>Vulnerability Assessment</li>
              <li>Security Tools</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Web Development</h5>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Bootstrap, React</li>
              <li>API Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
