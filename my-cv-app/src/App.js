// src/App.js
import React from 'react';
import './App.css';
import profilePic from './profilepic.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Oluwatobi Afolabi</h1>
        <p>Computer Science student at Durham University</p>
        <p>
          Dedicated and passionate programmer interested in various fields of computer science.
        </p>
        <p>
          Committed to providing innovative and efficient solutions to different problems.
        </p>
        <p>Specifically excelling in solving problems by implementing and programming effective algorithms.</p>
      </header>

      <section className="cv-section">
        <div className="banner">
          <h2>Education</h2>
        </div>
        <p>Durham University; 2021-present</p>
        <p>Computer Science with integrated masters (MEng)</p>
        <p>Modules include Algorithms and Data Structures (66%), Computer Systems (64%), Computational Thinking (60%)</p>
        <p>Drapers Academy; 2014-2021</p>
        <p>A-Levels: Mathematics, Further Mathematics, Physics. Achieved A*AB, respectively.</p>
        <p>GCSEs: 4 9s, 3 8s, 7 and 6, and an A in Business.</p>
      </section>

      <section className="cv-section">
        <div className="banner">
          <h2>Experience</h2>
        </div>
        <p>My Tutor; January 2022-August 2022</p>
        <p>
          Organized extra lessons with GCSE students to help them prepare for their maths exams,
          balancing this with my own university classes and assignments.
        </p>
        <p>Sports Direct; June 2021-September 2021</p>
        <p>
          Assisted in preparing the store prior to opening, organized and placed new stock, and
          helped clean the store after closing.
        </p>
        <p>
          Handled money and customer requests at the till while ensuring smooth and efficient checkouts.
        </p>
        <p>Web Development</p>
        <p>
          Assisted in the frontend development of the website{' '}
          <a href="https://www.zeabtherapeutic.com" target="_blank" rel="noopener noreferrer">
            www.zeabtherapeutic.com
          </a>
          .
        </p>
      </section>

      <section className="cv-section skills">
        <div className="banner">
          <h2>Skills</h2>
        </div>
        <ul>
          <h3>Programming Languages</h3>
          <li>Proficient in: JavaScript, Python, HTML, CSS, C</li>
          <li>Adept in: MATLAB and SQL, C#, Unity, Java</li>
          <li>Python libraries: Scikit-learn, pandas, numpy, Matplotlib, Seaborn, OpenCV</li>
          <li>Proficient with Node.js and React</li>
          <li>Experience working on UNIX-based systems.</li>
          <li>Experience using git and GitHub for development collaboration</li>
        </ul>
      </section>

      <footer className="footer">
        <div className="banner">
          <h2>Contact</h2>
        </div>
        <p>Email: oluwatobi.afolabi@yahoo.co.uk</p>
      </footer>
    </div>
  );
}

export default App;
