import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {

  goToSupport = () =>{
    this.props.history.push("/support");
  }

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <label htmlFor="understanding">Understanding?</label>
        <input type="number" min="1" max="5" id="understanding" required/>
        <button onClick={this.goToSupport}>Next question...</button>
      </div>
    );
  }
}

export default withRouter(Understanding);
