import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { createBrowserHistory as history } from 'history'

import App from './components/App';
import '../public/stylesheet/index.scss'

import configureStore from './store/configureStore'

const initialState = {
  userName: `anonymous${Math.floor(Math.random() * 1000000)}`, //prompt("What's your username?") ||
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
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/team1" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
