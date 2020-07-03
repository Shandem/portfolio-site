import React from 'react';
import './Thecity.css'

const Monterey = () => {
    return (
        <div>
             <img src={process.env.PUBLIC_URL + '/monterey.jpg'} alt='Img of Monterey, CA' className='Thecity monterey'></img>
        </div>
    );
}

export default Monterey;
