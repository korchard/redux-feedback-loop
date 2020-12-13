import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Comments.css';

// import material UI
import { StylesProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Comments extends Component {

  // local state to store comments rating
    state = {
        comments: ''
    }

    goToSupport = () => {
      // route back to previous component to re-input a new rating
        this.props.history.push("/support");
    } // end goToSupport

  goToReview = () =>{
    // function to ensure something is input in the comments if user doesn't add any
    if (this.state.comments === '' || this.state.comments < 1 || this.state.comments > 5) {
       this.props.dispatch({ type: 'GET_COMMENTS', payload: 'No comments provided.'})
       console.log('payload:', this.state.comments);
    } else {
        // dispatches the rating to the reduxStore 
        this.props.dispatch({ type: 'GET_COMMENTS', payload: this.state.comments })
        console.log('payload:', this.state.comments);
    } // end conditional
    // routes the user to the next component
    this.props.history.push("/review");
  } // end goToReview

  handleChange = (event) => {
    // sets the local state to the value input in the text field
    console.log('event', event.target.value);
    this.setState({
        comments: event.target.value
    }) // end setState
  } // handleChange

  render() {
    return (
      <div className="center">
        <StylesProvider injectFirst>
          <Card>
            <CardContent className="cardContent">
              <h2>Any comments you want to add?</h2>
              <Typography fontFamily="Monospace">
              <TextField 
                  id="standard" 
                  label="Comments?"
                  type="text" 
                  onChange={(event) => this.handleChange(event)} />
              </Typography>
            </CardContent>
            <CardActions className="button">
              <Button 
                  variant="outlined" 
                  color="primary" 
                  className="button"
                  onClick={this.goToSupport}>
                    Previous
              </Button>
              <Button 
                  variant="outlined" 
                  color="primary" 
                  className="button"
                  onClick={this.goToReview}>
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
export default connect()(withRouter(Comments));