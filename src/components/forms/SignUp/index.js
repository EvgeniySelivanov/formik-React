import React from 'react';
import { Form, Formik, Field } from 'formik';
import InputWrapper from '../InputWrapper/index';
import styles from './SignUp.module.scss';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSCHEMAS';
import RadioBlockWrapper from '../RadioBlockWrapper/index';
import textRadioLabel from './textRadioLabel.json'

const initialValues = {

  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  role:''

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
          
            <RadioBlockWrapper name="role" textRadioLabel={textRadioLabel}  type="radio"/>

            <Field type='submit' value='Create account' />
          </Form>
        )
      }}
    </Formik>
  );
}

export default SignUp;
