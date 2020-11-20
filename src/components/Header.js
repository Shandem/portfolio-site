import React from 'react';
import Icon from './iconList'
import './Header.scss'
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <header>
      <div className='left-head'>
      <img src={process.env.PUBLIC_URL + 'me.jpg'} alt='me' className='me'></img>
       
      <div className="info">
        <h1 className="name">Joshuah Gutierrez</h1>
        <p className='head-blurb'>Full Stack Software Engineer <br/>Front end Engineer | Lifelong Gamer | Kitchen Wizard
          <br/> 

            <p className='icon-list'> 

              <Icon url='mailto:gutierrezjoshuah@gmail.com'
                      linkClassName='email'
                      img='/Icons/cartoonEmail.png'
                      imgClassName='email-icon'
                
                      />
               <Icon url='https://www.linkedin.com/in/joshuah-gutierrez/'
                      linkClassName='linkUrl'
                      img='/Icons/linkedin.png'
                      imgClassName='linkedin-icon2'
                
                      />
              <Icon url='https://github.com/Shandem'
                      linkClassName='github'
                      img='/Icons/catopuss.png'
                      imgClassName='catopuss-icon2'
                
                      />
                <p className='about-blurb'>Full-stack engineer looking for 
                a Front-end position. A graduate of General Assembly with 
                a history in Hospitality management that gives me unique project 
                management insight, valuable to any engineering team. A highly 
                motivated individual and eager to become an asset to any team.
</p>
            </p>
         </p>
      </div>
      <div className='directions'>
      <div className="note yellow yellow-direction">
            <p className='note-direction'> Click on the Post-its to change the channel</p>
          </div></div>
      </div>
      
      <br/>
      <ul>
        <Link to={'/project1'}>
          <div className="note yellow">
        
            <p className='note-text pokemonF'> Project1 <br/>Pokemon TCG </p>
          </div>
        </Link>

        <Link to={'/project2'}>
          <div className="note yellow">
            <p className='note-text pokemonF'> Project2 <br/> Poke-tracker</p>
          </div>
        </Link>

        <Link to={'/project3'}>
        <div className="note yellow">
          <p className='note-text gaymeitF'>Project3 <br/>Gayme-it</p>
        </div>
        </Link>

        <Link to={ '/huddle'}>
            <div className="note yellow">
              <p className='note-text huddleF'>Huddle Landing page </p>
            </div>
        </Link>

        <Link to={ '/tetris'}>
            <div className="note yellow">
              <p className='note-text tetrisF'>Tetris w/React </p>
            </div>
        </Link>
           
        
        <Link to={ '/pokeball'}>
          <div className="note yellow">
              <p className='note-text pokemonF'>CSS Art1 <br/>Pokeball</p>
            </div>
          </Link>

          <Link to={ '/rotom'}>
            <div className="note yellow">
              <p className='note-text pokemonF '>CSS Art2 <br/>Rotom </p>
            </div>
          </Link>
          <Link to={ '/mom'}>
            <div className="note yellow">
              <p className='note-text resumeF'>Gabys Crafty Things </p>
            </div>
            </Link>

            <Link to={ '/resume'}>
            <div className="note yellow">
              <p className='note-text resumeF'>Resume </p>
            </div>
            </Link>
        </ul>
      
    </header>
  );
}

export default Header;
