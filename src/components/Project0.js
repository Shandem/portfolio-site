import React from 'react';
import Icon from './iconList'
import './Project.scss';


const Project0 = () => {
    return (
        <div className='project rCard'>
        <img src={process.env.PUBLIC_URL + '/TCG.png'} className='screenshot tcgpic'alt='Screen Shot of Pokemon Trading Car Game clone'></img>
            <div className='detailContainer'>
                <h4 className='ptittle'>Pokemon Trading Card Game clone</h4>
                <h5 className='ptittle'>Web based game / Solo Project <br/>
                    Technologies Used: HTML CSS Javascript Jquery
                </h5>

                <h6 className='tcg-icons'>
                    <Icon url='https://github.com/Shandem/Pokemon-TCG'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon'
                        />
                    <Icon url='https://shandem.github.io/Pokemon-TCG/'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon'
                        />
                </h6>
                <p className="ipad-description">
                    My goal for this project was to create a web game with either
                    2 players or 1 vs a computer. I choose 1 vs a computer. With that in mind, I
                    created a game I know well PTCG. Building the automated computer opened my eyes 
                    to that it may be a simple card game, but that game requires so many automated micro 
                    moves. honestly, I really had fun on this. Check it out
                </p>
            </div>
        </div>
    );
}

export default Project0;
