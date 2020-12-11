import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Feelings extends Component {

  goToUnderstanding = () =>{
    this.props.history.push("/understanding");
  }

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <label>Feelings?</label>
        <input type="number" min="1" max="5" />
        <button onClick={this.goToUnderstanding}>Next question...</button>
      </div>
    );
  }
}

export default withRouter(Feelings);
