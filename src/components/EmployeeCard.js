import React from 'react'
import { Link } from 'gatsby'

const EmployeeCard = (props) => {
  const {firstName, middleName, lastName, title} = props.employee;

  return(
    <Link to={props.slug} className="employee">
        <div className="info">
            <div className="name">{firstName} {middleName ? `${middleName} ` :  ""}{lastName}</div>
            <div className="title">{title}</div>
        </div>
    </Link>
  )
}

export default EmployeeCard
