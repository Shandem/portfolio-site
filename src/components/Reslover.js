import React, { useState, useEffect } from 'react';
import SResume from './S-resume';
import Resume from './Resume';
import './Project.scss'

const Reslover = () => {
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
        <>
            {isMobile ? ( <SResume className='mFlex'/>) : (<Resume className='mFlex'/>)}
        </>
    );
}

export default Reslover;
