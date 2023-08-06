import React, { useState, useEffect } from 'react';
import SmallNav from './components/header2.0/smallNav';
import About from './components/About'
import Head2 from './components/header2.0/header2'
import routes from './config/routes';

import './components/Newhome.scss'

import './App.css';



function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile( window.outerWidth <= 767 ); // Set the breakpoint for mobile width
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Call the handler on initial load
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">

      <div className='navContainer'>
        {isMobile ? ( 
          <SmallNav/>
        ) : (        
          <Head2/> 
        )}
      </div>

      <div className='componitContainer'>
        <About/>
        { routes }
      </div>

      <div className='circle'></div>
      <div className="b-circle"></div>
      <div className="r-circle"></div>
        
    </div>
  );
}

export default App
