import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Review.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Review extends Component {

  // goToComments = () => {
  //     this.props.history.push("/comments");
  //     this.props.dispatch({ type: 'EDIT_FEEDBACK_3' })
  // }

  goToSubmitted = (review) =>{
    console.log('submitted');
    this.props.submitFeedback(review);
    this.props.dispatch({ type: 'EMPTY_FEEDBACK' })
    this.props.history.push("/submitted");
  }

  render() {
    return (
      <div>
        <Card className="card">
          <CardContent className="cardContent">
          <h2>Review Your Feedback...</h2>
            <p>Feelings: {this.props.review[0]}</p>
            <p>Understanding: {this.props.review[1]}</p>
            <p>Support: {this.props.review[2]}</p>
            <p>Comments: {this.props.review[3]}</p>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="primary" className="button"
              onClick={this.goToComments}>Previous...</Button>
            <Button variant="outlined" color="primary" className="button"
              onClick={() => this.goToSubmitted(this.props.review)}>Submit</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ 
  review: reduxState.feedbackReducer });
export default connect(putStateOnProps)(withRouter(Review));
