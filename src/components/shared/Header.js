// Custom Component
// Component with Named Function -- Functional Component

// step 1: 
import React from 'react';
import Menu from './Menu';
import appLogo from '../../assets/images/hexa_flix_logo.png';

// Step 2
function Header( props ) { // receiving props 

  // props -- is an object
  // the recommended name is props
  console.log(props);

  const appName = 'Hexa Flix App!';
  
  // return JSX 
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          <img src={appLogo} width='32' /> {appName} v {props.version}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <Menu />
        </div>
      </nav>
    </header>
  )
}

// Step 3:
export default Header;
