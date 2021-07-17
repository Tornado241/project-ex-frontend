import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParamsProject } from '../../hooks/hookProject';
import { projectActions } from '../../redux/actions/projectActionCreators';
import { Box } from '../Box';
import TableCommon from '../Table';
import { ParagraphCommon } from '../Typography/paragraph';
import { StatusProject } from './StatusProject';
import moment from 'moment';
import { TIME_FORMAT } from '../../common/constant';
import { LoadingCircleComponent } from '../Spin/CicleComponentLoad';
import { AvatarStudent } from './AvatarStudent';

export const TableHomePage = ({ callbackViewDetail }) => {
  const dipatch = useDispatch();

  const { paramsProject } = useParamsProject();
  const { totalPages, currentPage } = paramsProject;

  const { projects, totalProjects, isLoadingListProjects, isLoadingListProjectsDetail } = useSelector(store => store.projectReducer);

  useEffect(() => {
    dipatch(projectActions.getAllProject());
  }, []);

  useEffect(() => {
    if (!isLoadingListProjectsDetail) {
      dipatch(projectActions.getAllProject(paramsProject));
    }
  }, [isLoadingListProjectsDetail]);

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
      render: (value, row) => <AvatarStudent avatar={row.avatarStudent} name={value} />,
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
    {
      title: 'Ngày tạo',
      width: '100px',
      render: (value, row) => (
        <Box onClick={callbackViewDetail(row)} className="lb-detail">
          Xem chi tiết
        </Box>
      ),
    },
  ];
  return (
    <LoadingCircleComponent spinning={isLoadingListProjects}>
      <TableCommon bordered={false} columns={columns} dataSource={projects} current={currentPage} total={totalProjects} pageSize={totalPages} />
    </LoadingCircleComponent>
  );
};
