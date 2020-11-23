// Functional Comp with Anonymous Fn

import React from 'react';
import Menu from './Menu';

// Comp with Anonymous Fn
const Footer = function(props){
  console.log(props);

  // variables can be added inside
  const devName = 'Arun';

  // inline styles 
  let footerStyles = {
    copyrightStyle: {
      backgroundColor: 'yellow',
      padding: '10px',
      fontSize: '20px'
    },
    happyStyle: {
      backgroundColor: 'green',
      padding: '10px',
      color: '#fff',
      fontSize: '12px'
    }
  }

  return(
    <div>
      <hr />
      <Menu />
      <p style={footerStyles.copyrightStyle}>Copyright {props.year} | {devName}</p>
      <p style={footerStyles.happyStyle}>Happily developed in a training in &nbsp;
        <span style={{fontWeight: 'bold'}}>November {props.year}</span>!
      </p>
      
    </div>
  )
}

export default Footer;
