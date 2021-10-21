import React from 'react';
import './Thecity.css'

const Pokeball = () => {
    return (
        <div className='cssart'>
            <div className="pokeball">  
                <div id="pokeball">
                    <div id="layer1">
                        <div id="center"></div>
                        <div id="bottom-half"></div>
                    </div>  
                </div>
            </div>
            <p className='blurb bblurb'>Here is some custom CSS art I put together. It is a recreation of 
            Nintendo's iconic Pokeball from the Pokemon franchise. I have provided
            an image of an official Pokeball for your reference <br/>
            
            </p>
        </div>
    );
}

export default Pokeball;
