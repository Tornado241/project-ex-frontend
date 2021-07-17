import { Col, Typography } from 'antd';
import React from 'react';

export const ColContent = ({ title, options, classWrap, colObject = {} }) => {
  return (
    <Col {...colObject} className={`footer-col ${classWrap}`}>
      <Typography.Paragraph className="title-2">{title}</Typography.Paragraph>
      <ul>
        {options.map((item, index) => (
          <li key={index}>
            <a className="dec-1" target="_blank" href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </Col>
  );
};
