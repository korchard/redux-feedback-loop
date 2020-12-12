import React, { Component } from 'react';
import axios from 'axios';

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
        {/* {this.props.feedback.map((item) => 
                // <GalleryItem item={item} key={image.id} addLoves={this.props.addLoves} removeImage={this.props.removeImage}/>
            )} */}
      </div>
    );
  }
}

export default Admin;
