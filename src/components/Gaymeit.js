import React from 'react';
import Icon from './iconList'
import './Project.scss'

const Gaymeit = () => {
    return (
        <div className='project mFlex'>
          
            <div className='detailContainer'>
            <img src={process.env.PUBLIC_URL + '/gayme-it.png'} className='screenshot'alt='Screen Shot of Pokemon Trading Car Game clone'></img>
                <div class="cardHeader">
                    <h4 className='hTitle'>Gayme-it: A Reddit clone for Gaymers</h4>
                    <h5 className="hTittle2 ">Solo-project Full stack MERN App <br/>
                    Technologies Used: Full-stack MERN app Mongo, Express, React, Node, CSS</h5>
                </div>

                <p className="ipad-description"> 
                    The goal of this project was to create a Reddit-clone, focusing on 
                    the implementation of karma voting. The Server for this React app was 
                    set up as an API.
                </p>

          
           
                    <h6 className='iconL'>
                        <Icon url='https://github.com/Shandem/Gaymer-api'
                        linkClassName='github'
                        img='/Icons/catopuss.png'
                        imgClassName='catopuss-icon icons'
                        
                        />
                        <Icon url='https://github.com/Shandem/Gyamer-client'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon icons'
                       
                        />
                        <Icon url='https://gayme-it.herokuapp.com'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon icons'
                      
                        />
                    </h6>
              
                </div>
        </div>
    );
}

export default Gaymeit;
