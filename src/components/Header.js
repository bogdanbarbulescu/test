import React from "react";

const Header = () => {
  return (
    <header className="text-center text-light py-5" style={{
      backgroundImage: `url('/images/about.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "80vh"
    }}>
      <div className="container">
        <h1 className="display-4">About Me</h1>
        <p className="lead">A glimpse into my skills, experiences, and passions.</p>
      </div>
    </header>
  );
};

export default Header;
