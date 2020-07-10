import React from 'react';
import './Header.scss'

const Footer = () => {
    return (
        <div className='footer'>
        <p className='footer-text'>
            Powered by Shandem™ Tech. 
             | (408) 642-9472 
             | 
             
             </p>
             <a href="mailto:gutierrezjoshuah@gmail.com" className="email">
             <img src={process.env.PUBLIC_URL + '/Icons/cartoonEmail.png'} alt='Icon of a Mail box' className='email-icon'></img>
             </a>
        </div>
    );
}

export default Footer;
