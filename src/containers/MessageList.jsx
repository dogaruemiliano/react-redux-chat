import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Message from '../components/Message'
import MessageForm from './MessageForm'
import { fetchMessages } from '../actions'

class MessageList extends Component {
  componentDidMount() {
    console.log("ComponentDidMount", this.props)
    this.props.fetchMessages(this.props.channelFromParams)
    this.intervalId = setInterval(() => this.props.fetchMessages(this.props.channelFromParams), 20000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return(
      <div className="col-sm-8 p-0">
        <div className="channel-container">
          <div className="channel-info">
            <h1> Channel #{this.props.channelFromParams}</h1>
          </div>
          <div className="message-list">
            {this.props.messages.map(message => {
              return(
                <Message message={message} key={message.created_at}/>
              )})
            }
          </div>
          <div>
            <MessageForm channelFromParams={this.props.channelFromParams}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
