import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    console.log('payload', action.payload);
    if (action.type === 'GET_FEEDBACK') {
      return [...state, action.payload];
    // } else if (action.type === 'EDIT_FEEDBACK_0') {
    //     return state.filter(element => state !== element[0]);
    // } else if (action.type === 'EDIT_FEEDBACK_1') {
    //     return [...state].pop();
    // } else if (action.type === 'EDIT_FEEDBACK_2') {
    //     return state.filter(element => state != element[2]);
    // } else if (action.type === 'EDIT_FEEDBACK_3') {
    //     return state.filter(element => state != element[3]);
    } else if (action.type === 'EMPTY_FEEDBACK') {
        return state;
    } // end action type
    console.log('state', state);
    return state;
  }
  
  const reduxStore = createStore(
    combineReducers({
      feedbackReducer,
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();