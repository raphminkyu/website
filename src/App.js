import React from 'react';
import './App.css';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navig from "./components/Navig.js";
import Projects from "./components/Projects.js";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   

   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );

  <div className="App">
      <Navig />
      <About />
      <Projects />
      <Contact />
  
  </div>
  )

}

export default App;
