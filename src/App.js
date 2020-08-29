import React from 'react';
// import logo from './logo.svg';

import './App.css';
import './components/assets/css/bootstrap.min.css';
import Education from './components/courses/Education';
import Header from './components/header/Header';




function App() {
  return (
    <div className="App">
        <div className="container">
        <Header></Header>
          <Education></Education>
          
        </div>
    </div>
  );
}

export default App;
