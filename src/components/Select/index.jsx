import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const { Option } = Select;

export const SelectComponent = ({
  field: { name, value },
  form: { touched: formTouched, errors: formErrors, values: formValues },
  label = '',
  prefix = null,
  suffix = null,
  defaultValue = null,
  placeholder = '',
  setFieldValue,
  fillterBy = '',
  disabled = false,
  callbackChangeValue,
  iconSelect,
  className = '',
  disabledValueData = [],
  options = [],
  classWrap = '',
  ...props
}) => {
  const [valueFilter, setValueFilter] = useState('');
  const touched = formTouched[name];
  const errorMessage = formErrors[name];

  useEffect(() => {
    if (fillterBy) {
      setValueFilter(formValues[fillterBy]);
    }
  }, [formValues]);

  const handlechangeField = changeVal => {
    setFieldValue(name, changeVal);
    callbackChangeValue && callbackChangeValue({ name, changeVal, oldValue: value });
  };

  return (
    <div className={clsx('field-wrap', [classWrap] && classWrap)}>
      {label && <label className="field-wrap__label">{label.toLocaleUpperCase()}</label>}
      <Select
        className={`app-select ${className}`}
        dropdownClassName="app-select-dropdown"
        defaultValue={defaultValue}
        onChange={handlechangeField}
        placeholder={placeholder}
        disabled={disabled}
        {...props}>
        {options.map(item => (
          <Option
            disabled={!item.is_enabled}
            className={{ 'app-select-option': true, hide: valueFilter && valueFilter === item.value }}
            key={item.id}
            value={item.value}>
            <img className="icon-option" src={item.url} alt={item.label} />
            {item.label}
          </Option>
        ))}
      </Select>
      {errorMessage && touched && <span className="required">{errorMessage}</span>}
    </div>
  );
};
