import React from 'react';
import Icon from './iconList'
import './Project.scss';


const Project0 = () => {
    return (
        <div className='project rCard mFlex'>
         
           
            <div className='detailContainer'> 
            <img src={process.env.PUBLIC_URL + '/TCG.png'} className='screenshot'alt='Screen Shot of Pokemon Trading Car Game clone'></img>  
                <div className='cardHeader'>
                    <h4 className='hTitle'>Pokemon Trading Card Game clone</h4>
                    <h5 className='hTittle2'>Web based game / Solo Project <br/>
                        Technologies Used: HTML CSS Javascript Jquery
                    </h5>
                </div>

                    <p className="ipad-description">
                        My goal for this project was to create a web game with either
                        2 players or 1 vs a computer. I choose 1 vs a computer. With that in mind, I
                        created a game I know well PTCG. Building the automated computer opened my eyes 
                        to that it may be a simple card game, but that game requires so many automated micro 
                        moves. honestly, I really had fun on this. Check it out
                    </p>
                    <h6 className='iconL'>
                        <Icon url='https://github.com/Shandem/Pokemon-TCG'
                            linkClassName='github'
                            img='/Icons/GitHub_Logo.png'
                            imgClassName='github-icon gicon icons'
                            />
                        <Icon url='https://shandem.github.io/Pokemon-TCG/'
                            linkClassName='browser'
                            img='/Icons/open-in-toon.png'
                            imgClassName='browser-icon icons'
                            />
                    </h6>
                </div>
        </div>
    );
}

export default Project0;
