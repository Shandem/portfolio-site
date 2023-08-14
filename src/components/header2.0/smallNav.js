import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Icon from '../iconList'
import { PopupWidget } from 'react-calendly'
import './header2.scss' 
import { Link } from 'react-router-dom';

const SmallNav = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile( window.outerWidth <= 767 ); // Set the breakpoint for mobile width
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
      // Call the handler on initial load
      handleResize();
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
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
                    
                    <NavDropdown.Item href="#">
                        <Link to={ '/Mixellance'}>Mixellance</Link>
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
            {isMobile ? (<PopupWidget
          className='schedule'
          url="https://calendly.com/gutierrezjoshuah/15min"
          /*
          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
          */
          rootElement={document.getElementById("root")}
          text="Let's chat! Schedule a 15-minute meeting"
          textColor="#ffffff"
          color="#00a2ff"
        
        />) : 
        ( '' )}
    </Navbar>
</Navbar>

    );
}

export default SmallNav;
