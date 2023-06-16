import React from 'react';
//images
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
        
          <img src={Logo} alt='' />
          
          {/* button */}
          <button className='btn btn-sm'></button>
        </div>
      </div>
    </header>
  )
};

export default Header;
