import React, { ReactElement } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';


const App = (): ReactElement => {

  return (
    <div className='main-container'>

      <Navbar/>
      <Header/>

    </div>
  );
};


export default App;