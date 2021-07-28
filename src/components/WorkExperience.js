import React from 'react'

const WorkExperience = (props) => {
  const { workExperience } = props.user;
  const workExperienceItems = workExperience.map(item => 
    <div className="work-experience-container">
      <div className="job-info-header">
        <h4 className="jobTitle">{item.jobTitle}</h4>
        <h4 className="jobDates">{item.jobDates}</h4>
      </div>
      <h4 className="company">{item.company}</h4>
      <ul className="job-task-list list">
        {item.tasks.map(taskItem => 
          <li className="job-task">
            {taskItem}
          </li>
        )}
      </ul>
    </div>
  )
  
  return (
    <>
      <h3 className="section-title">Work Experience</h3>
      {workExperienceItems}
    </>
  )
}

export default WorkExperience