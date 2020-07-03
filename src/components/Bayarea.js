import React from 'react';

const Bayarea = () => {
    return (
        <div>
             <img src={process.env.PUBLIC_URL + '/bayarea.jpg'} alt='Img of bayarea' className='Thecity bayarea'></img>
        </div>
    );
}

export default Bayarea;
