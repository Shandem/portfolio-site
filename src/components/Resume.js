import React from 'react';
import Iframe from 'react-iframe'
import './Project.css'


const Resume = () => {
    return (
        <div>
        <Iframe src={process.env.PUBLIC_URL + '/styledResume.pdf'}
                width="800px"
                height="490px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
        <br/> <br/>
        </div>
        
    );
}

export default Resume;
