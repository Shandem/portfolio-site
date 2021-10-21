import React from 'react';
import './Project.scss';

const Under = () => {
    return (
        <div className='project'>
        <img src={process.env.PUBLIC_URL + '/under.jpeg'} className='screenshot tcgpic'alt='Under construction'></img>
            <div className='detailContainer'>
                <h4> Gaby's & Lisa's Craft Catalog </h4>
                <h5>Web Catalog <br/>
                    Technologies Used: MERN App
                </h5>
                
                <p>
                The goal of this is to build a website for my mother and her best friend.
                    The site would be used to Upload Images, Prices, and descriptions of arts and Crafts they sold.
                    The 2nd half of the site will be used for their consumer. Giving them a Catalog that can be displayed at 
                    Art and Crafts shows on an iPad. 
                </p>
            </div>
        </div>
    );
}

export default Under;
