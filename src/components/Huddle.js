import React from 'react';
import Icon from './iconList'
import './Project.css';

const Huddle = () => {
    return (
        <div className='project huddlecontain'>
            <img src={process.env.PUBLIC_URL + '/huddel_landing.png'} className='screenshot huddle' 
                alt='Screen Shot of huddel landing page'></img>
            <div className='detailContainer'>
                <h3>Huddle landing page</h3>
                <p className="grad">Completed after graduation</p>

                <h5>Number 3 in a list of projects from an Article by <br/>
                    <a href="https://dev.to/mattstuddert">Matt Studdert</a> 
                    "16 Front-end Projects (with Designs) to Help Improve your Coding Skills"</h5>

                <h6 className='huddle-icons'>

                    <Icon url='https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0'
                            linkClassName='github'
                            img='/Icons/cartoonLink.png'
                            imgClassName='catopuss-icon'
                            linkText='Design Artifact'
                    />
                    <Icon url='https://github.com/Shandem/Huddle_landing'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon'
                        linkText='Client'
                />
                    <Icon url='https://safe-mesa-32157.herokuapp.com'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon'
                        linkText=' Live'
                />    
    
                </h6>

                <h5>All the projects are given from the site containing 
                    a design Artifact that gives you basic, minimal direction. 
                    The goal is to produce a working demo as close to the image 
                    provided as possible. The picture you see is of  my final product. 
                    I have provided a link to the author, and to the design Artifact 
                    for comparison.
                </h5>

            </div>
    </div>
    );
}

export default Huddle;
