import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import Header from './components/header/header'
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Services />p
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
