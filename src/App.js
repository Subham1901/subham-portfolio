import React from "react";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
