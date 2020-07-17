import React from 'react';

import Header from './components/Header'
import routes from './config/routes';
import Footer from './components/Footer'
import './components/Newhome.scss'

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
        <div className="moniter-screen">
          <img src={process.env.PUBLIC_URL + '/white-gif.gif'} className='white-gif' alt=""/>
          { routes }
          <div class="red-dot"></div>
        </div>
        
      <Footer/>
    </div>
  );
}

export default App
