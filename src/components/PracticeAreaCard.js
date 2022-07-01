import React from 'react'

const PracticeAreaCard = (props) => {
  return (
    <div className="practice-area">
      <h2 className="title">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default PracticeAreaCard
