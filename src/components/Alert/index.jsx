import { Alert } from 'antd';
import clsx from 'clsx';
import React from 'react';

export const AlertCommon = {
    WarningCenter: ({ message = '', className = '' }) => {
        return <Alert className={clsx('app-alert txt-center', [className] && className)} message={message} type="warning" />;
    },
};
