import React from 'react';
import clsx from 'clsx';
import Checkbox from 'antd/lib/checkbox/Checkbox';

export const CheckBoxComponent = ({
  field: { name, value },
  form: { touched: formTouched, errors: formErrors },
  label = '',
  setFieldValue,
  callbackChangeValue,
  classWrap = '',
  className = '',
  ...props
}) => {
  const onChange = e => {
    setFieldValue(name, e.target.checked);
  };

  const touched = formTouched[name];
  const errorMessage = formErrors[name];
  const error = touched && (errorMessage !== '') & !value;
  return (
    <div className={clsx('field-wrap', error && 'error', [classWrap] && classWrap)}>
      <Checkbox checked={value} onChange={onChange}>
        {label}
      </Checkbox>
    </div>
  );
};
