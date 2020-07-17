import React from 'react';
import '../components/Newhome.scss'

const Newhome = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/white-gif.gif'} className='white-gif' alt=""/>
        </div>
    );
}

export default Newhome;
