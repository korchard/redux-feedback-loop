import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import './Submitted.css';

// import material UI
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class SubmitSuccess extends Component {

  goToBeginning = () => {
    // routes the user to the next component
    this.props.history.push("/");
  } // end goToBeginning

  render() {
    return (
      <div className="center">
        <StylesProvider injectFirst>
          <Card>
            <CardContent className="cardContent">
              <h2>Thank you for your Feedback!</h2>
            </CardContent>
            <CardActions className="button">
              <Button 
                  variant="outlined" 
                  color="primary" 
                  className="button"
                  onClick={this.goToBeginning}>
                    Retake the Feedback Survey!
              </Button>
            </CardActions>
          </Card>
        </StylesProvider>
      </div>
    );
  }
}

// withRouter sends user to next component
export default withRouter(SubmitSuccess);
