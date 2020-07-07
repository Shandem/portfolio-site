import React from 'react';
import Iframe from 'react-iframe'


const Resume = () => {
    return (
        <div>
           <Iframe src={process.env.PUBLIC_URL + '/styledResume.pdf'}
        width="800px"
        height="800px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
    );
}

export default Resume;
