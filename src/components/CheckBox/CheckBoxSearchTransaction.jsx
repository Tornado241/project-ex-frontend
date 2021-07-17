import { Checkbox, Divider } from 'antd';
import { Row, Col } from 'antd';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SWAP_STATUS } from '../../common/constant';

const CheckboxGroup = Checkbox.Group;

const OPTIONs = [SWAP_STATUS.PROCESSING, SWAP_STATUS.UNCLAIMED, SWAP_STATUS.FAILED, SWAP_STATUS.CLAIMED];

export const CheckBoxSearchTransaction = ({
  field: { name, value },
  form: { touched: formTouched, errors: formErrors },
  setFieldValue,
  classWrap,
}) => {
  const { t } = useTranslation();
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);

  const onChange = list => {
    setIndeterminate(!!list.length && list.length < OPTIONs.length);
    setCheckAll(list.length === OPTIONs.length);
    setFieldValue(name, list);
  };

  const onCheckAllChange = e => {
    let optionData = OPTIONs.filter(item => !!item);
    setFieldValue(name, e.target.checked ? optionData : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    if (!value) {
      setCheckAll(true);
    }
  }, [value]);

  return (
    <div className={clsx('field-wrap', [classWrap] && classWrap)}>
      <Row gutter={[12, 12]}>
        <Col span={8}>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            {t('common.all')}
          </Checkbox>
        </Col>
        <Col span={16}>
          <CheckboxGroup value={value} onChange={onChange}>
            <Row gutter={[12, 12]}>
              {OPTIONs.map(item => (
                <Col key={item} span={12}>
                  {item && <Checkbox value={item}>{t(`swap_status.${item}`)}</Checkbox>}
                </Col>
              ))}
            </Row>
          </CheckboxGroup>
        </Col>
      </Row>
    </div>
  );
};
