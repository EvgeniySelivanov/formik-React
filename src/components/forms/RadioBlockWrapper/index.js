import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './RadioBlockWrapper.module.scss';

const RadioBlockWrapper = (props) => {
  console.log(styles);

  const { name ,textRadioLabel, ...rest} = props;
  return (
    <div className={styles.radio}>
      {textRadioLabel.map((text, index) => (
      <label key={index} className={styles.radioChild}>
        <Field name={name} value={text.role} {...rest} />
          <div>
            <h3>{text.h3}</h3>
            <p>{text.p}</p>
          </div>
       
      </label>
      ))}

      <ErrorMessage name={name} component="div" className={styles.error}/>
    </div>
  );
}

export default RadioBlockWrapper;
