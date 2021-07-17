import { Spin } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

export const LoadingCircleComponent = ({ fontSize = 24, children, spinning }) => {
  const antIcon = <LoadingOutlined style={{ fontSize }} spin />;

  return (
    <Spin spinning={spinning} indicator={antIcon}>
      {children}
    </Spin>
  );
};
