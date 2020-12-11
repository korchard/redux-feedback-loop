import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Support extends Component {

  goToComments = () =>{
    this.props.history.push("/comments");
  }

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label htmlFor="support">Support?</label>
        <input type="number" min="1" max="5" id="support" required/>
        <button onClick={this.goToComments}>Next question...</button>
      </div>
    );
  }
}

export default withRouter(Support);