import React from 'react';
import './App.css'
import Data from './data.json'

import Header from './components/Header'
import Summary from './components/Summary'
import WorkExperience from './components/WorkExperience'

const jp = Data;

const App = () => {
  return (
    <div className="book">
      <div className="page">
        <div className="subpage">
          <Header user={jp} />
          <Summary user={jp} />
          <WorkExperience user={jp} />
        </div>
      </div>
    </div>
  )
}

export default App
