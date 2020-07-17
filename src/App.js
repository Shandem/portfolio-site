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
          
          { routes }
          <div class="red-dot"></div>
        </div>
        
      <Footer/>
    </div>
  );
}

export default App
