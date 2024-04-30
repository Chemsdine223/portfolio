import React from 'react'



const Card = ({ logo, label }) => {
  return (
    <div className='flex shadow-md flex-col justify-center items-center mx-2 max-sm:h-full h-48 w-1/2 px-7 rounded-2xl'>
      <div className="flex flex-col">
        <div><img className="h-12" src={ logo } color="red" alt="LinkedIn" /></div>
        <div>{label}</div>
      </div>
    </div>
  )
}

export default Card
