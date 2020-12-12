import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import './Submitted.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class SubmitSuccess extends Component {

  goToBeginning = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <h2>Thank you for your Feedback!</h2>
          </CardContent>
          <CardActions>
          <Button variant="outlined" color="primary"
              onClick={this.goToBeginning}>Retake the Feedback Survey!</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withRouter(SubmitSuccess);
