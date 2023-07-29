import React from 'react';
import Icon from './iconList'
import './Project.scss';

const Huddle = () => {
    return (
        <div className='project huddlecontain'>
            <img src={process.env.PUBLIC_URL + '/Tetris.png'} className='screenshot huddle tShot' 
                alt='Screen Shot of Tetris game over'></img>
            <div className='Tcontainer'>
                <div className='tHeader'>

                <h3 className='tTitle'>Tertis</h3>
                <p className="grad">Built with React & React hooks</p>
                <h5>This was completed witht he assistance of youtube video by |
                    <a href="https://www.youtube.com/watch?v=ZGOaCxX8HIU">freeCodeCamp.org</a> 
                    | "How to build Tetris in React-gamedev tutorial w/ React Hooks"
                    </h5>
                </div>

                <h6 className='huddle-icons tIcons'>


                    <Icon url='https://github.com/Shandem/React-Tetris'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon icons'
                        
                    />
                    <Icon url='https://young-harbor-11054.herokuapp.com'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon icons'
                      
                    />    
                </h6>

                <p className='Tblurb'> This video was a walkthrough on building Tetris with React 
                and React Hooks, more so over, than the Javascript function of the 
                game, there are some bugs. With that in mind, all components were 
                extrapolated down to produce a dry code base. Props were turned to 
                Context in order to avoid prop drilling. Also, the many micro-actions 
                needed to play a game that runs continuously gives opportunities to 
                really understand the life cycle of a Hook. I have provided a link to 
                my codebase and the live site.
                </p>

            </div>
    </div>
    );
}

export default Huddle;
