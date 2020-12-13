import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feelingsReducer = (state=[], action) => {
    if (action.type === 'GET_FEELINGS') {
      // payload is the number input - overrides when previous button is pressed
        return action.payload 
    } else if (action.type === 'RESET_FEEDBACK') {
        return state = []; // resets when the feedback is submitted
    }
    return state;
} // end feelingsReducer

const understandingReducer = (state=[], action) => {
  // payload is the number input - overrides when previous button is pressed
  if (action.type === 'GET_UNDERSTANDING') {
      return action.payload
  } else if (action.type === 'RESET_FEEDBACK') {
      return state = []; // resets when the feedback is submitted
  }
  return state;
} // end understandingReducer

const supportReducer = (state=[], action) => {
  // payload is the number input - overrides when previous button is pressed
  if (action.type === 'GET_SUPPORT') {
      return action.payload
  } else if (action.type === 'RESET_FEEDBACK') {
      return state = []; // resets when the feedback is submitted
  }
  return state;
} // end supportReducer

const commentsReducer = (state=[], action) => {
  // payload is either the comment input or 'No comment provided' if left empty by surveyor
  // - overrides when previous button is pressed
  if (action.type === 'GET_COMMENTS') {
      return action.payload
  } else if (action.type === 'RESET_FEEDBACK') {
      return state = []; // resets when the feedback is submitted
  }
  return state;
} // end commentsReducer
  
// stores all of the above information and loops through each reducer each time reduxStore is accessed
  const reduxStore = createStore(
    combineReducers({
      feelingsReducer,
      understandingReducer,
      supportReducer,
      commentsReducer
    }),
    applyMiddleware(logger)
  ); // end reduxStore

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();