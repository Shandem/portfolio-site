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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
                <Link to='/'>
                Joshuah Gutierrez
                </Link>
                </Navbar.Brand>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
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
                    <NavDropdown.Item href="#">
                        <Link to={ '/rotom'}>Rotom</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <Link to={ '/huddle'}>Huddle</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <Link to={ '/tetris'}>Tetris</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <Link to={ '/mom'}>Gabys's Crafty Things</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <Link to={ '/resume'}>Resume</Link>
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
                                imgClassName='linkedin-icon2'
                                />
                        <Icon url='https://github.com/Shandem'
                                linkClassName='github'
                                img='/Icons/catopuss.png'
                                imgClassName='catopuss-icon2'
                                />
                        <Icon url='mailto:gutierrezjoshuah@gmail.com'
                            linkClassName='email'
                            img='/Icons/cartoonEmail.png'
                            imgClassName='email-icon'
                        />
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default header2;
