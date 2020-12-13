import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Support.css';

// material UI imports
import { StylesProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Support extends Component {

  // local state to store support rating
    state = {
        support: ''
    }

    goToUnderstanding = () => {
      // route back to previous component to re-input a new rating
        this.props.history.push("/understanding");
    } // end goToUnderstanding

  goToComments = () =>{
    // function to ensure input is required and within parameters
    if (this.state.support === '' || this.state.support < 1 || this.state.support > 5) {
        alert('Please input a number between 1 - 5 before continuing!');
        return 'No support entered, eh?';
    } else {
        // dispatches the rating to the reduxStore 
        this.props.dispatch({ type: 'GET_SUPPORT', payload: this.state.support });
        console.log('payload:', this.state.support);
        // routes the user to the next component
        this.props.history.push("/comments");
    } // end conditional
  } // end goToComments

  handleChange = (event) => {
    // sets the local state to the value input in the text field
    console.log('event', event.target.value);
    this.setState({
        support: event.target.value
    }) // end setState
  } // end handleChange

  render() {
    return (
      <div className="center">
        <StylesProvider injectFirst>
          <Card>
            <CardContent className="cardContent">
              <h2>How well are you being supported?</h2>
              <Typography fontFamily="Monospace">
              <TextField 
                  id="standard" 
                  label="Support?" 
                  type="number" 
                  min="1" max="5"
                  onChange={(event) => this.handleChange(event)} />
              </Typography>
            </CardContent>
            <CardActions className="button">
              <Button 
                  variant="outlined" 
                  color="primary" 
                  className="button"
                  onClick={this.goToUnderstanding}>
                    Previous
              </Button>
              <Button 
                  variant="outlined" 
                  color="primary" 
                  className="button"
                  onClick={this.goToComments}>
                    Next
              </Button>
            </CardActions>
          </Card>
        </StylesProvider>
      </div>
    );
  }
}

// connect is needed to dispatch to the reduxStore, withRouter sends user to next component
export default connect()(withRouter(Support));