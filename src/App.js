import React from 'react';
import './App.css'
import Data from './data.json'

// Dependencies
import { saveAs } from 'file-saver';
import { Packer } from 'docx';

import Header from './components/Header'
import Summary from './components/Summary'
import WorkExperience from './components/WorkExperience'

const jp = Data;

const App = () => {
  const print = () => {
    window.print()
  }

  return (
    <div className="book">
      <div className="page">
        <div className="subpage">
          <Header user={jp} />
          <Summary user={jp} />
          <WorkExperience user={jp} />
        </div>
      </div>
      <button onClick={print}>Create Docx</button>
    </div>
  )
}

export default App
