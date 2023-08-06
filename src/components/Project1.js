import React from 'react';
import Icon from './iconList'
import './Project.scss'

const Project1 = () => {
    return (
        <div className='project mFlex'>
            <div className='detailContainer'>
            <img src={process.env.PUBLIC_URL + '/pokedex.png'}  
            className='screenshot ' 
            alt='Screen Shot of Pokemon Trading Car Game clone'/>
            <div class="cardHeader">
                <h4 className='hTitle'>Poke-Tracker A Full stack Pokedex clone</h4>
                <h5 className="ptittle2"> Full-Stack Pokedex / Team Project <br/>
                    Technologies Used: HTML CSS EJS express Mongoose MongoDB Pokemon API
                </h5>
            </div>
  
                <p className="ipad-description">The goal of the project was to make a full stack application with 2 
                data models relationship.  My partner and I built a Poke-dex that allowed registered 
                to gather information and keep track of Pokemon collected over the course 
                of 5 different games
                </p>

                <h6 className='iconL'>
                    <Icon url='https://github.com/Shandem/Poke-Tracker'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon icons'
                        linkText=''
                        />
                    
                        <Icon url='https://poke-tracker-pokedex.herokuapp.com/'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon icons'
                        linkText=''
                        />
                </h6>
            </div>
        </div>
    );
}

export default Project1;
