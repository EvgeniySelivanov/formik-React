import React from 'react';
import SignUp from '../components/forms/SignUp/index';
import styles from './Pages.module.scss';


const SignUpPage = () => {
  return (
    <div className={styles.page}>
      <h1>CREATE AN ACCOUNT</h1>
      <p>We always keep your name and email address private.</p>
      <SignUp/>
    </div>
  );
}

export default SignUpPage;
