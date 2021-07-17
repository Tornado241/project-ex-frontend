import { Typography } from 'antd';
import React from 'react';
import { IconCopy } from '../../resources/icons/icon_copy';
import { IconCopyCheck } from '../../resources/icons/icon_copy_check';

export const CopyIcon = ({ value = 'default copy' }) => {
  return <Typography.Paragraph className="copy-icon" copyable={{ text: value, icon: [<IconCopy />, <IconCopyCheck />] }}></Typography.Paragraph>;
};
