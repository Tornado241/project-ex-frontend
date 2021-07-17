import { Tag } from 'antd';
import React from 'react';
export const StatusProject = ({ type = 1 }) => {
  return (
    <>
      {type == 1 && <Tag color="blue">Đang xem xét</Tag>}
      {type == 3 && <Tag color="geekblue">Đã xong</Tag>}
      {type == 2 && <Tag color="red">Hủy</Tag>}
    </>
  );
};
