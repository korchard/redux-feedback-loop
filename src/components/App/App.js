import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom'; 

import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';

class App extends Component {

  componentDidMount() {
    this.getFeedback(); 
  } // end componentDidMount 

  getFeedback = () => {
    console.log('Getting feedback...');

    axios.get('/feedback')
    .then((response) => {
      console.log('back from GET:', response.data) 
    }).catch((error) => {
      console.log(error);
      alert('problem with GET');
    }) // end axios
  } // end submitFeedback

  submitFeedback = (feedback) => {
    console.log(`Adding feedback`, feedback);

    axios.post('/feedback', feedback)
    .then((response) => {
      console.log('back from POST:', response.data) 
    }).catch((error) => {
      console.log(error);
      alert('problem with POST');
    }) // end axios
  } // end submitFeedback

  // DELETE ROUTE
  deleteFeedback = (id) => { 
    console.log('in deleteFeedback');

    axios.delete(`/feedback/${id}`)
    .then((response) => {
      console.log('Removed the feedback...', response);
      this.getFeedback(); 
    })
    .catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  } // end DELETE ROUTE

  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
            <Route exact path="/" component={Home}/>
            <Route path="/admin">
              <Admin getFeedback={this.getFeedback} />
            </Route>
            <Route path="/feelings">
              <Feelings/>
            </Route>
            <Route path="/understanding">
              <Understanding/>
            </Route>
            <Route path="/support">
              <Support/>
            </Route>
            <Route path="/comments">
              <Comments/>
            </Route>
            <Route path="/review" >
              <Review submitFeedback={this.submitFeedback}/>
            </Route>
            <Route path="/submitted" >
              <Submitted/>
            </Route>
        </Router>
      </div>
    );
  }
}

export default App;
