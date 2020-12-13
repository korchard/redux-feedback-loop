import React, { Component } from 'react';
import axios from 'axios';

// import material UI
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import DoneIcon from '@material-ui/icons/Done';

class Admin extends Component {

  // local state to store feedback received from database
  state = {
    feedback: [],
  }

  componentDidMount() {
    this.getFeedback(); // displays when DOM is refreshed
  } // end componentDidMount 

  formatDate = (feedback) => {
    let newDate = [];
    console.log(feedback);
    for (let item of feedback) {
      if (item.date) {
        newDate.push(item.date.slice(0, 10));
      }
    } 
    console.log(newDate);
    return newDate;
  }

  // GET ROUTE
  getFeedback = () => {
    console.log('Getting feedback...');

    axios.get('/feedback')
    .then((response) => {
      console.log('Getting feedback...', response.data) 
      // set the state with data received from database
      this.setState({
        feedback: response.data,
      })
      // trying to reformat the date
      this.formatDate(response.data);
    }).catch( (error)=> {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })// end axios
  } // end GET ROUTE

  // PUT ROUTE
  flagFeedback = (id) => { 
    console.log('in flagOrNot');
  
      axios.put(`/feedback/${id}`) // need id to idenfiy which item to update
      .then((response) => {
        console.log('Flag it or not...', response); 
        this.getFeedback(); // call the GET ROUTE again to update info to DOM
      }).catch((error)=> {
        alert('Something bad happened...');
        console.log('Bad news bears', error);
      }) // end axios
    } // end PUT ROUTE

  // DELETE ROUTE
  deleteFeedback = (id) => { 
    // alert message that only continues with delete route if OK is clicked
    if (window.confirm("Are you sure you want to delete this feedback?")) {
    console.log('in deleteFeedback', id);

    axios.delete(`/feedback/${id}`) // need id to idenfiy which item to update
    .then((response) => {
      console.log('Removed the feedback...', response);
      this.getFeedback(); // call the GET ROUTE again to update info to DOM
    }).catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    }) // end axios
   } // end conditional
  } // end DELETE ROUTE

  render() {
    return (
      <div>
        <StylesProvider injectFirst>
          <Paper className="root">
            <Table className="table">
              <TableHead className="thead">
                <TableRow className="thead">
                  <TableCell align="center"><AssistantPhotoIcon/> Needs Further Review</TableCell>
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
                  <TableCell align="center">{feedback.flagged  ? 
                      (<AssistantPhotoIcon/>) :
                      (<Button onClick={() => this.flagFeedback(feedback.id)}><DoneIcon/></Button>)
                }</TableCell>
                      {feedback.date} ? ({this.formatDate(feedback.date)}) 
                  <TableCell align="center" onChange={() => {this.formatDate(feedback.date)}}>{}</TableCell>
                  <TableCell align="center">{feedback.feeling}</TableCell>
                  <TableCell align="center">{feedback.understanding}</TableCell>
                  <TableCell align="center">{feedback.support}</TableCell>
                  <TableCell align="center">{feedback.comments}</TableCell>
                  <TableCell align="center">
                      <Button 
                          onClick={() => this.deleteFeedback(feedback.id)}>
                          <DeleteIcon/>
                      </Button>
                  </TableCell>
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