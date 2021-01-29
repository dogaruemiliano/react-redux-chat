import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Channel from './Channel'
import { fetchMessages } from '../actions'

class ChannelList extends Component {
  componentDidUpdate(prevProps) {
    if(this.props.channelFromParams !== prevProps.channelFromParams){
      this.props.fetchMessages(this.props.channelFromParams)
    }
  }

  render() {
    return (
      <div className="col-sm-4 p-0">
        <ul className="channel-list">
          {this.props.channels.map(channel => {
            return(
              <Channel
                channelId={channel}
                channelFromParams={this.props.channelFromParams}
                key={channel}
                />
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("State in mapStateToProps for ChannelList", state)
  return {
    channels: state.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
