import React, { Component } from 'react';
import Program from '../../components/Program/Program';

// class comp 
class ProgramList extends Component {

  render() {
    return (
      <div className='container text-left'>
        <h2>Featured Programs List | Props Demo</h2>

        <Program 
          name="Man Vs Wild"
          category="TV Show"
          time="8PM">Wild Adventure TV Show by Bear Grills</Program>

        <Program 
          name="Planet Earth"
          category="TV Show"
          time="9PM">TV Show by David Attenborough</Program>

        <Program 
          name="Fear Factor"
          category="Action"
          time="10PM">Action Adventure TV Show</Program>
        
      </div>
    )
  }
}

export default ProgramList;