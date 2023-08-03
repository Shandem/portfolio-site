import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Icon from '../iconList'
import './header2.scss' 
import { Link } from 'react-router-dom';

const SmallNav = () => {
    return (
         <Navbar collapseOnSelect className='sNavagation' expand="lg" bg="dark" color='$teal-500' variant="dark">
            
             <Navbar bg="dark" id='smallNav'>
       
                <Navbar.Brand >

                    <NavDropdown title="Joshuah Gutierrez" id="collasible-nav-dropdown">
                    
                        <NavDropdown.Item href="#" bg="dark" className="item">
                        <Link to={ '/project1'} className='itemBackground'>Pokemon Trading Card Game</Link>
                        </NavDropdown.Item>
                        
                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/project2'} className='itemBackground'>Pokemon Tracker</Link>
                        </NavDropdown.Item>

                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/project3'} className='itemBackground'>Gayme-it</Link>
                        </NavDropdown.Item>

                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/pokeball'} className='itemBackground'>Poke-ball</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/resume'} className='itemBackground'>Resume</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/huddle'} className='itemBackground'>Huddle</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/tetris'} className='itemBackground'>Tetris</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/nasa'} className='itemBackground'>Nasa</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className="item">
                        <Link to={ '/mom'} className='itemBackground'>Gabys's Crafty Things</Link>
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="#" className="item">
                        
                        <Nav className='iconL'>
                            <Icon url='https://www.linkedin.com/in/joshuah-gutierrez/'
                                    linkClassName='linkUrl '
                                    img='/Icons/linkedin.png'
                                    imgClassName='linkedin-icon'
                                    />
                            <Icon url='https://github.com/Shandem'
                                    linkClassName='github-icon'
                                    img='/Icons/catopuss.png'
                                    imgClassName='catopuss-icon'
                                    />
                            <Icon url='mailto:gutierrezjoshuah@gmail.com'
                                linkClassName='email'
                                img='/Icons/cartoonEmail.png'
                                imgClassName='browser-icon'
                            />

                        </Nav>
                    </NavDropdown.Item>

                </NavDropdown>
            </Navbar.Brand>
    </Navbar>
</Navbar>

    );
}

export default SmallNav;
