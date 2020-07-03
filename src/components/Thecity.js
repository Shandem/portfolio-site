import React from 'react';
import './Thecity.css'

const Thecity = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/thecity.jpg'} alt='Img of San Francisco, CA' className='Thecity'></img>
        </div>
    );
}

export default Thecity;
