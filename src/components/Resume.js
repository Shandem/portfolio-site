import React from 'react';
import Iframe from 'react-iframe'
import './Project.scss'


const Resume = () => {
    return (
        <div className='res-contain'>

        <Iframe src={process.env.PUBLIC_URL + '/styledResume.pdf'}    
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                />
                
        <br/> <br/>
        </div>
        
    );
}

export default Resume;
