import { Button } from 'antd';
import React from 'react';
import clsx from 'clsx';

export const ButtonCommon = ({ type = 'primary', outline, className = '', label, ...props }) => {
  return (
    <Button type={outline ? false : type} className={clsx(`app-btn`, [className] && className, outline && 'outline')} {...props}>
      {label}
    </Button>
  );
};
