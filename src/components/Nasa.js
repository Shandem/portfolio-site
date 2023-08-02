import React from 'react';
import Icon from './iconList';
import './Project.scss';

const Nasa = () => {
    return (
        <div className='project'>
        <img src={process.env.PUBLIC_URL + '/Screen Shot 2022-03-17 at 3.23.17 PM.png'} className='screenshot'id='nasa'alt='Screen Shot of Pokemon Trading Car Game clone'></img>
            <div className='detailContainer'>
            <div className='cardHeader '>
                <h4 className='ptittle'>Picture of the Day</h4>
                <h5 className='ptittle2'>NASA API for picture of the day <br/>
                    Technologies Used: React, ReactHooks
                </h5>
            </div>

                <p className="ipad-description">
                The goal was to create a simple web tool to 
                call the NASA Picure of the day API. Using React hooks
                I am saving the result to state then presenting the detailContainer Check back every 24hrs 
                for a new picture.
                </p>

                <h6 className='iconL'>
                    <Icon url='https://github.com/Shandem/picture-of-the-day'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon icons'
                        />
                    <Icon url='https://nasa3-potd-react.herokuapp.com'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon icons'
                        />
                </h6>
            </div>
        </div>
    );
}

export default Nasa;
