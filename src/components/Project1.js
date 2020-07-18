import React from 'react';
import './Project.css'

const Project1 = () => {
    return (
        <div className='project'>
        <img src={process.env.PUBLIC_URL + '/pokedex.png'}  className='screenshot dexpic'alt='Screen Shot of Pokemon Trading Car Game clone'></img>
            <div className='detailContainer'>
                <h4>Poke-Tracker A Full stack Pokedex clone</h4>
                <h5> Full-Stack Pokedex / Team Project <br/>
                    Technologies Used: HTML CSS EJS express Mongoose MongoDB, Pokemon API
                </h5>
                <h6 className='clone-icons'>
                    <a href="https://github.com/Shandem/Poke-Tracker" target="_blank" rel="noopener noreferrer" className="github">
                        <img src={process.env.PUBLIC_URL + '/Icons/GitHub_Logo.png'} alt='Icon of Github' className='github-icon gicon'></img>Repo
                    </a>
                    <a href="https://poke-tracker-pokedex.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="browser">
                        <img src={process.env.PUBLIC_URL + '/Icons/open-in-toon.png'} alt='Icon of open in browser' className='browser-icon'></img>Live
                    </a>
                    
                </h6>
                <p>The goal of the project was to make a full stack application with 2 
                data models.  My partner and I built a Poke-dex that allowed registered 
                to gather information and keep track of Pokemon collected over the course 
                of 5 different games</p>
            </div>
        </div>
    );
}

export default Project1;
