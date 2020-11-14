import React from 'react';
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
                    <a href="https://github.com/Shandem/Gaymer-api" target="_blank" rel="noopener noreferrer" className="github">
                        <img src={process.env.PUBLIC_URL + '/Icons/cartoonLink.png'} 
                            alt='Icon of Github' className='catopuss-icon'></img>Design Artifact
                    </a>
                    <a href="https://github.com/Shandem/Gyamer-client" target="_blank" rel="noopener noreferrer" className="github">
                        <img src={process.env.PUBLIC_URL + '/Icons/GitHub_Logo.png'} 
                            alt='Icon of Github' className='github-icon gicon'></img>Client
                    </a>
                    <a href="https://safe-mesa-32157.herokuapp.com" target="_blank" rel="noopener noreferrer" className="browser">
                        <img src={process.env.PUBLIC_URL + '/Icons/open-in-toon.png'} 
                            alt='Icon of open in browser' className='browser-icon'></img>Live
                    </a>
                </h6>

                <h5>All the projects are given from the site containing a design Artifact 
                    that gives you basic, minimal direction. The goal is to produce a working demo 
                    as close to the image provided as possible. The picture you see is of  my final product. 
                    I have provided a link to the author, and to the design Artifact for comparison.
                </h5>

            </div>
    </div>
    );
}

export default Huddle;
