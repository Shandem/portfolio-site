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
        <p>Full Stack Software Engineer</p>
      </div>
      
      </div>
      <div className="links">
        <ul>
        <div className="note yellow">

        </div>
        <div className="note yellow">

        </div>
        <div className="note yellow">

        </div>
          
          <li>  <Link to={'/'}>Home</Link></li>
          <li>  <Link to={'/newhome'}>New Home</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
