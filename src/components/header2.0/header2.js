import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './header2.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

const header2 = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Joshuah Gutierrez</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
      
                </Nav>
                <Nav>
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
                        <Link to={ '/mom'}>Mom</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <Link to={ '/resume'}>Resume</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default header2;
