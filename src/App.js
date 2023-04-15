import { Container } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
