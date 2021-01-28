import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Channel from './Channel'
import { fetchMessages } from '../actions'

class ChannelList extends Component {
  componentDidUpdate() {
    this.props.fetchMessages(this.props.selectedChannelId)
  }

  render() {
    return (
      <div className="col-sm-4 p-0">
        <div className="channel-list">
          {this.props.channels.map(channel => {
            return(
              <Channel
                channelId={channel}
                selectedChannelId={this.props.selectedChannelId}
                key={channel}
                />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("State in mapStateToProps for ChannelList", state)
  return {
    channels: state.channels,
    selectedChannelId: state.selectedChannelId
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
