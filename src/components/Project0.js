import React from 'react';
import Icon from './iconList'
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

                <h6 className='tcg-icons'>
                    <Icon url='https://github.com/Shandem/Pokemon-TCG'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon'
                        linkText='Repo'
                        />
                    <Icon url='https://shandem.github.io/Pokemon-TCG/'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon'
                        linkText='Live'
                        />
                </h6>
                <p className="ipad-description">

                    The goal of the project was to make a web based video game. 
                    I took the Pokemon Trading Card game and created a clone using 
                    front end javascript.
                </p>
            </div>
        </div>
    );
}

export default Project0;
