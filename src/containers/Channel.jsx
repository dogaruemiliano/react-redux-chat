import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectChannel } from '../actions'

class Channel extends Component {
  handleClick = () => {
    this.props.selectChannel(this.props.channelId)
  }

  render() {
    let classes = "channel"
    if (this.props.selectedChannelId === this.props.channelId) {
      classes += " selected"
    } else {
      classes += " clickable"
    }
    return(
      <div
        className={classes}
        onClick={this.handleClick}
      >
        #{this.props.channelId}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectChannel }, dispatch)
}

export default connect(null, mapDispatchToProps)(Channel)
