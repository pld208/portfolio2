import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Footer from './Footer';

const App = (): ReactElement => {

  return (
    <div className='main-container'>

      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <ContactMe/>
      <Footer/>
    </div>
  );
};


export default App;