import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Feelings.css';

// material UI imports
import { StylesProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Feelings extends Component {

  // local state to store feelings rating
    state = {
        feelings: ''
    }

  goToUnderstanding = () =>{
    // function to ensure input is required and within parameters
    if (this.state.feelings === '' || this.state.feelings < 1 || this.state.feelings > 5) {
        alert('Please input a number between 1 - 5 before continuing!');
        return 'No feelings entered, eh?';
    } else {
        // dispatches the rating to the reduxStore 
        this.props.dispatch({ type: 'GET_FEELINGS', payload: this.state.feelings })
        // routes the user to the next component
        this.props.history.push("/understanding");
    } // end conditional
  } // end goToUnderstanding

  handleChange = (event) => {
    // sets the local state to the value input in the text field
    console.log('event', event.target.value);
    this.setState({
        feelings: event.target.value
    }) // end setState
  } // end handleChange

  render() {
    return (
      <div className="center">
        <StylesProvider injectFirst>
          <Card>
             <CardContent className="cardContent">
                <h2>How are you feeling today?</h2>
                <Typography fontFamily="Monospace">
                <TextField 
                    fontFamily="Monospace"
                    id="standard" 
                    label="Feelings?"
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
export default connect()(withRouter(Feelings));
