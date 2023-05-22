import React from 'react';
//images
import Logo from '../assets/logo.svg';
// link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* button */}
          <button className='btn btn-sm'></button>
        </div>
      </div>
    </header>
  )
};

export default Header;
