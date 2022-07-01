import React from 'react'
import Img from 'gatsby-image'

const Employee = (props) => {

  const {
    frontmatter:{ 
      title, 
      firstName,
      middleName,
      lastName,
      email, 
      credentials,
      affiliations,
      phone: phoneNumberString
    },
    html
  } = props.employee 

  // --- Function to format the phone number --- //
  var phone = phoneNumberString
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    phone = `(${match[1]}) ${match[2]} - ${match[3]}`
  }
  const image = props.employee?.frontmatter?.photo?.childImageSharp?.fluid

  return (
    <div className="container">
      <h1>{firstName} {middleName ? `${middleName} ` :  ""}{lastName}</h1>
      <section className="card">
        {
          image &&
          <div className="portrait">
            <span>
              <Img className="image" fluid={image} />
            </span>
          </div>
        }
        <div className="info">
          <h2 className="title">{title}</h2>
          <div className="contact">
            <a href={`mailto:${email}`} className="email">{email}</a>
          </div>
          <div className="contact">
            <span>{phone}</span>
          </div>
          <div className="bio" dangerouslySetInnerHTML={{ __html: html }}></div>

          {
            credentials &&
            <div className="credentials">
              <strong>Academic and Professional Credentials</strong>
              <ul>
              {credentials.map(item => {
                return (
                  <li>{item.credential}</li>
                )
              })}
              </ul>
            </div>
          }

          {
            affiliations &&
            <div className="affiliations">
              <strong>Professional Affiliations</strong>
              <ul>
              {affiliations.map(item => {
                return (
                  <li>{item.affiliation}</li>
                )
              })}
              </ul>
            </div>
          }
          
        </div>
      </section>
    </div>
  )
}

export default Employee
