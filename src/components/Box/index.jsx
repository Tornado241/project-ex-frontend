import React from 'react';

export const Box = ({ children, ...props }) => {
    return <div {...props}>{children}</div>;
};
