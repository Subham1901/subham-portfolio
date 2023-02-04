import React from "react";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="main-container">
      <Header />
      {/* <Content /> */}
      <Projects />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
