import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <img src='https://media-exp1.licdn.com/dms/image/C5603AQGb3edBklXoEw/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=1j2KbQROTZ28DTfHwGUN2fh8z28r0KNhBQDijhHbPmQ' className='me'alt='Self-Portrait'></img>
            <p className='blurb'>I am a Full-stack engineer looking for a Front-end position. 
            I am a recent graduate of General Assembly and when you add that to my 
            history in Hospitality management it gives me unique project management 
            insight valuable to any engineering team. I am looking for a company that 
            can utilize my unique skill set and challenge me outside of my comfort zone</p>
        </div>
    );
}

export default About;