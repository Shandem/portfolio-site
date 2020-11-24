import React from 'react';


import Head2 from './components/header2.0/header2'
import routes from './config/routes';
import Footer from './components/Footer'
import Intro from './components/intro2.0/intro'
import './components/Newhome.scss'

import './App.css';


function App() {
  return (
    <div className="App">
      <Head2/>
      <Intro/>
        <div className="moniter-screen">
          
          { routes }
          <div class="red-dot"></div>
        </div>
        
      <Footer/>
    </div>
  );
}

export default App
