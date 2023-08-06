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

  const title = `Hi, I'm Joshuah Gutierrez Click here for more`
  const intro =  <p className='blurb-a'>Hi, I'm Joshuah Gutierrez, a graduate of General Assembly's Software Engineering Immersive course. I am currently a Lead apprentice with Alpha Works
  for their React Cohort. Before that, I had seven years of experience 
  in the hospitality area. With five of those years in a management position. I am a 
  lifelong gamer and snowboarder.  It's not a job if it's fun!
  </p>
    return (
       <>
          <div className='about mFlex'>
              
              <img src={process.env.PUBLIC_URL + '/me.jpg'} className='me'alt='Self-Portrait'/>
              {isMobile ? (<ExpandableContainer title={title} children={intro}/>) :
              ( <p className='blurb-a'>Hi, I'm Joshuah Gutierrez, a graduate of General Assembly's Software Engineering Immersive course. I am currently a Lead apprentice with Alpha Works
                for their React Cohort. Before that, I had seven years of experience 
                in the hospitality area. With five of those years in a management position. I am a 
                lifelong gamer and snowboarder.  It's not a job if it's fun!
                </p>)}
          </div>
       
      </>
    );
}

export default About; 