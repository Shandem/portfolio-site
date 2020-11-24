import React from 'react';
import Icon from './iconList'
import './Header.scss'
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <header>

      
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
