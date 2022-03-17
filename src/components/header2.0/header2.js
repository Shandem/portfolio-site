import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Icon from '../iconList'
import './header2.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

const header2 = () => {
    return (
        <div>
            <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
                <Link to='/'>
                Joshuah Gutierrez
                </Link>
                </Navbar.Brand>
                <NavDropdown title="Projects" className='color' id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">
                        <Link to={ '/project1'}>Pokemon Trading Card Game</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <Link to={ '/project2'}>Pokemon Tracker</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <Link to={ '/project3'}>Gayme-it</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <Link to={ '/pokeball'}>Poke-ball</Link>
                    </NavDropdown.Item>
            
                    <NavDropdown.Divider />
                    
               
                    <NavDropdown.Item href="#">
                        <Link to={ '/resume'}>Resume</Link>
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="React Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">
                        <Link to={ '/huddle'}>Huddle</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <Link to={ '/tetris'}>Tetris</Link>
                    </NavDropdown.Item>
                     
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item href="#">
                        <Link to={ '/nasa'}>Nasa</Link>
                    </NavDropdown.Item>
                    
                    
                </NavDropdown>

                <NavDropdown title="Live Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">
                        <Link to={ '/mom'}>Gabys's Crafty Things</Link>
                    </NavDropdown.Item>
                </NavDropdown>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
 
                </Nav>
                <Nav>
                        <Icon url='https://www.linkedin.com/in/joshuah-gutierrez/'
                                linkClassName='linkUrl'
                                img='/Icons/linkedin.png'
                                imgClassName='linkedin-icon2-n'
                                />
                        <Icon url='https://github.com/Shandem'
                                linkClassName='github'
                                img='/Icons/catopuss.png'
                                imgClassName='catopuss-icon2-n'
                                />
                        <Icon url='mailto:gutierrezjoshuah@gmail.com'
                            linkClassName='email'
                            img='/Icons/cartoonEmail.png'
                            imgClassName='email-icon-n'
                        />
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </nav>
        </div>
    );
}

export default header2;
