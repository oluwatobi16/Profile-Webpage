// src/App.js
import React from 'react';
import './App.css';
import profilePic from './profilepic.jpg'; // Replace with your profile picture

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Oluwatobi Afolabi</h1>
        <p>Computer Science student at Durham University</p>
        <p>Dedicated and passionate programmer interested in various fields of computer science. </p>
          <p>Committed to providing innovative and efficient solutions to different problems. </p>
          <p>Specifically excelling in solving things by implementing and programming effective algorithms.</p>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        <p>Durham University; 2021-present </p>
        <p> Computer science with integrated masters (MEng) </p>
        <p>Modules include Algorithms and data structures (66%), Computer Systems (64%), Computational Thinking (60%)</p>
        <p>Drapers Academy; 2014-2021</p>
        <p>A-Levels: Mathematics, Further mathematics, Physics. Achieved A*AB, respectively.</p>
        <p>GCSE’s:4 ,9s ,3 8s, 7 and 6 and an A in business.</p>
        
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <p>School Tutor for My Tutor; January 2022-August 2022</p>
          <p>Organised extra lessons with GCSE students to help them prepare for their maths exams and balanced this with my own university classes and assignments.</p>
          <p>Temporary Sales Assistant at Sports Direct; June 2021-September 2021</p>
          <p>Assisted in preparing the store prior to opening in the mornings and helped to organise and place new stock.</p>
          <p>Stayed after closing hours to help clean the store and make it more presentable before the next day. </p>
          <p>Handled money and customer requests at the till while ensuring smoothness and efficiency at checkouts.</p>
          <p>Web Development</p>
          <p>Assisted in the frontend development of the website www.zeabtherapeutic.com.
          </p>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <ul>
        <h1>Programming languages</h1>
        <li>Proficient in: JavaScript, Python, HTML, CSS, C</li>
        <li>Adept in: MATLAB and SQL, C#, Unity, Java</li>
        <li>Python libraries: Scikit-learn, pandas, numpy, Matplotlib, Seaborn, OpenCV</li>
        <li>Proficient with Node.js and React </li>
        <li>Experience working on UNIX based systems.</li>
        <li>Experience using git and GitHub for development collaboration</li>

          
        </ul>
      </section>

      

      <footer>
        <p>Contact: oluwatobi.afolabi@yahoo.co.uk</p>
      </footer>
    </div>
  );
}

export default App;
