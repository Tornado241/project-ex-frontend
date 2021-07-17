import React from 'react';
import { makeid } from '../../utils';

export const IconCopy = () => {
    const id = makeid(10);
    return (
        <svg className="icon-copy" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.3337 0.833252H3.33366C2.41699 0.833252 1.66699 1.58325 1.66699 2.49992V14.1666H3.33366V2.49992H13.3337V0.833252ZM15.8337 4.16658H6.66699C5.75033 4.16658 5.00033 4.91658 5.00033 5.83325V17.4999C5.00033 18.4166 5.75033 19.1666 6.66699 19.1666H15.8337C16.7503 19.1666 17.5003 18.4166 17.5003 17.4999V5.83325C17.5003 4.91658 16.7503 4.16658 15.8337 4.16658ZM15.8337 17.4999H6.66699V5.83325H15.8337V17.4999Z"
                fill={`url(#${id})`}
            />
            <defs>
                <linearGradient id={id} x1="-0.992605" y1="-2.24628" x2="27.2003" y2="22.1021" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF0A6C" />
                    <stop offset="1" stopColor="#2D27FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};
