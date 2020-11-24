// Functional Comp with Anonymous Fn

import React from 'react';
import Menu from './Menu';

// Comp with Anonymous Fn
const Footer = function(props){
  console.log(props);

  // variables can be added inside
  const devName = 'Arun';

  return(
    <div>
      <hr />
      <Menu />
      <p>Copyright {props.year} | {devName}</p>
      <p>Happily developed in a training in &nbsp;
        <span style={{fontWeight: 'bold'}}>November {props.year}</span>!
      </p>
    </div>
  )
}

export default Footer;
