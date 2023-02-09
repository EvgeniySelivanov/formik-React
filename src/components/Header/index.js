import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src='/logo.png' alt='logo squadhelp' />
      </Link>
      {(pathname === '/' || pathname === '/signup') ?
       <button>
        <Link className={styles.link} to='/login'>Log In</Link>
      </button> :
       <button>
        <Link className={styles.link} to='/signup'>Signup</Link>
      </button>}

    </header>
  );
}
export default Header;
