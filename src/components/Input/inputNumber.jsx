import React, { useEffect } from 'react';
import { InputNumber } from 'antd';
import { convertValueBigNumber } from '../../utils';

export const InputNumberComponent = ({
  field: { name, value },
  form: { touched: formTouched, errors: formErrors },
  label = '',
  prefix = null,
  setFieldValue,
  callbackChangeValue,
  classWrap = '',
  suffix = null,
  maxlengthDecimal = 18,
  placeholder = '',
  showError = true,
  className = '',
  ...props
}) => {
  const touched = formTouched[name];
  const errorMessage = formErrors[name];

  const callbackEmptyField = () => {
    setFieldValue(name, '');
    callbackChangeValue && callbackChangeValue({ name, value: '' });
  };

  const isOverLengthDeimal = value => {
    const indexOfComa = value.toString().indexOf('.');
    const coutnDecimal = value.toString().substr(indexOfComa, value.length).length;

    if (indexOfComa !== -1 && coutnDecimal > maxlengthDecimal) {
      return true;
    }
    return false;
  };

  const handlechangeField = eventValue => {
    if (!eventValue) {
      eventValue = '';
    } else {
      eventValue = convertValueBigNumber(eventValue, false);
      if (isOverLengthDeimal(eventValue)) return;
    }
    setFieldValue(name, eventValue || '');
    callbackChangeValue && callbackChangeValue({ name, value: eventValue });
  };

  useEffect(() => {
    if (value && isOverLengthDeimal(convertValueBigNumber(value, false))) {
      callbackEmptyField();
    }
  }, []);

  return (
    <div className={`field-wrap ${classWrap}`}>
      {label && <label className="field-wrap__label">{label.toLocaleUpperCase()}</label>}
      <InputNumber
        onChange={handlechangeField}
        value={value}
        min={0}
        className={`app-input ${className}`}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        {...props}
      />
      {errorMessage && showError && touched && <span className="required">{errorMessage}</span>}
    </div>
  );
};
