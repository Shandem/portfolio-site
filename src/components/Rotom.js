import React from 'react';
import './Thecity.css'

const Rotom = () => {
    return (
        <div className='cssart'>
        <img src={process.env.PUBLIC_URL + '/rotom.png'} className='rotom' alt="rotom CSS art"/>
        <p>This pokeball is CSS art im uniquely proud of</p>
    </div>
    );
}

export default Rotom;
