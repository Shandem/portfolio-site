import React from 'react';

import './About.css'


const About = () => {
    return (
        <>
        <div className='about'>
            <img src='https://media-exp1.licdn.com/dms/image/C5603AQGb3edBklXoEw/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=1j2KbQROTZ28DTfHwGUN2fh8z28r0KNhBQDijhHbPmQ' className='me'alt='Self-Portrait'></img>
           
            <p className='blurb'>Hi, I'm Joshuah and I'm a recent graduate from General 
            Assembly's Software Engineering Immersive course. Before that, I had 7 years 
            of experience in the hospitality area. With 4 of those years in a management 
            position. I am a life long gamer and snowboarder. Cooking is a huge passion 
            of mine. I just love creating. It's not a job if it's fun! <br/>
            <p className='icon-list'> 
                <a href="mailto:gutierrezjoshuah@gmail.com" className="email">
                    <img src={process.env.PUBLIC_URL + '/Icons/cartoonEmail.png'} alt='Icon of a Mail box' className='email-icon'></img>
                </a>
                <a href="https://www.linkedin.com/in/joshuah-gutierrez/" target="_blank" rel="noopener noreferrer" className="linkUrl">
                    <img src={process.env.PUBLIC_URL + '/Icons/linkedin.png'} alt='Icon of linkedin' className='linkedin-icon'></img>
                </a>
            </p>
           
             </p>
             
             
        </div>
        </>
    );
}

export default About; 