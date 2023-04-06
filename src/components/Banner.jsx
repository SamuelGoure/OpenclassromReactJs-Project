import React from 'react';
import '../styles/Banner.css';
import logo from'../asserts/logo.png'
import Recommandation from '../Recommandation';



function Banner  ()  {
    const title = 'La maison jungle'

     const date = new Date().getMonth()
       const verification = date <= -1 && date >= 5
       console.log(verification)


    return (
        <>
        <div className='Lmj-banner'>

            <img src={logo} alt="la maison jungle" className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
        <Recommandation/>
        
        </>
    );
};

export default Banner;