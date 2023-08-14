import React, { useEffect, useState }  from 'react';
import ExpandableContainer from './ExpandableContainer'
import { PopupWidget } from "react-calendly";
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
  const click = 'Click here' 
 const  title2= `for more`
  const intro =  <p className='blurb-a'>Hi, I'm Joshuah Gutierrez, a graduate of General Assembly's Software Engineering Immersive course. I am currently a Lead apprentice with Alpha Works
  for their React Cohort. Before that, I had seven years of experience 
  in the hospitality area. With five of those years in a management position. I am a 
  lifelong gamer and snowboarder.  It's not a job if it's fun!
  </p>
    return (
       <>
          <div className='about mFlex'>
              
              <img src={process.env.PUBLIC_URL + '/me.jpg'} className='me'alt='Self-Portrait'/>
              {isMobile ? (<ExpandableContainer title={title} clickHere={click} title2={title2} children={intro}/>) :
              ( <p className='blurb-a'>Hi, I'm Joshuah Gutierrez, a graduate of General Assembly's Software Engineering Immersive course. I am currently a Lead apprentice with Alpha Works
                for their React Cohort. Before that, I had seven years of experience 
                in the hospitality area. With five of those years in a management position. I am a 
                lifelong gamer and snowboarder.  It's not a job if it's fun!
                </p> )}
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
       
      </>
    );
}

export default About; 