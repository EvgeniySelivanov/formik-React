import React from 'react';
import { Form, Formik } from 'formik';
import InputWrapper from '../InputWrapper/index';
import styles from './SignUp.module.scss';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSCHEMAS';
const initialValues = {

  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: ''

}
const SignUp = () => {
  const onSubmit = (values, formikBag) => {
    console.group();
    console.log(values);
    console.groupEnd();
    formikBag.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_UP_SCHEMA}>
      {(formikProps) => {
        // console.log(formikProps);
        return (
          <Form className={styles.form}>
            <InputWrapper name='firstName' type='text' placeholder='First name' className={styles.labelRevers} />
            <InputWrapper name='lastName' type='text' placeholder='Last name' className={styles.label} />
            <InputWrapper name='displayName' type='text' placeholder='Display Name' className={styles.labelRevers} />
            <InputWrapper name='email' type='email' placeholder='Email Address' className={styles.label} />
            <InputWrapper name='password' type='password' placeholder='Password' className={styles.labelRevers} />
            <InputWrapper name='passwordConfirm' type='password' placeholder='Password Confirmation' className={styles.label} />
            <div className={styles.radioBox}>
              <div className={styles.singleRadioBtn}>
                <InputWrapper name='radio' type='radio' value='buyer' />
                <div>
                  <h3>Join As a Buyer</h3>
                  <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                </div>
              </div>
              <div className={styles.singleRadioBtn}>
                <InputWrapper name='radio' type='radio' value='marketplace' />
                <div>
                  <h3>Join As a Creative or Marketplace Seller</h3>
                  <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                </div>
              </div>
            </div>


            <input type='submit' value='Create account' />
          </Form>
        )
      }}
    </Formik>
  );
}

export default SignUp;
