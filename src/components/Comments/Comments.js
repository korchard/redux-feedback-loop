import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Comments extends Component {

  goToReview = () =>{
    this.props.history.push("/review");
  }

  render() {
    return (
      <div>
        <h2>Any comments you want to add?</h2>
        <label htmlFor="comments">Comments?</label>
        <input type="text" id="comments"/>
        <button onClick={this.goToReview}>Ready for Review...</button>
      </div>
    );
  }
}

export default withRouter(Comments);