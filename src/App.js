import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Timeline2 from './Components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Timeline2 />
      {/* <Projects/> */}
    </div>
  );
}

export default App;
