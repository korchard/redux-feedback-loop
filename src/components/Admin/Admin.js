import React, { Component } from 'react';
import axios from 'axios';

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
    console.log('in deleteFeedback');

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
        <Paper className={root}>
          <Table className={table}>
            <TableHead>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Feeling</TableCell>
                <TableCell align="right">Understanding</TableCell>
                <TableCell align="right">Support</TableCell>
                <TableCell align="right">Comments</TableCell>
                <TableCell align="right">&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.feedback.map(row => (
              <TableRow key={feedback.id}>
                <TableCell component="th" scope="feedback">
                    {feedback.flagged}
                </TableCell>
                <TableCell align="right">{feedback.date}</TableCell>
                <TableCell align="right">{feedback.feelings}</TableCell>
                <TableCell align="right">{feedback.understanding}</TableCell>
                <TableCell align="right">{feedback.support}</TableCell>
                <TableCell align="right">{feedback.comments}</TableCell>
                <TableCell align="right"><Button onClick={() => this.deleteFeedback(feedback.id)}>Remove</Button></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Admin;
