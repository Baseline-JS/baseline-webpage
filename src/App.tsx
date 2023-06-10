import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src="logo-white.svg" className="app-logo" alt="logo" />
        <p>The framework for startups</p>
        <a
          className="app-link"
          href="https://baselinejs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Baseline
        </a>
      </header>
    </div>
  );
}

export default App;
