import React, {ReactElement} from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon} from 'react-share';
import {Link} from 'react-scroll';

const Footer = ():ReactElement => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="d-flex">
                <p>New Orleans, LA</p>
              </div>
              <div className="d-flex">
                <a href="cell: 504-909-6775">(504)-909-6775</a>
              </div>
              <div className="d-flex">
                <p>PHWill2015@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6">
              <div className="row">
                <div className="col">
                  <Link className="footer-nav" to="home" offset={-110}>Home</Link>
                  <br/>
                  <Link className="footer-nav" to="about" offset={-110}>About Me</Link>
                  <br/>
                  <Link className="footer-nav" to="skills" offset={-110} >Skills</Link>
                  <br/>
                </div>
                <div className="col">
                  <Link className="footer-nav" to="portfolio" offset={-110}>Portfolio</Link>
                  <br/>
                  <Link className="footer-nav" to="contacts" offset={-110}>Contact Me</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 sm-6 align-items-center">
              <div className="d-flex justify-content-center">
                <FacebookShareButton
                  url={'https://www.closetcollections.net'}
                  quote={'Checkout this Mobile Fashion Application'}
                  hashtag="#MobileApp">
                  <FacebookIcon className="mx-3" size={36}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton
                  url={'https://www.closetcollections.net'}
                  title={'Checkout my Mobile Fashion Application'}
                  hashtags={['MobileApp']}>
                  <TwitterIcon className="mx-3" size={36}/>
                </TwitterShareButton>
                <RedditShareButton
                  url={'https://www.closetcollections.net'}
                  title={'Checkout this Mobile Fashion Application'}
                >
                  <RedditIcon className="mx-3" size={36}/>
                </RedditShareButton>
                <LinkedinShareButton
                  title={'Closet Collections- mobile based fashion application'}
                  summary={'Mobile app'}
                  url={''}
                >
                  <LinkedinIcon className="mx-3" size={36}/>
                </LinkedinShareButton>
              </div>
              <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp; Patrice H Williams | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
