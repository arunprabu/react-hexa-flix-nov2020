// node module imports
import React from 'react'; // react core library - used for working with the comp
import ReactDOM from 'react-dom';  // react-dom is responsible for rendering react component 
// the above pkg will render the comp in the browser

// custom imports
import './index.css'; // global css import
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM will render the App Component inside the div with id root. 
// Consuming the App comp as an element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
