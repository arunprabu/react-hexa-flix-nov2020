import React, { Component } from 'react'

class MyProfile extends Component {

  constructor(props){ // if a class comp needs props 
    super(props); // this is also needed to get props
    this.state = {
      userName: 'Arun',
      accountCreated: '4/May/2020'
    }
  }

  profileNameChangeHandler(e){
    console.log(`typed: ${e.target.value}`);
    this.setState({
      userName: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Update Profile | Two Way Binding</h2>
        {/* 
          the following input field without onChange will show error in console.
          It will be immutable. check console for more such as defaultValue.
        */}
        <input type='text' value={this.state.userName} onChange={this.profileNameChangeHandler.bind(this)}/>
        <p>Username: {this.state.userName}</p>
        <p>
          <span>Account Created on: {this.state.accountCreated}</span>
        </p>
        <br />

        {/* The following will work and it would be mutable */}
        <input type='text' defaultValue='John'/>
      </div>
    )
  }
}

export default MyProfile;
