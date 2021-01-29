import React from 'react';
import MessageList from '../containers/MessageList'
import ChannelList from '../containers/ChannelList'

const App = (props) => {
  return (
    <div className="app">
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
}

export default App;
