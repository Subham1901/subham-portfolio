import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  Header from './components/Header';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Header />
      <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">My Projects</h1>
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
