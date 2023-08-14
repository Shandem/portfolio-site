import React, { useState, useEffect } from 'react';
import SmallNav from './components/header2.0/smallNav';
import About from './components/About'
import Head2 from './components/header2.0/header2'
import routes from './config/routes';
import { PopupWidget } from 'react-calendly'
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
        
          <PopupWidget
          className='schedule'
          url="https://calendly.com/gutierrezjoshuah/15min"
          /*
          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
          */
          rootElement={document.getElementById("root")}
          text="Let's chat! Schedule a 15-minute meeting"
          textColor="#ffffff"
          color="#00a2ff"
        />
        
        
      </div>

      <div className='circle'></div>
      <div className="b-circle"></div>
      <div className="r-circle"></div>
        
    </div>
  );
}

export default App
