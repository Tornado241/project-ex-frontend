import { Box } from '../Box';
import { ParagraphCommon } from '../Typography/paragraph';
import React, { useRef } from 'react';
import { Field, Formik } from 'formik';
import { Button, Col, Divider, Row } from 'antd';
import { InputComponent } from '../Input';
import { UploadComponent } from '../Upload';
import { SelectComponent } from '../Select';
import { validateProjectForm } from './validate';
export const FormProject = ({ callbackSubmit, isLoadingListProjectsDetail }) => {
  const initialValues = {
    title: '',
    description: '',
    teacher: '',
    student: '',
    codeStudent: '',
    avatarStudent: '',
    classStudent: '',
    type: 1,
    file: '',
  };
  const formikRef = useRef();

  const onSubmitAdd = values => {
    let formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('teacher', values.teacher);
    formData.append('student', values.student);
    formData.append('codeStudent', values.codeStudent);
    formData.append('avatarStudent', values.avatarStudent[0] || '');
    formData.append('classStudent', values.classStudent);
    formData.append('type', values.type);
    formData.append('file', values.file[0] || '');
    callbackSubmit(formData);
  };

  return (
    <Box className="form-project">
      <ParagraphCommon className="title-form" text="Thêm mới" />
      <Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validateProjectForm} onSubmit={onSubmitAdd}>
        {({ handleSubmit, setFieldValue, handleReset }) => (
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
                name="student"
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
              <UploadComponent setFieldValue={setFieldValue} fieldName="file" />
              <Divider />
            </Col>
            <Col xs={24}>
              <ParagraphCommon className="title-upload" text="Tải lên avatar sinh viên" />
              <UploadComponent setFieldValue={setFieldValue} fieldName="avatarStudent" />
            </Col>
            <Col xs={24}>
              <Divider />
              <Box className="btn-group">
                <Button className="mr-12" onClick={handleReset}>
                  Nhập lại
                </Button>
                <Button type="primary" loading={isLoadingListProjectsDetail} onClick={handleSubmit}>
                  Thêm mới
                </Button>
              </Box>
            </Col>
          </Row>
        )}
      </Formik>
    </Box>
  );
};
