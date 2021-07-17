import { Button, Col, Divider, Row } from 'antd';
import { ParagraphCommon } from '../Typography/paragraph';
import React from 'react';
import { Box } from '../Box';
import { AvatarStudent } from './AvatarStudent';
import moment from 'moment';
import { TIME_FORMAT } from '../../common/constant';
import { StatusProject } from './StatusProject';
import { getUrlAPI } from '../../utils';
import { EditOutlined, SearchOutlined } from '@ant-design/icons';

const ProjectInfo = ({ label, value }) => {
  return (
    <Box className="project-detail__info flx-center align-left">
      <ParagraphCommon className="label" text={label} />
      <ParagraphCommon className="value" text={value} />
    </Box>
  );
};

export const ProjectDetail = ({ project, callbackEdit, callbackRemove }) => {
  return (
    project?.title && (
      <Box className="project-detail">
        <ParagraphCommon className="project-detail__title mt-12" text={project?.title} />
        <ParagraphCommon className="project-detail__description mt-2 mb-26" tooltip={true} ellipsis rows={5} text={project?.description} />
        <Divider />

        <Row gutter={[16, 0]}>
          <Col xs={12}>
            <ProjectInfo label="ID:" value={project?.id} />
          </Col>
          <Col xs={12}>
            <ProjectInfo label="Giáo viên:" value={project?.teacher} />
          </Col>
        </Row>
        <Divider />

        <Row>
          <Col xs={12}>
            <ProjectInfo label="Sinh viên:" value={<AvatarStudent avatar={project?.avatarStudent} name={project?.nameStudent} />} />
          </Col>
          <Col xs={12}>
            <ProjectInfo label="Mã sinh viên:" value={project?.codeStudent} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={12}>
            <ProjectInfo label="Lớp:" value={project?.codeStudent} />
          </Col>
          <Col xs={12}>
            <ProjectInfo label="Trạng thái:" value={<StatusProject type={project?.type} />} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={12}>
            <ProjectInfo label="Ngày tạo:" value={moment(project?.createdAt).format(TIME_FORMAT.DATE_TIME)} />
            <Divider />
          </Col>
          <Col xs={12}>
            <ProjectInfo label="Ngày cập nhật:" value={moment(project?.updatedAt).format(TIME_FORMAT.DATE_TIME)} />
            <Divider />
          </Col>
        </Row>
        <Col xs={24}>
          {project?.file ? (
            <Button type="link" href={getUrlAPI(project.file)} target="_blank" icon={<SearchOutlined />}>
              Xem file
            </Button>
          ) : (
            'Chưa upload file'
          )}
        </Col>
        <Divider />
        <Col xs={24}>
          <Box className="btn-group mt-30">
            <Button danger className="mr-12" onClick={callbackRemove}>
              Xóa
            </Button>
            <Button type="primary" icon={<EditOutlined />} onClick={callbackEdit}>
              Chỉnh sửa
            </Button>
          </Box>
        </Col>
      </Box>
    )
  );
};
