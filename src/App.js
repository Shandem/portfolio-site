import React from 'react';

import About from './components/About'
import Head2 from './components/header2.0/header2'
import routes from './config/routes';

import './components/Newhome.scss'

import './App.css';


function App() {
  return (
    <div className="App">
      <Head2/>
      <About/>
        { routes }
        <div className='circle'></div>
        <div className="b-circle"></div>
        <div className="r-cirlce"></div>
        
      <About/>
      
    </div>
  );
}

export default App
