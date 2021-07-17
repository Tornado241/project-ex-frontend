import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

export const UploadComponent = ({ label = 'Tải file', count = 1, fieldName = '', setFieldValue, value, accept = 'image/*' }) => {
  const [files, setFiles] = useState([]);
  const onBeforeUpload = file => {
    if (files.length >= count) {
      return;
    }
    setFiles(fileState => [...fileState, file]);
  };
  const onRemove = file => {
    setFiles([]);
  };

  useEffect(() => {
    setFieldValue(fieldName, files);
  }, [files]);

  useEffect(() => {
    if (!value) {
      setFiles([]);
    }
  }, [value]);

  return (
    <Upload onRemove={onRemove} fileList={files} beforeUpload={onBeforeUpload}>
      <Button className="mt-4" icon={<UploadOutlined />}>
        {label} ({count} file)
      </Button>
    </Upload>
  );
};
