import React, { Component } from 'react';
import axios from 'axios';

import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Admin extends Component {

  state = {
    feedback: []
  }

  componentDidMount() {
    this.getFeedback(); 
  } // end componentDidMount 

  getFeedback = () => {
    console.log('Getting feedback...');

    axios.get('/feedback')
    .then((response) => {
      console.log('back from GET:', response.data) 
      this.setState({
        feedback: response.data
      })
    }).catch((error) => {
      console.log(error);
      alert('problem with GET');
    }) // end axios
  } // end submitFeedback

  // DELETE ROUTE
  deleteFeedback = (id) => { 
    console.log('in deleteFeedback', id);

    axios.delete(`/feedback/${id}`)
    .then((response) => {
      console.log('Removed the feedback...', response);
      this.getFeedback(); 
    })
    .catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  } // end DELETE ROUTE

  render() {
    return (
      <div>
        <StylesProvider injectFirst>
        <Paper className="root">
          <Table className="table">
            <TableHead className="thead">
              <TableRow className="thead">
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Feeling</TableCell>
                <TableCell align="center">Understanding</TableCell>
                <TableCell align="center">Support</TableCell>
                <TableCell align="center">Comments</TableCell>
                <TableCell align="center">&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbody">
              {this.state.feedback.map(feedback => (
              <TableRow key={feedback.id}>
                <TableCell align="center">{feedback.date}</TableCell>
                <TableCell align="center">{feedback.feeling}</TableCell>
                <TableCell align="center">{feedback.understanding}</TableCell>
                <TableCell align="center">{feedback.support}</TableCell>
                <TableCell align="center">{feedback.comments}</TableCell>
                <TableCell align="center"><Button onClick={() => this.deleteFeedback(feedback.id)}>Remove</Button></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </StylesProvider>
      </div>
    );
  }
}

export default Admin;
