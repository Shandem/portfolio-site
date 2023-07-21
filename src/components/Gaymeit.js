import React from 'react';
import Icon from './iconList'
import './Project.scss'

const Gaymeit = () => {
    return (
        <div className='project gaymeitcontain'>
            <img src={process.env.PUBLIC_URL + '/gayme-it.png'} className='screenshot gaymeit'alt='Screen Shot of Pokemon Trading Car Game clone'></img>
                <div className='detailContainer'>
                    <h4>Gayme-it: A Reddit clone for Gaymers</h4>
                    <h5>Solo-project Full stack MERN App <br/>
                    Technologies Used: Full-stack MERN app Mongo, Express, React, Node, CSS</h5>
                    <h6 className='gaymeit-icons'>
                        <Icon url='https://github.com/Shandem/Gaymer-api'
                        linkClassName='github'
                        img='/Icons/catopuss.png'
                        imgClassName='catopuss-icon icons'
                        linkText='API'
                        />
                        <Icon url='https://github.com/Shandem/Gyamer-client'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon icons'
                        linkText='Client'
                        />
                        <Icon url='https://gayme-it.herokuapp.com'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon icons'
                        linkText='Live'
                        />
                    </h6>
                    <p>The goal of this project was to create a Reddit-clone, focusing on 
                    the implementation of karma voting. The Server for this React app was 
                    set up as an API.
                    </p>
                </div>
        </div>
    );
}

export default Gaymeit;
