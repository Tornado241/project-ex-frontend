import React from 'react';

function IconLogo({ className }) {
    return (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path
                    d="M27 0.512695L5 0.512695C2.23858 0.512695 0 2.75127 0 5.51269L0 27.5127C0 30.2741 2.23858 32.5127 5 32.5127H27C29.7614 32.5127 32 30.2741 32 27.5127L32 5.5127C32 2.75127 29.7614 0.512695 27 0.512695Z"
                    fill="url(#paint0_linear)"
                />
                <path d="M24.8863 8.04135H13.6545V9.71383H24.8863V8.04135Z" fill="white" />
                <path d="M9.45679 25.8194L9.45679 8.04144H7.1127L7.1127 25.8194H9.45679Z" fill="white" />
                <path d="M24.8888 25.8181L24.8888 15.0698H22.5447V25.8181H24.8888Z" fill="white" />
                <path d="M22.5449 25.8036L7.11096 8.04135H9.45505L24.8889 25.8036H22.5449Z" fill="white" />
                <path d="M15.9986 13.6834V8.04135H13.6545V10.9839L15.9986 13.6834Z" fill="white" />
                <path d="M24.8863 10.9839H17.4412V12.6563H24.8863V10.9839Z" fill="white" />
                <path d="M19.7879 17.9848V10.9839H17.4412V15.2853L19.7879 17.9848Z" fill="white" />
            </g>
            <defs>
                <linearGradient id="paint0_linear" x1="-5.37519" y1="-4.86249" x2="44.3639" y2="44.8766" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF0A6C" />
                    <stop offset="1" stopColor="#2D27FF" />
                </linearGradient>
                <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" transform="translate(0 0.512695)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default IconLogo;

export const getLogo = () => {
    return `        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path
                    d="M27 0.512695L5 0.512695C2.23858 0.512695 0 2.75127 0 5.51269L0 27.5127C0 30.2741 2.23858 32.5127 5 32.5127H27C29.7614 32.5127 32 30.2741 32 27.5127L32 5.5127C32 2.75127 29.7614 0.512695 27 0.512695Z"
                    fill="url(#paint0_linear)"
                />
                <path d="M24.8863 8.04135H13.6545V9.71383H24.8863V8.04135Z" fill="white" />
                <path d="M9.45679 25.8194L9.45679 8.04144H7.1127L7.1127 25.8194H9.45679Z" fill="white" />
                <path d="M24.8888 25.8181L24.8888 15.0698H22.5447V25.8181H24.8888Z" fill="white" />
                <path d="M22.5449 25.8036L7.11096 8.04135H9.45505L24.8889 25.8036H22.5449Z" fill="white" />
                <path d="M15.9986 13.6834V8.04135H13.6545V10.9839L15.9986 13.6834Z" fill="white" />
                <path d="M24.8863 10.9839H17.4412V12.6563H24.8863V10.9839Z" fill="white" />
                <path d="M19.7879 17.9848V10.9839H17.4412V15.2853L19.7879 17.9848Z" fill="white" />
            </g>
            <defs>
                <linearGradient id="paint0_linear" x1="-5.37519" y1="-4.86249" x2="44.3639" y2="44.8766" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF0A6C" />
                    <stop offset="1" stopColor="#2D27FF" />
                </linearGradient>
                <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" transform="translate(0 0.512695)" />
                </clipPath>
            </defs>
        </svg>`;
};
