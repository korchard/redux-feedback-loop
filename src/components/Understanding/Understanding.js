import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Understanding.css';

import { StylesProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Understanding extends Component {

    state = {
        understanding: ''
    }

  goToFeelings = () => {
      this.props.history.push("/feelings");
  }

  goToSupport = () =>{
    if (this.state.understanding === '' || this.state.understanding < 1 || this.state.understanding > 5) {
        alert('Please input a number between 1 - 5 before continuing!');
        return 'No understanding entered, eh?';
    } else {
      console.log('understanding', this.state.understanding);
      this.props.dispatch({ type: 'GET_UNDERSTANDING', payload: this.state.understanding })
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
      <div className="center">
          <StylesProvider injectFirst>
          <Card>
            <CardContent className="cardContent">
            <h2>How well are you understanding the content?</h2>
            <TextField id="standard-basic" label="Understanding?" className="text"
                type="number" min="1" max="5"
                onChange={(event) => this.handleChange(event)} />
            </CardContent>
            <CardActions className="button">
            <Button variant="outlined" color="primary" className="button"
                onClick={this.goToFeelings}>Previous...</Button>
            <Button variant="outlined" color="primary" className="button"
                onClick={this.goToSupport}>Next...</Button>
            </CardActions>
          </Card>
          </StylesProvider>
      </div>
    );
  }
}

export default connect()(withRouter(Understanding));
