import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Review.css';

// import material UI
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Review extends Component {

  goToComments = () => {
    // route back to previous component to re-input a new rating
    this.props.history.push("/comments");
} // end goToComments

  // POST ROUTE
  goToSubmitted = () =>{
    console.log('Adding feedback');

    // post route pulls info from each reducer and sends it to the database
    axios.post('/feedback', 
        {feelings: this.props.reduxState.feelingsReducer,
        understanding: this.props.reduxState.understandingReducer,
        support: this.props.reduxState.supportReducer,
        comments: this.props.reduxState.commentsReducer})
    .then((response) => {
      console.log('Added the feedback...', response) 
    }).catch((error)=> {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })// end axios
    
    // this dispatch resets the feedback reducers to empty
    this.props.dispatch({ type: 'RESET_FEEDBACK' })
    // routes the user to the next component
    this.props.history.push("/submitted");
  } // end POST ROUTE

  render() {
    return (
      <section className="center">
        <StylesProvider injectFirst>
          <Card>
            <CardContent className="cardContent">
              <h2>Review Your Feedback...</h2>
                <p>Feelings: {this.props.reduxState.feelingsReducer}</p>
                <p>Understanding: {this.props.reduxState.understandingReducer}</p>
                <p>Support: {this.props.reduxState.supportReducer}</p>
                <p>Comments: {this.props.reduxState.commentsReducer}</p>
            </CardContent>
            <CardActions className="button">
              <Button 
                  variant="outlined" 
                  color="primary" 
                  className="button"
                  onClick={this.goToComments}>
                    Previous
              </Button>
              <Button 
                  variant="outlined" 
                  color="primary" 
                  className="button"
                  onClick={() => this.goToSubmitted(this.props.review)}>
                    Submit
              </Button>
            </CardActions>
          </Card>
        </StylesProvider>
      </section>
    );
  }
}

// pulls all of the information from the reduxStore to append to the DOM here
const putStateOnProps = (reduxState) => ({ 
    reduxState 
}); // end putStateOnProps

// connect is needed to dispatch to the reduxStore, withRouter sends user to next component
export default connect(putStateOnProps)(withRouter(Review));
