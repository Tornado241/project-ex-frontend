import { Typography } from 'antd';
import clsx from 'clsx';
import React from 'react';

const { Paragraph } = Typography;

export const ParagraphCommon = ({ text = '', rows = 2, ellipsis = false, className = '' }) => {
  return (
    <Paragraph className={clsx({ [className]: className })} ellipsis={ellipsis ? { rows: rows } : false}>
      {text}
    </Paragraph>
  );
};
