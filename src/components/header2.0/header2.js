import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Icon from '../iconList'
import './header2.scss' 
import { Link } from 'react-router-dom';


const header2 = () => {
    return (
    <nav>
        <Navbar collapseOnSelect className='navagation' expand="lg" bg="dark" color='$teal-500' variant="dark">
            <Navbar.Brand href="#">
                <Link to='/' id='name'>
                Joshuah Gutierrez
                </Link>
            </Navbar.Brand>

                <NavDropdown title="Projects" className='color' id="collasible-nav-dropdown">
                    <NavDropdown.Item className='color' href="#">
                        <Link to={ '/project1'}>Pokemon Trading Card Game</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <Link to={ '/project2'}>Pokemon Tracker</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <Link to={ '/project3'}>Gayme-it</Link>
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="#">
                        <Link to={ '/pokeball'}>Poke-ball</Link>
                    </NavDropdown.Item>
            
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

                <Nav className='nIconList'>
                        <Icon url='https://www.linkedin.com/in/joshuah-gutierrez/'
                                linkClassName='linkUrl '
                                img='/Icons/linkedin.png'
                                imgClassName='linkedin-icon2-n nIcon'
                                />
                        <Icon url='https://github.com/Shandem'
                                linkClassName='github '
                                img='/Icons/catopuss.png'
                                imgClassName='catopuss-icon2-n nIcon'
                                />
                        <Icon url='mailto:gutierrezjoshuah@gmail.com'
                            linkClassName='email'
                            img='/Icons/cartoonEmail.png'
                            imgClassName='email-icon-n nIcon'
                        />
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        


        <Navbar bg="dark" className='smallNav'>
            <Navbar.Brand>
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
                    
                    <Nav className='sIconList'>
                        <Icon url='https://www.linkedin.com/in/joshuah-gutierrez/'
                                linkClassName='linkUrl '
                                img='/Icons/linkedin.png'
                                imgClassName='linkedin-icon2-n sIcon'
                                />
                        <Icon url='https://github.com/Shandem'
                                linkClassName='github '
                                img='/Icons/catopuss.png'
                                imgClassName='catopuss-icon2-n sIcon'
                                />
                        <Icon url='mailto:gutierrezjoshuah@gmail.com'
                            linkClassName='email'
                            img='/Icons/cartoonEmail.png'
                            imgClassName='email-icon-n sIcon'
                        />

                    </Nav>
                </NavDropdown.Item>

            </NavDropdown>
            </Navbar.Brand>
    </Navbar>

</nav>
    );
}

export default header2;
