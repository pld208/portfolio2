import React, { ReactElement } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import {Link} from 'react-scroll';

const Navbar = (): ReactElement => {

  const styles = {
    color: 'lightblue',
    marginRight: 8
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top" id="container">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="https://i.ibb.co/djfw59v/logo-black-Background.png" height="60px" width="auto" alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={styles}/>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" id="links" >
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link" href="#" style={styles}>Home<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item active">
                <Link smooth={true} to="about" offset={-110} className="nav-link" href="#" style={styles}>About Me</Link>
              </li>
              <li className="nav-item active">
                <Link smooth={true} to="skills" offset={-110} className="nav-link" href="#" style={styles}>Skills</Link>
              </li>
              <li className="nav-item active">
                <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#" style={styles}>Portfolio</Link>
              </li>

              <li className="nav-item active">
                <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#" style={styles}>Contact me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
