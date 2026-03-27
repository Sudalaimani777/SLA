import React, { useState } from 'react'

const Message = () => {
  const [message, setMessage] = useState('Welcome')

  const handleClick = () => {
    setMessage('You clicked the button')
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Message
