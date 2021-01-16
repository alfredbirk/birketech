import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Timeline2 from './Components/Timeline/Timeline';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">

      <div className="App">
        <Header/>
        <About />
        <Timeline2 />
        {/* <Projects/> */}
      </div>
    </Route >
    <Route exact path="/snake" render={() => {window.location.href="https://eager-ritchie-5eba2d.netlify.app/"}} />
    </Router>
  );
}

export default App;
