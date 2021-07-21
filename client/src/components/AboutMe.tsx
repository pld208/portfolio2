import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const AboutMe = ():ReactElement => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6  col-xm-12">
          <div className="photo-wrap" mb-5>
            <div className ="clickables">
              <img className="selfImage"src="https://i.ibb.co/8420YZt/HeadShot.jpg" alt="headshot" style={{height: 300, width: 200}}/>

              <div className="contactImages">
                <ul className="contactImage">
                  <li>
                    <a href="https://www.linkedin.com/in/patrice-williams-146a1a200/">
                      <div className="circle"></div><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
                  </li>
                  <li>
                    <a href="https://github.com/pld208">
                      <div className="circle"></div><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                    </a>
                  </li>


                </ul>
              </div>
              <div className="resume">
                <a href="https://i.ibb.co/PN6JYc4/Resume-HIRpdf.jpg">Click to see my Resume</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hello! My name is Patrice. I am a full-stack software engineer. I thoroughly enjoy crafting clean, efficient websites that allow users to easily interact with the application. I am passionate about programming and pinpointing errors in applications to improve functionality and the user experience. I graduated from LSU Health Science Center's School of Public Health with a Master's in Public health. In the public health field, I was obliged to come up with researched, problem-solving techniques to combat people’s health dispositions. This experience enabled me to carry the same systematic approach to finding solutions to errors within an application’s code. I am currently open to opportunities where I can build user-friendly, well-designed applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
