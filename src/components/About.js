import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center">
          Hi, I'm Bogdan, an engineer from Romania with 8 years of academic and industry experience.
          I'm passionate about <b>network security</b>, <b>ethical hacking</b>, and <b>front-end development</b>.
        </p>
        <p className="text-center">
          This portfolio reflects my journey, showcasing diverse projects, challenges overcome, and lessons learned.
        </p>
        <p className="text-center">
          Outside work, I enjoy hiking and capturing nature's beauty through photography. By the way, check out  
          <b> <a href="https://instagram.com/bogdanbarbulescu" target="_blank">my work</a></b>.
        </p>
        <div className="text-center">
          <a href="about-me.html" className="btn btn-warning">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default About;
