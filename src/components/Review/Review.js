import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Review.css';

import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Review extends Component {

  goToComments = () => {
    this.props.history.push("/comments");
}

  goToSubmitted = () =>{
    console.log('Adding feedback');

    axios.post('/feedback', {feelings: this.props.reduxState.feelingsReducer,
    understanding: this.props.reduxState.understandingReducer,
    support: this.props.reduxState.supportReducer,
    comments: this.props.reduxState.commentsReducer})
    .then((response) => {
      console.log('back from POST:', response) 
    }).catch((error) => {
      console.log(error);
      alert('problem with POST');
    }) // end axios
    
    this.props.dispatch({ type: 'RESET_FEEDBACK' })
    this.props.history.push("/submitted");
  }

  render() {
    return (
      <div className="center">
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
            <Button variant="outlined" color="primary" className="button"
              onClick={this.goToComments}>Previous...</Button>
            <Button variant="outlined" color="primary" className="button"
              onClick={() => this.goToSubmitted(this.props.review)}>Submit</Button>
          </CardActions>
        </Card>
        </StylesProvider>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ 
    reduxState 
});

export default connect(putStateOnProps)(withRouter(Review));
