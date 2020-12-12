import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Comments.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Comments extends Component {

    state = {
        comments: ''
    }

    goToSupport = () => {
        this.props.history.push("/support");
    }

  goToReview = () =>{
    if (this.state.comments === '' || this.state.comments < 1 || this.state.comments > 5) {
       this.props.dispatch({ type: 'GET_COMMENTS', payload: 'No comments provided.'})

    } else {
        console.log('comments', this.state.comments);
        this.props.dispatch({ type: 'GET_COMMENTS', payload: this.state.comments })
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
        <Card className="card">
          <CardContent className="cardContent">
          <h2>Any comments you want to add?</h2>
          <TextField id="standard-basic" label="Comments?" 
              type="text" 
              onChange={(event) => this.handleChange(event)} />
          </CardContent>
          <CardActions className="button">
          <Button variant="outlined" color="primary" 
              onClick={this.goToSupport}>Previous...</Button>
          <Button variant="outlined" color="primary" 
              onClick={this.goToReview}>Next...</Button>
            </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));