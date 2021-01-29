import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { postMessage } from '../actions'

class MessageForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      author: this.props.userName,
      content: event.target.childNodes[0].value
    }
    event.target.childNodes[0].value = ""
    this.props.postMessage(this.props.channelFromParams, data)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input type="text" />
        <button type="submit">Send</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postMessage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
