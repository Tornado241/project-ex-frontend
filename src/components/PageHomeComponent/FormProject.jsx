import { Box } from '../Box';
import { ParagraphCommon } from '../Typography/paragraph';
import React, { useEffect, useRef } from 'react';
import { Field, Formik } from 'formik';
import { Button, Col, Divider, Row } from 'antd';
import { InputComponent } from '../Input';
import { UploadComponent } from '../Upload';
import { SelectComponent } from '../Select';
import { validateProjectForm } from './validate';
import { getUrlAPI } from '../../utils';
import { SearchOutlined } from '@ant-design/icons';
export const FormProject = ({ callbackSubmit, isLoadingListProjectsDetail, editMode, projectDetail, callbackUpdate }) => {
  const initialValues = {
    title: '',
    description: '',
    teacher: '',
    nameStudent: '',
    codeStudent: '',
    avatarStudent: '',
    classStudent: '',
    type: 1,
    file: '',
  };
  const formikRef = useRef();

  useEffect(() => {
    if (editMode && projectDetail?.title) {
      formikRef.current.handleReset();
      formikRef.current.setValues({
        id: projectDetail?.id,
        title: projectDetail?.title,
        description: projectDetail?.description,
        teacher: projectDetail?.teacher,
        nameStudent: projectDetail?.nameStudent,
        codeStudent: projectDetail?.codeStudent,
        avatarStudent: '',
        classStudent: projectDetail?.classStudent,
        type: projectDetail?.type,
        file: '',
      });
    } else {
      formikRef.current.handleReset();
    }
  }, [editMode, projectDetail]);

  const onSubmitAdd = values => {
    let formData = new FormData();
    console.log(values);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('teacher', values.teacher);
    formData.append('nameStudent', values.nameStudent);
    formData.append('codeStudent', values.codeStudent);
    formData.append('avatarStudent', values.avatarStudent[0]?.size ? values.avatarStudent[0] : editMode ? projectDetail?.avatarStudent : '');
    formData.append('classStudent', values.classStudent);
    formData.append('type', values.type);
    formData.append('file', values.file[0]?.size ? values.file[0] : editMode ? projectDetail?.file : '');
    if (values?.id) {
      callbackUpdate(formData, values.id);
    } else {
      callbackSubmit(formData);
    }
  };

  return (
    <Box className="form-project">
      <ParagraphCommon className="title-form" text={editMode ? 'Cập nhật' : 'Thêm mới'} />
      <Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validateProjectForm} onSubmit={onSubmitAdd}>
        {({ handleSubmit, setFieldValue, handleReset, values }) => (
          <Row gutter={[16, 12]}>
            <Col xs={24}>
              <Field
                name="title"
                placeholder="Ví du: Báo cáo đồ án tốt nghiệp"
                setFieldValue={setFieldValue}
                label="Tiêu đề"
                component={InputComponent}
              />
            </Col>
            <Col xs={24}>
              <Field
                name="description"
                placeholder="Ví du: mô tả về đồ án tốt nghiệp  "
                setFieldValue={setFieldValue}
                label="Mô tả"
                component={InputComponent}
              />
            </Col>
            <Col xs={12}>
              <Field
                name="teacher"
                placeholder="Ví du: Nguyễn Văn A"
                setFieldValue={setFieldValue}
                maxLength="24"
                label="Giáo viên hướng dẫn"
                component={InputComponent}
              />
            </Col>
            <Col xs={12}>
              <Field
                name="nameStudent"
                placeholder="Ví du: Nguyễn Văn B"
                setFieldValue={setFieldValue}
                maxLength="24"
                label="Sinh viên thực hiện"
                component={InputComponent}
              />
            </Col>
            <Col xs={12}>
              <Field
                name="codeStudent"
                maxLength="10"
                placeholder="Ví du: AT....."
                setFieldValue={setFieldValue}
                label="Mã sinh viên"
                component={InputComponent}
              />
            </Col>
            <Col xs={12}>
              <Field
                name="classStudent"
                maxLength="10"
                placeholder="Ví du: AT...."
                setFieldValue={setFieldValue}
                label="Lớp"
                component={InputComponent}
              />
            </Col>
            <Col xs={12}>
              <Field name="type" setFieldValue={setFieldValue} label="Trạng thái" component={SelectComponent} />
            </Col>
            <Col xs={24}>
              <Divider />
              <ParagraphCommon className="title-upload" text="Tải lên file (Word, PDF ...)" />
              {editMode && projectDetail?.file && (
                <>
                  <Button type="link" href={getUrlAPI(projectDetail.file)} target="_blank" icon={<SearchOutlined />}>
                    Xem file
                  </Button>
                  <span className="mr-12">Hoặc</span>
                </>
              )}
              <UploadComponent value={values.file} setFieldValue={setFieldValue} fieldName="file" />
              <Divider />
            </Col>
            <Col xs={24}>
              <ParagraphCommon className="title-upload" text="Tải lên avatar sinh viên" />
              {editMode && projectDetail?.avatarStudent && (
                <>
                  <Button type="link" href={getUrlAPI(projectDetail.avatarStudent)} target="_blank" icon={<SearchOutlined />}>
                    Xem file
                  </Button>
                  <span className="mr-12">Hoặc</span>
                </>
              )}
              <UploadComponent value={values.avatarStudent} setFieldValue={setFieldValue} fieldName="avatarStudent" />
            </Col>
            <Col xs={24}>
              <Divider />
              <Box className="btn-group">
                <Button className="mr-12" onClick={handleReset}>
                  Nhập lại
                </Button>
                {editMode && (
                  <Button type="primary" className="btn-warning" loading={isLoadingListProjectsDetail} onClick={handleSubmit}>
                    Cập nhật
                  </Button>
                )}
                {!editMode && (
                  <Button type="primary" loading={isLoadingListProjectsDetail} onClick={handleSubmit}>
                    Thêm mới
                  </Button>
                )}
              </Box>
            </Col>
          </Row>
        )}
      </Formik>
    </Box>
  );
};
