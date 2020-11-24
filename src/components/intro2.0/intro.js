import React from 'react';


const intro = () => {
    return (
        <div>
            <div className='left-head'>
                <img src={process.env.PUBLIC_URL + 'me.jpg'} alt='me' className='me'></img>
                
                <div className="info">
                    <h1 className="name">Joshuah Gutierrez</h1>
                    <p className='head-blurb'>Fullstack Software Engineer <br/>Front end Engineer | Lifelong Gamer | Kitchen Wizard
                    <br/> 

                        <p className='icon-list'> 

                            <p className='about-blurb'>Full-stack engineer looking for 
                            a Front-end position. A graduate of General Assembly with 
                            a history in Hospitality management that gives me unique project 
                            management insight, valuable to any engineering team. A highly 
                            motivated individual and eager to become an asset to any team.
                            </p>
                        </p>
                    </p>
                </div>
              
                </div>
        </div>
    );
}

export default intro;
