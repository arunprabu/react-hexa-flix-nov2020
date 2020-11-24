import React, { Component } from 'react'

// LifeCycle Hook
class LifeCycleDemo extends Component {

  constructor(props){
    super(props);
    this.state = {};
    console.log('[LifeCycleDemo.js] - Inside Constructor');
  }
  
  static getDerivedStateFromProps( props, state){
    console.log('[LifeCycleDemo.js] - Inside getDerivedStateFromProps');
    // static method can't have access to 'this' keyword
    // so you can't access any other methods.
    // so, the only way to update state is returning an object.
    // if you dont want to update any state, simply return null.
    console.log(props);
    // you can update state by duplicate using es2015's spread operator
    return state;
  }

  componentDidMount(){
    // ideal place for ajax calls
    console.log('[LifeCycleDemo.js] - Inside componentDidMount');
  }

  componentWillUnmount(){
    // will be called when the comp goes out of the view
    // clear the timeouts, intervals, unneccessary data
    console.log('[LifeCycleDemo.js] - Inside componentWillUnmount');
  }

  render() {
    console.log('[LifeCycleDemo.js] - Inside Render');

    return (
      <div>
        <h2>Life Cycle Demo</h2>
        <div className='alert alert-info'>Open up LifeCycleDemo.js file to understand</div>
        <div>And look at browser console also</div>
        <p>
          All LifeCycle Hooks here <br />
          https://reactjs.org/docs/react-component.html
        </p>
        <br />
      </div>
    )
  }
}

export default LifeCycleDemo;