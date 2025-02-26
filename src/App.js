import React from "react";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
