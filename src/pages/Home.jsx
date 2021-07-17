import { Button, Drawer, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '../components/Box';
import { FormProject } from '../components/PageHomeComponent/FormProject';
import { ProjectDetail } from '../components/PageHomeComponent/ProjectDetail';
import { TableHomePage } from '../components/PageHomeComponent/TableHomePage';
import { projectActions } from '../redux/actions/projectActionCreators';

function HomePage() {
  const { t } = useTranslation();
  const [projectDetail, setProjectDetail] = useState({});
  const [visibleModalDetail, setVisibleModalDetail] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [visibleAddProject, setVisibleAddProject] = useState(false);
  const { isLoadingListProjectsDetail } = useSelector(store => store.projectReducer);

  useEffect(() => {
    if (!isLoadingListProjectsDetail) {
      setVisibleAddProject(false);
    }
  }, [isLoadingListProjectsDetail]);

  const dispatch = useDispatch();

  const callbackViewDetail = detail => () => {
    setProjectDetail(detail);
    toggleModalDetail();
  };

  const onAddProject = useCallback(formData => {
    dispatch(projectActions.createProject(formData));
  });

  const toggleModalDetail = () => {
    setVisibleModalDetail(visibleModalDetail => !visibleModalDetail);
  };

  const toggleAddProject = () => {
    setEditMode(false);
    setVisibleAddProject(visibleAddProject => !visibleAddProject);
  };

  const callbackEdit = () => {
    setEditMode(true);
    setVisibleAddProject(true);
  };

  const callbackRemove = () => {};

  return (
    <Box className="home home__container">
      <Typography.Title className="title-page mb-30" level={3}>
        Quản lý ĐỒ ÁN, BÀI TẬP LỚN
      </Typography.Title>
      <Button type="primary" onClick={toggleAddProject} className="mb-12">
        Thêm mới
      </Button>
      <TableHomePage callbackViewDetail={callbackViewDetail} />
      <Drawer width={640} placement="right" onClose={toggleModalDetail} visible={visibleModalDetail}>
        <ProjectDetail callbackEdit={callbackEdit} callbackRemove={callbackRemove} project={projectDetail} />
      </Drawer>
      <Drawer width={640} placement="right" onClose={toggleAddProject} visible={visibleAddProject}>
        <FormProject
          editMode={editMode}
          projectDetail={projectDetail}
          isLoadingListProjectsDetail={isLoadingListProjectsDetail}
          callbackSubmit={onAddProject}
        />
      </Drawer>
    </Box>
  );
}
export default HomePage;
