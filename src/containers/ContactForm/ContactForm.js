import React, { Component } from 'react'

class ContactForm extends Component {

  contactFormSubmitHandler = (e) =>{
    e.preventDefault();
    console.log(this.emailInput.value);
    console.log(this.phoneInput.value);

    const contactData = {
      email: this.emailInput.value,
      phone: this.phoneInput.value
    }
    // let's submit to the rest api tomorrow
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
        </form>
      </div>
    )
  }
}

export default ContactForm;
