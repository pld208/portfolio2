import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutMe from './AboutMe';

const App = (): ReactElement => {

  return (
    <div className='main-container'>

      <Navbar/>
      <Header/>
      <AboutMe/>
    </div>
  );
};


export default App;