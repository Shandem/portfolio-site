import React from 'react';
import Icon from './iconList'
import './Header.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-text'>
                Powered by Shandem™ Tech. 
                | (408) 642-9472 
                | 
            </p>
            <Icon url='mailto:gutierrezjoshuah@gmail.com'
                linkClassName='email'
                img='/Icons/cartoonEmail.png'
                imgClassName='email-icon'
                />
        </div>
    );
}

export default Footer;
