import React from 'react';
import './Project.scss';

const SResume = () => {
   
    return (    

            <a href={process.env.PUBLIC_URL + './styledResume.pdf'} download={process.env.PUBLIC_URL + './styledResume.pdf'} className='sAncor'>Download <img src={process.env.PUBLIC_URL  + './resumeScreenshot.png'} alt='downloadable pdf file' className='resumeScreenshot'/></a>
   
    );
}

export default SResume;
