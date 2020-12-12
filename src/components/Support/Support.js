import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Support extends Component {

    state = {
        support: ''
    }

    // goToUnderstanding = () => {
    //     this.props.history.push("/understanding");
    //     this.props.dispatch({ type: 'EDIT_FEEDBACK_1' })
    // }

  goToComments = () =>{
    if (this.state.support === '') {
        alert('Please input a number before continuing!');
        return 'No support entered, eh?';
    } else {
        console.log('support', this.state.support);
        this.props.dispatch({ type: 'GET_FEEDBACK', payload: this.state.support });
        this.props.history.push("/comments");
    }
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
        <TextField id="standard-basic" label="Support?" 
            type="number" min="1" max="5"
            onChange={(event) => this.handleChange(event)} />
        <Button variant="outlined" color="primary"
            onClick={this.goToComments}>Next...</Button>
        <Button variant="outlined" color="primary"
            onClick={this.goToUnderstanding}>Previous...</Button>
      </div>
    );
  }
}

export default connect()(withRouter(Support));