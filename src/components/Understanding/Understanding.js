import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {

    state = {
        understanding: ''
    }

  goToSupport = () =>{
    if (this.state.understanding === '') {
        alert('Please input a number before continuing!');
        return 'No understanding entered, eh?';
    } else {
      console.log('understanding', this.state.understanding);
      this.props.dispatch({ type: 'GET_FEEDBACK', payload: this.state.understanding })
      this.props.history.push("/support");
    }
  }

  handleChange = (event) => {
    console.log('event', event.target.value);
    this.setState({
        understanding: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <label htmlFor="understanding">Understanding?</label>
        <input type="number" min="1" max="5" id="understanding" 
                onChange={(event) => this.handleChange(event)} />
        <button onClick={this.goToSupport}>Next question...</button>
      </div>
    );
  }
}

export default connect()(withRouter(Understanding));
