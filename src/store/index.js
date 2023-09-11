/* eslint-disable no-undef */
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducer
import { appReducer } from '../redux/app.reducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = combineReducers({
  app: appReducer
})

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));