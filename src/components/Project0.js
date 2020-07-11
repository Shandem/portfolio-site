import React from 'react';
import './Project.css';


const Project0 = () => {
    return (
        <div className='project'>
        <img src={process.env.PUBLIC_URL + '/TCG.png'} className='screenshot tcgpic'alt='Screen Shot of Pokemon Trading Car Game clone'></img>
            <div className='detailContainer'>
                <h4>Pokemon Trading Card Game clone</h4>
                <h5>Web based game / Solo Project <br/>
                    Technologies Used: HTML CSS Javascript Jquery
                </h5>
                <h6>
                    <a href="https://git.generalassemb.ly/Shandem2005/Project-0" target="_blank" rel="noopener noreferrer" className="github">
                        <img src={process.env.PUBLIC_URL + '/Icons/GitHub_Logo.png'} alt='Icon of Github' className='github-icon'></img>
                    </a>
                    <a href="https://pages.git.generalassemb.ly/Shandem2005/Project-0/" target="_blank" rel="noopener noreferrer" className="browser">
                        <img src={process.env.PUBLIC_URL + '/Icons/open-in-toon.png'} alt='Icon of open in browser' className='browser-icon'></img>
                    </a>
                </h6>
                <p>

                    The goal of the project was to make a web based video game. 
                    I took the Pokemon Trading Card game and created a clone using 
                    front end javascript.
                </p>
            </div>
        </div>
    );
}

export default Project0;
