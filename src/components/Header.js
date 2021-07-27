import React from 'react'

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="userName">{props.user.userName}</h1>
      <ul className="contact-info-list">
        <li className="contact-info-item">{props.user.contactInfo.emailAddress}</li>
        <li className="contact-info-item">{props.user.contactInfo.phoneNumber}</li>
        <li className="contact-info-item">{props.user.contactInfo.linkedIn}</li>
      </ul>
      <hr />
    </div>
  )
}

export default Header