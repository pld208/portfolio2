import React from 'react';
import Typed from 'react-typed';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = ():any => {
  return (
    <div id="home" className="header-wrapper" style={{color: "white"}}>
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={['Welcome', 'I hope you enjoy my Portfolio', 'Have a great day!']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
