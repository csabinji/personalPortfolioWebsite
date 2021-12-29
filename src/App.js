import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/style.css'
import Header from './components/header/header'
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
