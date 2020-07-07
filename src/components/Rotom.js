import React from 'react';
import './Thecity.css'

const Rotom = () => {
    return (
        <div className='tracker'>
            <div className="rotom_full">
            <div className="dextopC">
                <div className="dexneck-tip"></div>
                <div className="dexneck-right"></div>
                <div className="dexneck"></div>
            </div>
            <div className="dexbody">
                <div className="rotom_head">
                    <div className="left_eye">
                        <div className="left_slit"></div>
                        <div className="left_eyeris"></div>
                    </div>
                    <div className="right_eye">
                        <div className="right__slit"></div>
                        <div className="right_eyeris"></div>
                    </div>
                    <div className="rotom_mouth">
                        <div className="rotom_mouth_left"></div>
                        <div className="rotom_mouth_center"></div>
                        <div className="rotom_mouth_right"></div>
                    </div>
                </div>
            </div>  
                <div className="dextail"></div>
            </div>
        <p className='rotom-blurb'>This is another bit of CSS art. His name is Rotom from the Pokemon franchise. I wanted to 
            take on something more difficult than the  Pokeball, and with this project focused on making a Poke-dex clone 
            Rotom was a natural choice. I have provided an image of Rotom for your reference.
        <br/> <br/>
        <img src={process.env.PUBLIC_URL + '/rotom-dex.jpg'} alt='Rotom for refrence' className='rotom-pic'></img>
        </p>
    </div>
    );
}

export default Rotom;
