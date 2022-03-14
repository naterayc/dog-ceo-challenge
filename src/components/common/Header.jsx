import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-dog.png'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={Logo} alt='logo' />
        <h1>Dogs</h1>
      </Link>

      <div className='header-sub'>
        <p> Encuentra a tu perrito ideal </p>
      </div>
    </div>
  )
};

export default Header;