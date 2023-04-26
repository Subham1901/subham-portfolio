import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";

const AppLayout = () => {
  return (
    <>
      <Nav />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
