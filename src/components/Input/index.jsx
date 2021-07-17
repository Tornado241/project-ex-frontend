import { Input } from 'antd';
import React from 'react';
import clsx from 'clsx';

export const InputComponent = ({
  field: { name, value },
  form: { touched: formTouched, errors: formErrors },
  label = '',
  prefix = null,
  setFieldValue,
  callbackChangeValue,
  classWrap = '',
  suffix = null,
  placeholder = '',
  maxLength = 256,
  className = '',
  node = '',
  ...props
}) => {
  const touched = formTouched[name];
  const errorMessage = formErrors[name];

  const handlechangeField = event => {
    const valueEvent = event.target.value;
    setFieldValue(name, valueEvent);
    callbackChangeValue && callbackChangeValue({ name, value: valueEvent });
  };

  const handleBlur = () => {
    setFieldValue(name, value?.toString().trim());
  };

  return (
    <div className={clsx('field-wrap', [classWrap] && classWrap)}>
      {label && <label className="field-wrap__label">{label}</label>}
      <Input
        onChange={handlechangeField}
        value={value}
        onBlur={handleBlur}
        className={`app-input ${className}`}
        placeholder={placeholder}
        prefix={prefix}
        maxLength={maxLength}
        suffix={suffix}
        {...props}
      />
      {errorMessage && touched && <span className="required">{errorMessage}</span>}
      {node && <div className="app-input-node">{node}</div>}
    </div>
  );
};
