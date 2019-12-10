import React from 'react';

interface Props {
    size?: string;
}

const RocketSVG = ({ size = '48' }: Props) => (
    <svg width={size} height={size} viewBox="0 0 48 48" focusable="false">
        <g fill="none" fillRule="evenodd">
            <path
                d="M15.354 21.884a28.552 28.552 0 019.087-9.152c7.218-4.548 15.673-5.446 23.24-3.188-1.304 7.848-5.81 15.117-13.029 19.665a28.277 28.277 0 01-12.142 4.223l-7.156-11.548z"
                fill="#6d9dcd"
            />
            <path
                d="M16.445 20.25l8 12.91a28.17 28.17 0 01-1.935.272l-7.156-11.548c.344-.556.708-1.1 1.091-1.634z"
                fill="#458BD1"
            />
            <path
                d="M22.002 14.45a28.5 28.5 0 00-5.315 5.469 13.136 13.136 0 00-7.822-.698 13.218 13.218 0 013.374-3.044 13.068 13.068 0 019.763-1.727zm10.05 16.216A13.264 13.264 0 0122.04 40.48a13.414 13.414 0 002.807-7.394 28.21 28.21 0 007.204-2.42zM29.827 20.794a13.242 13.242 0 01-5.534 7.093 13.06 13.06 0 01-8.748 1.906 13.242 13.242 0 015.533-7.093 13.06 13.06 0 018.749-1.906z"
                fill="#3E79B5"
            />
            <path
                d="M18.263 32.3a.577.577 0 01-.181.791l-10.91 6.874a.566.566 0 01-.785-.182.577.577 0 01.181-.791l10.91-6.874a.566.566 0 01.785.182zM12.4 31.482a.577.577 0 01-.18.791L1.308 39.148a.566.566 0 01-.784-.183.577.577 0 01.18-.79L11.617 31.3a.566.566 0 01.784.182zM14.241 25.81a.577.577 0 01-.18.792L3.15 33.476a.566.566 0 01-.785-.183.577.577 0 01.181-.79l10.91-6.875a.566.566 0 01.785.183z"
                fill="#FFF"
            />
        </g>
    </svg>
);

export default RocketSVG;
