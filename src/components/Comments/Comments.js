import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Comments extends Component {

    state = {
        comments: ''
    }

    // goToUnderstanding = () => {
    //     this.props.history.push("/support");
    //     this.props.dispatch({ type: 'EDIT_FEEDBACK_2' })
    // }

  goToReview = () =>{
    if (this.state.comments === '') {
       this.props.dispatch({ type: 'GET_FEEDBACK', payload: 'No comments provided.'})

    } else {
        console.log('comments', this.state.comments);
        this.props.dispatch({ type: 'GET_FEEDBACK', payload: this.state.comments })
    }
    this.props.history.push("/review");
  }

  handleChange = (event) => {
    console.log('event', event.target.value);
    this.setState({
        comments: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Any comments you want to add?</h2>
        <TextField id="standard-basic" label="Comments?" 
            type="text" 
            onChange={(event) => this.handleChange(event)} />
        <Button variant="outlined" color="primary"
            onClick={this.goToReview}>Next...</Button>
        <Button variant="outlined" color="primary"
            onClick={this.goToSupport}>Previous...</Button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));