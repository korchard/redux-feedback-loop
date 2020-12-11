import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Comments extends Component {

    state = {
        comments: ''
    }

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
        <label htmlFor="comments">Comments?</label>
        <input type="text" id="comments" onChange={(event) => this.handleChange(event)} />
        <button onClick={this.goToReview}>Ready for Review...</button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));