import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Feelings extends Component {

    state = {
        feelings: ''
    }

  goToUnderstanding = () =>{
    console.log('feelings', this.state.feelings);
    this.props.dispatch({ type: 'GET_FEEDBACK', payload: this.state.feelings })
    this.props.history.push("/understanding");
  }

  handleChange = (event) => {
    console.log('event', event.target.value);
    this.setState({
        feelings: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <label htmlFor="feelings">Feelings?</label>
        <input type="number" min="1" max="5" id="feelings" onChange={(event) => this.handleChange(event)} required/>
        <button onClick={this.goToUnderstanding}>Next question...</button>
      </div>
    );
  }
}

export default connect()(withRouter(Feelings));
