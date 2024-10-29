import React from 'react';
import Logo from '../assets/images/textLogo.png';
import '../stylesheets/Header.css' ;

export default function Header() {
  return (
    <>
      <div className='header-container'>
        <img src={Logo} className='textLogo' />
      </div>
    </>
  );
}
