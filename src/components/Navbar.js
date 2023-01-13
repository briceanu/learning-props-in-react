import React from 'react';
import airbnb from '../assets/airbnb.svg';
// eslint-disable-next-line
import navbar from '../style/navbar.scss';

function Navbar() {
  return (
    <nav className='nav_container'>
      <div className='logo_container'>
        <img src={airbnb} alt='airbnb logo' />
        <h3>airbnb</h3>
      </div>
    </nav>
  );
}

export default Navbar;
