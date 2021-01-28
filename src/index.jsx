import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import '../public/stylesheet/index.scss'

import configureStore from './store/configureStore'

const initialState = {
  userName: prompt("What's your username?") || `anonymous${Math.floor(Math.random() * 1000000)}`,
  selectedChannelId: 'team1',
  channels: ['team1', 'team2', 'forest'],
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ]
}


ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
