import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParamsProject } from '../../hooks/hookProject';
import { projectActions } from '../../redux/actions/projectActionCreators';
import { Box } from '../Box';
import TableCommon from '../Table';
import { ParagraphCommon } from '../Typography/paragraph';
import { UserOutlined } from '@ant-design/icons';
import { StatusProject } from './StatusProject';
import { getUrlAPI } from '../../utils';
import moment from 'moment';
import { TIME_FORMAT } from '../../common/constant';

export const TableHomePage = () => {
  const dipatch = useDispatch();

  const { paramsProject } = useParamsProject();
  const { totalPages, currentPage } = paramsProject;

  const { projects, totalProjects } = useSelector(store => store.projectReducer);

  useEffect(() => {
    dipatch(projectActions.getAllProject());
  }, []);

  const columns = [
    {
      title: 'ID',
      width: '20px',
      dataIndex: 'id',
    },
    {
      title: 'Sinh Viên',
      width: '150px',
      dataIndex: 'nameStudent',
      render: (value, row) => (
        <Box className="flx-center align-left">
          {row?.avatarStudent ? <Avatar src={getUrlAPI(row.avatarStudent)} /> : <Avatar icon={<UserOutlined />} />}
          <ParagraphCommon className="mb-0 ml-4" text={value} />
        </Box>
      ),
    },
    {
      title: 'Tiêu Đề',
      width: '300px',
      dataIndex: 'title',
      render: value => <ParagraphCommon text={value} rows={2} className="title-project" ellipsis />,
    },
    {
      title: 'Giáo Viên',
      width: '100px',
      dataIndex: 'teacher',
      render: value => value,
    },
    {
      title: 'Trạng thái',
      width: '100px',
      dataIndex: 'type',
      render: value => <StatusProject type={value} />,
    },
    {
      title: 'Ngày tạo',
      width: '100px',
      dataIndex: 'createdAt',
      render: value => moment(value).format(TIME_FORMAT.DATE_TIME),
    },
  ];
  return <TableCommon bordered={false} columns={columns} dataSource={projects} current={currentPage} total={totalProjects} pageSize={totalPages} />;
};
