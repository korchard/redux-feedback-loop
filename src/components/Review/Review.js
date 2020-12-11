import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <div>
        <h2>Hello from Review!</h2>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(withRouter(Review));
