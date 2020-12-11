import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom'; 

// import Admin from '../Admin/Admin';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';

class App extends Component {

  // goToFeelings = () => {
  //   this.props.history.push('/feelings');
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
            {/* <Link to="/admin"></Link>
            <Route>
              <Admin/>
            </Route> */}
            {/* <button onClick={this.goToFeelings}>Begin Feedback...</button> */}
            <Link to="/feelings">Begin Feedback...</Link>
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
            <Route path="/review">
              <Review/>
            </Route>
            <Route path="/submitted">
              <Submitted/>
            </Route>
        </Router>
      </div>
    );
  }
}

export default App;
