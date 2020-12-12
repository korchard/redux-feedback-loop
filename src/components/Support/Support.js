import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Support.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
          <Card className="card">
              <CardContent className="cardContent">
            <h2>How well are you being supported?</h2>
            <TextField id="standard-basic" label="Support?" 
                type="number" min="1" max="5"
                onChange={(event) => this.handleChange(event)} />
                </CardContent>
            <CardActions>
            <Button variant="outlined" color="primary" className="button"
                onClick={this.goToUnderstanding}>Previous...</Button>
            <Button variant="outlined" color="primary" className="button"
                onClick={this.goToComments}>Next...</Button>
            </CardActions>
          </Card>
      </div>
    );
  }
}

export default connect()(withRouter(Support));