import React from 'react';
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
                <a href="mailto:gutierrezjoshuah@gmail.com" className="email">
                    <img src={process.env.PUBLIC_URL + '/Icons/cartoonEmail.png'} alt='Icon of a Mail box' className='email-icon'></img>
                </a>
                <a href="https://www.linkedin.com/in/joshuah-gutierrez/" target="_blank" rel="noopener noreferrer" className="linkUrl">
                    <img src={process.env.PUBLIC_URL + '/Icons/linkedin.png'} alt='Icon of linkedin' className='linkedin-icon2'></img>
                </a>
                <a href="https://github.com/Shandem" target="_blank" rel="noopener noreferrer" className="github">
                    <img src={process.env.PUBLIC_URL + '/Icons/catopuss.png'} alt='Icon of Github' className='catopuss-icon2'></img>
                </a>
                <p className='about-blurb'>I am a Full-stack engineer with a history in Hospitality management. 
                I am looking for a company that can utilize my unique skill set and challenge me outside of my comfort zone
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
        
            <p className='note-text'> Project1 <br/>Pokemon TCG </p>
          </div>
        </Link>

        <Link to={'/project2'}>
          <div className="note yellow">
            <p className='note-text'> Project2 <br/> Poke-tracker</p>
          </div>
        </Link>

        <Link to={'/project3'}>
        <div className="note yellow">
          <p className='note-text'>Project3 <br/>Gayme-it</p>
        </div>
        </Link>

        <Link to={'/under'}>
          <div className="note yellow">
            <p className='note-text'>Under construction</p>
          </div>
        </Link>
        
        <Link to={ '/pokeball'}>
          <div className="note yellow">
              <p className='note-text'>CSS Art1 <br/>Pokeball</p>
            </div>
          </Link>

          <Link to={ '/rotom'}>
            <div className="note yellow">
              <p className='note-text'>CSS Art2 <br/>Rotom </p>
            </div>
          </Link>

            <Link to={ '/resume'}>
            <div className="note yellow">
              <p className='note-text'>Resume </p>
            </div>
            </Link>
           

        </ul>
      
    </header>
  );
}

export default Header;
