import React from 'react';
import Icon from './iconList'
import './Project.scss';

const Huddle = () => {
    return (
        <div className='project huddlecontain mContainer'>
            <img src={process.env.PUBLIC_URL + '/moms-site.png'} className='screenshot huddle 1' 
                alt='Screen Shot of my moms craft site'></img>
            <div className='Tcontainer mDiscription'>
            <div className='cardHeader mHeader'>
                <h3>Gaby's Crafty Things</h3>
                <p className="grad">Built with React</p>

                <h5 className='mBuilt'>This site was built for a client and has live traffic</h5>
            </div>  
                <h6 className='huddle-icons mIcons'>

                    <Icon url='https://github.com/Shandem/Moms-static-site'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon icons'
                     
                    />
                    <Icon url='http://gabyscraftythings.org'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon icons'
                     
                    />    
                </h6>

                <p className='Tblurb mBlurb'> 
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
