import { Tag } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const SwapStatus = ({ status = '' }) => {
  const { t } = useTranslation();
  return <Tag className={clsx([status] && status, 'swap-status')}>{t(`swap_status.${status}`)}</Tag>;
};
