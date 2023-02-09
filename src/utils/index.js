import * as Yup from 'yup';
export const SIGN_UP_SCHEMA=Yup.object(
  {
    password:Yup.string().matches().required(),
    passwordConfirm:Yup.string().oneOf([Yup.ref('password')]).required(),
  }
)