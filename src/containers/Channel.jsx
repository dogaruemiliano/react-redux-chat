import React from 'react'
import { Link } from 'react-router-dom'

 const Channel = (props) => {
  let classes = "channel"

  if (props.channelFromParams === props.channelId) {
    classes += " selected"
  } else {
    classes += " clickable"
  }

  return(
    <li>
      <Link to={`/${props.channelId}`} className={classes} >
        #{props.channelId}
      </Link>
    </li>
  )
}

export default Channel
