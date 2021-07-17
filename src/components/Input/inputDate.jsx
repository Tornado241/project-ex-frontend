import React from 'react';
import clsx from 'clsx';
import { DatePicker } from 'antd';
import moment from 'moment';
import { TIME_FORMAT } from '../../common/constant';

export const disableDate =
  ({ valueDate, startDate }) =>
  current => {
    const disbleFeature = current > moment().endOf('day');
    if (valueDate) {
      const conditionByDate = startDate ? current > moment(valueDate).endOf('day') : current < moment(valueDate).endOf('day');
      return disbleFeature || conditionByDate;
    }
    return current && current > moment().endOf('day');
  };

export const DateComponent = ({
  field: { name, value },
  form: { touched: formTouched, errors: formErrors },
  label = '',
  prefix = null,
  setFieldValue,
  callbackChangeValue,
  classWrap = '',
  suffix = null,
  placeholder = '',
  className = '',
  disabledDate = undefined,
  ...props
}) => {
  const touched = formTouched[name];
  const errorMessage = formErrors[name];

  const onChangeValue = changeVal => {
    setFieldValue(name, changeVal ? changeVal.unix() * 1000 : '');
  };

  return (
    <div className={clsx('field-wrap', [classWrap] && classWrap)}>
      {label && <label className="field-wrap__label">{label}</label>}
      <DatePicker
        value={value ? moment(value) : ''}
        format={TIME_FORMAT.DATE}
        disabledDate={disabledDate}
        className={`app-date-picker ${className}`}
        onChange={onChangeValue}
        {...props}
      />
      {errorMessage && touched && <span className="required">{errorMessage}</span>}
    </div>
  );
};
