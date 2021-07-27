import React from 'react';
import './App.css'
import Data from './data.json'

import Header from './components/Header'
import Summary from './components/Summary'

const jp = Data;

const App = () => {
  return (
    <div className="book">
      <div className="page">
        <div className="subpage">
          <Header user={jp} />
          <hr />
          <Summary user={jp} />
        </div>
      </div>
    </div>
  )
}

export default App


{/* <div class="book">
      <div class="page">
        <div class="subpage">
          <h1>John Meyers</h1>
          <ul>
            <li>johnpmeyers20@yahoo.com</li>
            <li>347.696.5676</li>
            <li>https://www.linkedin.com/in/jpmeyers/</li>
          </ul>

          <hr>

          <h3><span class="change">Position Title</span> Summary</h3>
          <ul>
            <li>Front-end Software Engineer with 8+ years of experience driving process improvement in HR, Operations, and Sales.</li>
            <li>Created and Maintained an Excel VBA at the United Nations that dramatically reduced recruitment times during the
              refugee crisis.</li>
          </ul>
          
          <hr>

          <h3>Work Experience</h3>
          <div class="job-description">
            <div>
              <h3 class="job-title">Software Engineer Fellow</h3>
              <h3 class="job-date">February 2020 - May 2020</h3>
            </div>
            <h4 class="job-employer">General Assembly</h4>
            <ul class="job-task-list">
              <li class="job-individual-task">Completed 500+ hour immersive training in Full Stack Software Engineering</li>
              <li class="job-individual-task">Developed skills and fluency on 5 projects using HTML, CSS (applying the BEM method), JavaScript and React framework for
                a responsive frontend and API calls</li>
              <li class="job-individual-task">Built full-stack web applications using SQL, MongoDB, Express, Node, Ruby and Ruby on Rails for the backend</li>
            </ul>
          </div>


        </div>
      </div>
    </div> */}
