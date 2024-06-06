import React from "react";

function Image1() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="303"
            height="275"
            fill="none"
            viewBox="0 0 303 275"
        >
            <g filter="url(#filter0_b_1_6)">
                <path
                    fill="#000"
                    fillOpacity="0.2"
                    d="M0 269.608C0 120.708 120.708 0 269.608 0h27.451A5.941 5.941 0 01303 5.941V235c0 18.856 0 28.284-5.858 34.142C291.284 275 281.856 275 263 275H5.392A5.392 5.392 0 010 269.608z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_b_1_6"
                    width="471"
                    height="443"
                    x="-84"
                    y="-84"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="42"
                    ></feGaussianBlur>
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_6"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_6"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
}

export default Image1;
