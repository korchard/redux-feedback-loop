import React, { Component } from 'react';
import './App.css';

// need to import to connect all the different components
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

  render() {
    return (
      <div className="App">
        <Router>
            <header className="App-header">
              <h1 className="App-title">Feedback Survey!</h1>
            </header>
            <br/>
          <Route exact path="/" component={Home}/>
          <Route path="/admin">
              <Admin />
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
              <Review />
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
