import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Support extends Component {

    state = {
        support: ''
    }

  goToComments = () =>{
    console.log('support', this.state.support);
    this.props.dispatch({ type: 'GET_FEEDBACK', payload: this.state.support })
    this.props.history.push("/comments");
  }

  handleChange = (event) => {
    console.log('event', event.target.value);
    this.setState({
        support: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label htmlFor="support">Support?</label>
        <input type="number" min="1" max="5" id="support" onChange={(event) => this.handleChange(event)} required/>
        <button onClick={this.goToComments}>Next question...</button>
      </div>
    );
  }
}

export default connect()(withRouter(Support));