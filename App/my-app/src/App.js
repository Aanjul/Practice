import React from 'react';
import logo from './logo.svg';
import './App.css';

const element = <p> Heading
        </p>
function App() {
  console.log(element)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Heading</h1>
        <a
          className="App-link"
          href="http://anjulsh.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dive In !!
        </a>
      </header>
    </div>
  );
}

export default App;
