import { Suspense } from "react";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";
import Progressbar from "./layouts/Progressbar";

const AppLayout = () => {
  return (
    <div className="main-body">
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
