import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feelingsReducer = (state=[], action) => {
    if (action.type === 'GET_FEELINGS') {
        return action.payload
    } else if (action.type === 'RESET_FEEDBACK') {
        return state = [];
    }
    return state;
}

const understandingReducer = (state=[], action) => {
  if (action.type === 'GET_UNDERSTANDING') {
      return action.payload
  } else if (action.type === 'RESET_FEEDBACK') {
      return state = [];
  }
  return state;
}

const supportReducer = (state=[], action) => {
  if (action.type === 'GET_SUPPORT') {
      return action.payload
  } else if (action.type === 'RESET_FEEDBACK') {
      return state = [];
  }
  return state;
}

const commentsReducer = (state=[], action) => {
  if (action.type === 'GET_COMMENTS') {
      return action.payload
  } else if (action.type === 'RESET_FEEDBACK') {
      return state = [];
  }
  return state;
}
  
  const reduxStore = createStore(
    combineReducers({
      feelingsReducer,
      understandingReducer,
      supportReducer,
      commentsReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();