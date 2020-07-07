import React from 'react';
import './Thecity.css'

const Rotom = () => {
    return (
        <div className='tracker'>
            <div class="rotom_full">
            <div class="dextopC">
                <div class="dexneck-tip"></div>
                <div class="dexneck-right"></div>
                <div class="dexneck"></div>
            </div>
            <div class="dexbody">
                <div class="rotom_head">
                    <div class="left_eye">
                        <div class="left_slit"></div>
                        <div class="left_eyeris"></div>
                    </div>
                    <div class="right_eye">
                        <div class="right__slit"></div>
                        <div class="right_eyeris"></div>
                    </div>
                    <div class="rotom_mouth">
                        <div class="rotom_mouth_left"></div>
                        <div class="rotom_mouth_center"></div>
                        <div class="rotom_mouth_right"></div>
                    </div>
                </div>
            </div>  
                <div class="dextail"></div>
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
