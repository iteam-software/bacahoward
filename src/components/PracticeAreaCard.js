import React from 'react'

const PracticeAreaCard = ({title, content}) => {
  return (
    <div className="practice-area">
      <h2 className="title">{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default PracticeAreaCard
