import { Spin } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

export const SpinLoadingCircle = ({ fontSize = 24 }) => {
  const antIcon = <LoadingOutlined style={{ fontSize }} spin />;

  return <Spin className="app-loading-circle" indicator={antIcon} />;
};
