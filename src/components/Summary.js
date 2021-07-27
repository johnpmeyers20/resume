import React from 'react'

const Summary = (props) => {
  const summaryListItems = props.user.summary.map(item => 
    <li className = "summary-list-item" key = { props.user.summary.indexOf(item) } > { item }</li>)
  return (
    <>
      <h3>{props.user.jobTitle} Summary</h3>
      <ul className="summary-list">
        {summaryListItems}
      </ul>
    </>
  )
}

export default Summary