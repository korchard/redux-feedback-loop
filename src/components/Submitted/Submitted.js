import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

import Button from '@material-ui/core/Button';

class SubmitSuccess extends Component {

  goToBeginning = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h2>Hello from Submit Success!</h2>
        <Button variant="outlined" color="primary"
            onClick={this.goToBeginning}>Retake the Feedback Survey!</Button>
      </div>
    );
  }
}

export default withRouter(SubmitSuccess);
