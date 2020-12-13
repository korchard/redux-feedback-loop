import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Understanding.css';

// material UI imports
import { StylesProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Understanding extends Component {

  // local state to store feelings rating
    state = {
        understanding: ''
    }

  goToFeelings = () => {
    // route back to previous component to re-input a new rating
      this.props.history.push("/feelings");
  } // end goToFeelings

  goToSupport = () =>{
    // function to ensure input is required and within parameters
    if (this.state.understanding === '' || this.state.understanding < 1 || this.state.understanding > 5) {
        alert('Please input a number between 1 - 5 before continuing!');
        return 'No understanding entered, eh?';
    } else {
      // dispatches the rating to the reduxStore 
      this.props.dispatch({ type: 'GET_UNDERSTANDING', payload: this.state.understanding })
      // routes the user to the next component
      this.props.history.push("/support");
    } // end conditional 
  } // end goToSupport

  handleChange = (event) => {
    // sets the local state to the value input in the text field
    console.log('event', event.target.value);
    this.setState({
        understanding: event.target.value
    }) // end setState
  } // end handleChange

  render() {
    return (
      <div className="center">
          <StylesProvider injectFirst>
            <Card>
              <CardContent className="cardContent">
                <h2>How well are you understanding the content?</h2>
                <Typography fontFamily="Monospace">
                <TextField 
                    id="standard" 
                    label="Understanding?"
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
                    onClick={this.goToFeelings}>
                      Previous
                </Button>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    className="button"
                    onClick={this.goToSupport}>
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
export default connect()(withRouter(Understanding));
