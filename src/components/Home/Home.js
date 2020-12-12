import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'; 

class Home extends Component {

  render() {
    return (
      <div>
        <h2>HOME!</h2>
        <Link to="/feelings">Begin the feedback survey...</Link>
      </div>
    );
  }
}

export default connect()(withRouter(Home));
