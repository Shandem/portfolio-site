import React from 'react';
import Icon from './iconList'
import './Project.scss';

const Huddle = () => {
    return (
        <div className='project huddlecontain'>
            <img src={process.env.PUBLIC_URL + '/moms-site.png'} className='screenshot huddle' 
                alt='Screen Shot of my moms craft site'></img>
            <div className='Tcontainer'>
                <h3>Gaby's Crafty Things</h3>
                <p className="grad">Built with React</p>

                <h5>This site was built for a client and has live traffic</h5>

                <h6 className='huddle-icons'>

                    <Icon url='https://github.com/Shandem/Moms-static-site'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon'
                        linkText='Client'
                    />
                    <Icon url='http://gabyscraftythings.org'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon'
                        linkText=' Live'
                    />    
                </h6>

                <p className='Tblurb'> 
                Gaby sells her Christmas decorations every year to help pay for that year's presents.
                    Covid has put a stop to the arts and crafts fair but not Gaby. She wanted a simple site 
                    that would act as a catalog and provide a direct means of communication. Using flexbox 
                    and a few media queries, I made it is fully responsive for mobile and a section that allows 
                    customers to send an email directly to gaby without leaving the home screen.
                </p>

            </div>
    </div>
    );
}

export default Huddle;
