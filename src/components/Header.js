import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <header>
      <div className='left-head'>
      <img src='https://media-exp1.licdn.com/dms/image/C5603AQGb3edBklXoEw/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=1j2KbQROTZ28DTfHwGUN2fh8z28r0KNhBQDijhHbPmQ' className='me'alt='Self-Portrait'></img>
       
      <div className="info">
        <h1 className="name">Joshuah Gutierrez</h1>
        <p className='head-blurb'>Full Stack Software Engineer <br/>Front end Engineer | Lifelong Gamer | Kitchen Wizard
          <br/> 
            <p>
              I'm a 
            </p>
            <p className='icon-list'> 
                <a href="mailto:gutierrezjoshuah@gmail.com" className="email">
                    <img src={process.env.PUBLIC_URL + '/Icons/cartoonEmail.png'} alt='Icon of a Mail box' className='email-icon'></img>
                </a>
                <a href="https://www.linkedin.com/in/joshuah-gutierrez/" target="_blank" rel="noopener noreferrer" className="linkUrl">
                    <img src={process.env.PUBLIC_URL + '/Icons/linkedin.png'} alt='Icon of linkedin' className='linkedin-icon2'></img>
                </a>
                <a href="https://git.generalassemb.ly/Shandem2005" target="_blank" rel="noopener noreferrer" className="github">
                    <img src={process.env.PUBLIC_URL + '/Icons/catopuss.png'} alt='Icon of Github' className='catopuss-icon2'></img>
                </a>
                <p>fill in later </p>
            </p>
         </p>
      </div>
      
      </div>
      <ul>
        <Link to={'/project1'}>
          <div className="note yellow">
        
            <p className='note-text'> Pokemon TCG </p>
          </div>
        </Link>

        <Link to={'/project2'}>
          <div className="note yellow">
            <p className='note-text'>Poke-tracker</p>
          </div>
        </Link>

        <Link to={'/project3'}>
        <div className="note yellow">
          <p className='note-text'>Gayme-it</p>
        </div>
        </Link>

        <Link to={'/project1'}>
          <div className="note yellow">
            <p className='note-text'>Under construction</p>
          </div>
        </Link>
        
        <div className="note yellow">
            <p className='note-text'>CSS Art1</p>
          </div>
          
          <div className="note yellow">
            <p className='note-text'>CSS Art2</p>
          </div>
        </ul>
      
    </header>
  );
}

export default Header;
