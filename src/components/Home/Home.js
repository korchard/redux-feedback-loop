import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'; 
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div>
            <Link to="/feelings" className="link">Begin the feedback survey...</Link>
      </div>
    );
  }
}

export default connect()(withRouter(Home));
