import React, { Component } from 'react';
import './App.css';
import Experience from './Experience.js';
import Awards from './Awards.js';

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <div>
            <img src="./img/circle-photo.jpg" alt="Profile Photo" />
          </div>
        </center>
        <h1>
          <center>LAURA COLTEN</center>
        </h1>
        <h2>
          <center>4707 WESTSLOPE CIRCLE, AUSTIN &diams; (512) 693-8986 &diams; lauracolten5@gmail.com</center>
          <center>
            <a href="https://www.linkedin.com/in/lauracolten/">LinkedIn</a> &diams; <a href="https://github.com/LauraColten">GitHub</a>
          </center>
        </h2>
        <Experience/>
        <h3>
          <center>EDUCATION</center>
        </h3>
        <center>Austin Coding Academy - Austin, TX - Web Development - Current Student</center>
        <center>Austin Community College - Austin, TX - Computer Science - Current Student</center>
        <center>Lamar University - Beaumont, TX — Bachelors in Science in Interdisciplinary Studies - 2011, Summa Cum Laude</center>
        <p></p>
        <h3>
          <center>TECHNICAL SKILLS</center>
        </h3>
        <center>Python, C++, Visual Studio, Html, CSS, GitHub, JavaScript, React, CLion</center>
        <Awards/>
      </div>
    );
  }
}

export default App;
