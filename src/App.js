import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Projects/>
    </div>
  );
}

export default App;
