import React from 'react'

// till 16.2.x - functional comp's can't have states
// 16.3+ - Fn components can have states using React Hooks
const Channel = ( props ) => {

  console.log(props.addToFav);
  return (
    <div className='col-md-3'>
      <div className="card">
        <div className="card-body">
          <img className="card-img-top" alt="..." />
          <h5 className="card-title">{ props.name }</h5>
          <p className="card-text">{props.info}</p>
          <button type="button"
            className="btn btn-primary float-right" onClick={props.addToFav}>
            Add to Fav
          </button>
        </div>
      </div>
    </div>
  )
}

export default Channel;
