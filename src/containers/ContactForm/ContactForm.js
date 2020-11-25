import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {

  state = {
    isSaved: false
  }

  contactFormSubmitHandler = (e) =>{
    e.preventDefault();
    console.log(this.emailInput.value);
    console.log(this.phoneInput.value);

    const contactData = {
      email: this.emailInput.value,
      phone: this.phoneInput.value
    } 

    // What's the REST API? https://jsonplaceholder.typicode.com/users
    // What's the REST API Client tool? Axios - npm i axios or 
      // else JS's native fetch web api client (es2017)
    // What HTTP Method? - POST
    axios.post('https://jsonplaceholder.typicode.com/users', contactData)
      .then( (response) => {
        console.log(response);
        if(response && response.status == 201){
          this.setState({
            isSaved: true
          });
        }
      })
      .catch( (error) => {
        console.log(error);
      })
      .finally( () => {
        console.log('It is over!');
      });
  }

  render() {
    return (
      <div>
        <h2>Contact Form | Form Submission and AJAX Demo</h2>
        <form className='container text-left' onSubmit={this.contactFormSubmitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email" 
              ref={ (inputEl) => { this.emailInput = inputEl } }
              />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInput2">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone" 
              ref={ (inputEl) => { this.phoneInput = inputEl } }
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          {
             this.state.isSaved?  
             <div className="alert alert-success">Saved Successfully!</div>
             : 
             <div className="alert alert-danger">Some Error! Try again later!</div>
          }
          
        </form>
      </div>
    )
  }
}

export default ContactForm;
