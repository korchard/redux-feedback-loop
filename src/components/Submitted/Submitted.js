import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

class SubmitSuccess extends Component {

  goToBeginning = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h2>Hello from Submit Success!</h2>
        <button onClick={this.goToBeginning}>Retake the Feedback Survey!</button>
      </div>
    );
  }
}

export default withRouter(SubmitSuccess);
