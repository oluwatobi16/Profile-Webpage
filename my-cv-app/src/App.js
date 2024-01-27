// src/App.js
import React from 'react';
import './App.css';
import profilePic from './profilepic.jpg'; // Replace with your profile picture

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        <p>Your Education Details</p>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <p>Your Work Experience</p>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          {/* Add more skills */}
        </ul>
      </section>

      {/* Add more sections as needed */}

      <footer>
        <p>Contact: oluwatobi.afolabi@yahoo.co.uk</p>
      </footer>
    </div>
  );
}

export default App;
