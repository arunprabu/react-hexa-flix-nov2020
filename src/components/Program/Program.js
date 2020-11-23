//rafce
import React from 'react';

// Functional Component with props
const Program = (props) => {
  // props 
  /*  
    * object 
    * props are read-only 
    * props can also have children
    * the recommended name is props
  */
  console.log(props);

  // arrow fn based event handlers
  const watchNowHandler = (e) => { // event object
    console.log(e);
    e.target.innerText = 'Watching...';
  }

  return (
    <div className='card mb-3'>
      <div className="card-header">
        Featured
        <span className="badge badge-warning float-right">
          {props.category}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <button type='button' className="btn btn-primary" 
        onClick={watchNowHandler}>Watch Now</button>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}

export default Program;
