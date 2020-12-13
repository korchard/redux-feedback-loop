import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'; 
import './Home.css';

// component displays on refresh, links to feelings component begin the survey
class Home extends Component {

  render() {
    return (
      <div className="linkArea">
        <Link to="/feelings" className="link">Begin the feedback survey...</Link>
      </div>
    );
  }
}

export default connect()(withRouter(Home));
