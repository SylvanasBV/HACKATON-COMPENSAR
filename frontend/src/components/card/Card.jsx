import React from 'react'

function Card(props) {
  return (
    <div className='bg-white rounded-xl overflow-hidden'>
        <img src={props.image} alt={props.title} />
        <div className='p-8'>
            <p>{props.date}</p>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
      
    </div>
  )
}

export default Card
