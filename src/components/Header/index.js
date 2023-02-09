import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <Link to='/'>
        <img src='/logo.png' alt='logo squadhelp' />
      </Link>
      {(pathname === '/' || pathname === '/signup') ? <Link to='/login'>Log In</Link> : <Link to='/signup'>Sign Up</Link>}

    </header>
  );
}
export default Header;
