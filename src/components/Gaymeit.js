import React from 'react';
import './Project.css'

const Gaymeit = () => {
    return (
        <div className='project gaymeitcontain'>
        <img src={process.env.PUBLIC_URL + '/gaymeit.png'} className='screenshot gaymeit'alt='Screen Shot of Pokemon Trading Car Game clone'></img>
            <div className='detailContainer'>
                <h4>Gayme-it: A Reddit clone for Gaymers</h4>
                <h5>Solo-project Full stack MERN App <br/>
                Technologies Used: Full-stack MERN app Mongo, Express, React, Node, CSS</h5>
                <h6><a href="https://git.generalassemb.ly/Shandem2005/Project-4-api" target="_blank" rel="noopener noreferrer">API Git-Repo |</a>
                    <a href="https://git.generalassemb.ly/Shandem2005/Project-4-client" target="_blank" rel="noopener noreferrer"> Client Git-Repo |</a>
                    <a href="https://gayme-it.herokuapp.com" target="_blank" rel="noopener noreferrer"> Live version</a>
                </h6>
                <p>The goal of this project was to create a Reddit-clone, focusing on 
                the implementation of karma voting. The Server for this React app was 
                set up as an API.
                </p>
            </div>
        </div>
    );
}

export default Gaymeit;
