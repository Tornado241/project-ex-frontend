import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../components/Box';
import { TableHomePage } from '../components/PageHomeComponent/TableHomePage';
import TableCommon from '../components/Table';

function HomePage() {
  const { t } = useTranslation();
  return (
    <Box className="home home__container">
      <Typography.Title className="title-page mb-30" level={3}>
        Quản lý ĐỒ ÁN, BÀI TẬP LỚN
      </Typography.Title>
      <TableHomePage />
      {/* <TableCommon pagination={false} className="table-home-page" enablePagination={false} bordered dataSource={[]} columns={[]} /> */}
    </Box>
  );
}
export default HomePage;
