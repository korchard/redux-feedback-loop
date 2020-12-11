import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom'; 

// import Admin from '../Admin/Admin';
import Feelings from '../Feelings/Feelings';

class App extends Component {

  goToFeelings = () => {
    this.props.history.push('/feelings');
  }

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
            <button onClick={this.goToFeelings}>Begin Feedback...</button>
            <Link to="/feelings">Begin Feedback...</Link>
            <Route path="/feelings">
              <Feelings/>
            </Route>
        </Router>
      </div>
    );
  }
}

export default App;
