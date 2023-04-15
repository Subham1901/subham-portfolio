import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
