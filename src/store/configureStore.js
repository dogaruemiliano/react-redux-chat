import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'

const configureStore = (preloadedState = null) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    // compose(
    applyMiddleware(reduxPromise, createLogger())
      // DevTools.instrument()
    // )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
