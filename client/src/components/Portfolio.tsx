import React, {ReactElement, ReactFragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
//
const Portfolio = (): ReactElement=> {

  const popupBoxCC = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src="https://i.ibb.co/3BWjMX2/Screen-Shot-2021-04-29-at-11-25-15-AM.png" style={{height: 500, width: 350}} alt="Closet Collections Project"/>
        <p>Closet Collections is a fashion mobile-based application that helps users decide what to wear so they get the best use of their closet and also stay up-to-date on the latest fashion trends.</p>
        <b>Website: </b> <a className="hyper-link" href="https://www.closetcollections.net" onClick={():string => ('https://www.closetcollections.net')}>https://www.closetcollections.net</a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCC = {
    titleBar: {
      enable: true,
      text: 'Closet Collections project'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  const popupBoxHeadStrong = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src="https://i.ibb.co/JCyYCnw/Screen-Shot-2021-04-29-at-11-31-16-AM.png" style={{height: 500, width: 350}} alt="HeadStrong project"></img>
        <p className="p-popupbox">Headstrong is an application designed to provide the user with a relaxing, stress-free environment to write out their thoughts without any judgment. It is designed to improve the user's mental health.</p>
        <b>Github: </b><a className="hyper-link" href="https://github.com/Avengers-of-OpSpark/headstrong" onClick={():string => ('https://github.com/Avengers-of-OpSpark/headstrong')}>https://github.com/Avengers-of-OpSpark/headstrong</a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigHS = {
    titleBar: {
      enable: true,
      text: 'HeadStrong Application'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>

        <div className="image-box-wrapper row justify-content-start">
          <div className="col-md-6" onClick={popupBoxCC}>
            <div className="portfolio-image-box">
            <img className="portfolio-image" src="https://i.ibb.co/3BWjMX2/Screen-Shot-2021-04-29-at-11-25-15-AM.png" style={{height: 300, width: 200}} alt="Closet Collections Project"/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
            </div>
          </div>



          <div className="col-md-6" onClick={popupBoxHeadStrong}>
          <div className="portfolio-image-box">
            <img className="portfolio-image" src="https://i.ibb.co/JCyYCnw/Screen-Shot-2021-04-29-at-11-31-16-AM.png" style={{height: 300, width: 200}} alt="HeadStrong Project"/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigCC }/>
      <PopupboxContainer {...popupboxConfigHS}/>
    </div>
  );
};

export default Portfolio;
