import React from 'react'

const Message = (props) => {
  return(
    <div className="message">
      <div className="info">
        <h1>{props.message.author}</h1>
        <h3> - {props.message.created_at.substring(11, 19)}</h3>
      </div>
      <p>{props.message.content}</p>
    </div>
  )
}

export default Message
