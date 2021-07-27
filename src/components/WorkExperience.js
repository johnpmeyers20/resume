import React from 'react'

const WorkExperience = (props) => {
  const { workExperience } = props.user;
  const workExperienceItems = workExperience.map(item => 
    <>
      <div>
        <h4 className="jobTitle">{item.jobTitle}</h4>
        <h4 className="jobDates">{item.jobDates}</h4>
      </div>
      <h4 className="company">{item.company}</h4>
      <ul className="job-task-list">
        {item.tasks.map(taskItem => 
          <li className="job-task">
            {taskItem}
          </li>
        )}
      </ul>
    </>
  )
  
  return (
    <>
      <h3>Work Experience</h3>
      {workExperienceItems}
    </>
  )
}

export default WorkExperience