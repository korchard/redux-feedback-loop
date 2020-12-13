import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Feelings.css';

import { StylesProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Feelings extends Component {

    state = {
        feelings: ''
    }

  goToUnderstanding = () =>{
    if (this.state.feelings === '' || this.state.feelings < 1 || this.state.feelings > 5) {
        alert('Please input a number between 1 - 5 before continuing!');
        return 'No feelings entered, eh?';
    } else {
        console.log('feelings', this.state.feelings);
        this.props.dispatch({ type: 'GET_FEELINGS', payload: this.state.feelings })
        this.props.history.push("/understanding");
    }
  }

  handleChange = (event) => {
    console.log('event', event.target.value);
    this.setState({
        feelings: event.target.value
    })
  }

  render() {
    return (
      <div className="center">
        <StylesProvider injectFirst>
          <Card>
             <CardContent className="cardContent">
                <h2>How are you feeling today?</h2>
                <TextField id="standard-basic" label="Feelings?" className="text"
                    type="number" min="1" max="5"
                    onChange={(event) => this.handleChange(event)} />
             </CardContent>
             <CardActions className="button">
                <Button variant="outlined" color="primary" className="button"
                    onClick={this.goToUnderstanding}>Next</Button>
            </CardActions>
        </Card>
        </StylesProvider>
      </div>
    );
  }
}

export default connect()(withRouter(Feelings));
