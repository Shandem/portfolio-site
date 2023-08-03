import React from 'react';
import ExpandableContainer from './ExpandableContainer';


import './About.css'


const title='Hi, Im Joshuah Gutierrez and im a Full Stack dev with focus in the Front End. Click here if you want to know more!'

const About = () => {
    return (
       <>
       
          <div className='about '>
              
              <img src={process.env.PUBLIC_URL + '/me.jpg'} className='me'alt='Self-Portrait'/>
              <p className='blurb-a'>Hi, I'm Joshuah Gutierrez, a graduate of General Assembly's Software Engineering Immersive course. I am currently a Lead apprentice with Alpha Works
                for their React Cohort. Before that, I had seven years of experience 
                in the hospitality area. With five of those years in a management position. I am a 
                lifelong gamer and snowboarder.  It's not a job if it's fun!
                </p>
          </div>
       
      </>
    );
}

export default About; 