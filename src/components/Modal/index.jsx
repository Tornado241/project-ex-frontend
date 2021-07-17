import { Typography } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { IconClose } from '../../resources/icons/close_icon';

export const ModalCommon = ({ className = '', visible = false, width = 500, toggleModal, iconClose = true, children, title = '', ...props }) => {
  return (
    <Modal
      className={`app-modal ${className}`}
      width={width}
      title={''}
      closable={iconClose}
      closeIcon={iconClose ? <IconClose onClick={toggleModal} /> : false}
      visible={visible}
      footer={false}
      {...props}>
      {title && <Typography.Paragraph className="modal-title">{title}</Typography.Paragraph>}
      {children}
    </Modal>
  );
};
