import React from 'react';
import SignIn from '../components/forms/SignIn/index';
import styles from './Pages.module.scss';

const SignInPage = () => {
  return (
    <div className={styles.page}>
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <SignIn/>
    </div>
  );
}

export default SignInPage;
