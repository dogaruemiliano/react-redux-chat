import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import '../public/stylesheet/index.scss'

import configureStore from './store/configureStore'

const initialState = {
  //cities: []
}


ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
