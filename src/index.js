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