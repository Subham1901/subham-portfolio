import React from "react";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Content />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
