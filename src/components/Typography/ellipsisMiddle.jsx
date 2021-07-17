import { Typography } from 'antd';
import clsx from 'clsx';
import React from 'react';

const { Text } = Typography;

const EllipsisMiddle = ({ suffixCount, preffixCount = 2, className, children }) => {
    const start = children.slice(0, preffixCount).trim();
    const suffix = children.slice(-suffixCount).trim();
    return (
        <Text className={clsx({ [className]: className })} ellipsis={{ suffix }}>
            {`${start}...`}
        </Text>
    );
};

export const EllipsisMiddleCommon = ({ text = '', ...props }) => {
    return <EllipsisMiddle {...props}>{text}</EllipsisMiddle>;
};
