import * as Yup from 'yup';

export const NAME_SCHEMA = Yup
  .string('Must be string')
  .trim()
  .min(3, 'Must be more 4 letters')
  .max(15, 'Must be less 15 letters')
  .matches(/^[A-Z][a-z]{4,15}$/, 'Must be only latine  letter')
  .required('Required!');

export const PASS_SCHEMA = Yup
  .string()
  .trim()
  .min(8, 'Must be more 8 symbole')
  .max(16, 'Must be less 16 symbole')
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/, 'Check password')
  .required('Required!');

export const PASS_CONFIRM_SCHEMA = Yup
  .string()
  .oneOf([Yup.ref('password')])
  .required('Required!');

export const LOG_IN_SCHEMA = Yup

  .string('Must be string')
  .trim()
  .min(4, 'Must be more 4 letters')
  .max(20, 'Must be less 20 letters')
  .matches(/^[a-z]{4,15}$/, 'Must be only latine lowercase letter')
  .required('Required!');

export const EMAIL_SCHEMA = Yup
  .string()
  .email()
  .required('Required');

export const RADIO_SCHEMA=Yup.string().required("A radio option is required");




export const SIGN_IN_SCHEMA = Yup.object(
  {
    login: LOG_IN_SCHEMA,
    password: PASS_SCHEMA
  }
);

export const SIGN_UP_SCHEMA = Yup.object(
  {
    firstName: NAME_SCHEMA,
    lastName: NAME_SCHEMA,
    displayName: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    password: PASS_SCHEMA,
    passwordConfirm: PASS_CONFIRM_SCHEMA,
    radio:RADIO_SCHEMA
  }
)

//gr3at@3wdsG


