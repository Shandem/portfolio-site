import React, { useEffect, useState }  from 'react';
import ExpandableContainer from './ExpandableContainer'

import './About.css'



const About = () => {
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

  const title = `Hi, I'm Joshuah Gutierrez` 
  const click = ` Click here` 
 const  title2= ` for more info`
  const intro =  <p className='blurb-a'>Hi, I'm Joshuah Gutierrez, My most recent position was a
    Lead apprentice with AlphaWorks for their React Cohort. Before that, I was part of Enki.Ai and 
    reported directly to the CTO. Also, I had seven years of experience in the hospitality area. 
    With five of those years in a management position. I am a lifelong gamer, snowboarder and 
    programmer in my past time. It's not a job if it's fun!
  </p>
    return (
       <>
          <div className='about mFlex'>
              
              <img src={process.env.PUBLIC_URL + '/me.jpg'} className='me'alt='Self-Portrait'/>
              {isMobile ? (<ExpandableContainer title={title} clickHere={click} title2={title2} children={intro}/>) :
              ( <p className='blurb-a'>Hi, I'm Joshuah Gutierrez, My most recent position was a
                      Lead apprentice with AlphaWorks for their React Cohort. Before that, I was part of Enki.Ai and 
                      reported directly to the CTO. Also, I had seven years of experience in the hospitality area. 
                      With five of those years in a management position. I am a lifelong gamer, snowboarder and 
                      programmer in my past time. It's not a job if it's fun!
                </p>)}
          </div>
       
      </>
    );
}

export default About; 