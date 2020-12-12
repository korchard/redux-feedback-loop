import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

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
        <h2>Review Your Feedback...</h2>
          <p>Feelings: {this.props.review[0]}</p>
          <p>Understanding: {this.props.review[1]}</p>
          <p>Support: {this.props.review[2]}</p>
          <p>Comments: {this.props.review[3]}</p>
          <Button variant="outlined" color="primary"
            onClick={this.goToComments}>Previous...</Button>
          <Button variant="outlined" color="primary"
            onClick={() => this.goToSubmitted(this.props.review)}>Submit</Button>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ 
  review: reduxState.feedbackReducer });
export default connect(putStateOnProps)(withRouter(Review));
