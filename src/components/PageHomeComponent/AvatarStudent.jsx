import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { getUrlAPI } from '../../utils';
import { Box } from '../Box';
import { ParagraphCommon } from '../Typography/paragraph';

export const AvatarStudent = ({ avatar, name }) => {
  return (
    <Box className="flx-center align-left avatar-app">
      {avatar ? <Avatar size={32} src={getUrlAPI(avatar)} /> : <Avatar size={32} icon={<UserOutlined />} />}
      <ParagraphCommon className="mb-0 ml-4" text={name} />
    </Box>
  );
};
