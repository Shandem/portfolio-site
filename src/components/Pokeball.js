import React from 'react';
import './Thecity.css'

const Pokeball = () => {
    return (
        <div className='cssart'>
            <img src={process.env.PUBLIC_URL + '/pokeball.png'} className='pokeball' alt="Pokeball CSS art"/>
            <p>This pokeball is CSS art im uniquely proud of</p>
        </div>
    );
}

export default Pokeball;
