import React from 'react';
import { Form, Formik } from 'formik';
import InputWrapper from '../InputWrapper/index';
import styles from './SignIn.module.scss';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSCHEMAS';

const initialValues = {
  login: '',
  password: ''
};
const SignIn = () => {
  const onSubmit = (values, formikBag) => {
    console.group();
    console.log(values);
    // console.log(formikBag);
    console.groupEnd();
    formikBag.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}>
      {(formikProps) => {
        // console.log(formikProps);
        return (
          <Form className={styles.form}>
            <InputWrapper  name='login' type='text' placeholder='your login' className={styles.label} />
            <InputWrapper name='password' type='password' placeholder='your password' className={styles.label} />
            <input type='submit' value='LOGIN' />
          </Form>
        )
      }}
    </Formik>
  );
}

export default SignIn;
