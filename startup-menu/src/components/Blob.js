import React from "react";

const data = "M46.5 -83.2C58.3 -73.7 64.7 -57.4 80.2 -42.3C95.7 -27.3 120.3 -13.7 130.2 5.7C140 25 134.9 50 118.1 62.7C101.3 75.4 72.6 75.8 51 80C29.3 84.1 14.7 92.1 0 92.1C-14.7 92.1 -29.3 84.1 -50.3 79.6C-71.2 75 -98.4 73.7 -111.7 61C-125 48.3 -124.5 24.2 -118.9 3.3C-113.3 -17.7 -102.5 -35.3 -88.1 -46.2C-73.7 -57 -55.6 -61 -40.3 -68.5C-25 -76 -12.5 -87 2.4 -91.2C17.3 -95.4 34.7 -92.7 46.5 -83.2; \
M53.5 -87C74 -80.8 98.5 -75.9 108.4 -61.6C118.3 -47.3 113.7 -23.7 114.8 0.7C116 25 122.9 50 111.4 61.5C99.9 73.1 70 71.2 48.3 79.9C26.7 88.5 13.3 107.8 -2.7 112.5C-18.8 117.3 -37.7 107.6 -50.1 93.6C-62.5 79.6 -68.5 61.3 -71.6 45C-74.7 28.7 -74.8 14.3 -76 -0.7C-77.1 -15.7 -79.3 -31.3 -78.2 -51.1C-77.1 -70.9 -72.8 -94.8 -59.2 -104.9C-45.7 -115.1 -22.8 -111.5 -3.2 -106.1C16.5 -100.6 33 -93.2 53.5 -87"

export default function Blob(props) {
  return (
    <div class="blob-content">
        {props.children}
      <svg
        class="blob-motion"
        id="visual"
        viewBox="0 0 960 300"
        width="960"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(473.7310488444273 150.51010988624526)">
          <path
            fill="#BB004B"
          >
            <animate attributeName="d"
            dur="1000ms"
            repeatCount="indefinite"
            values={data}/>
          </path>
        </g>
      </svg>
    </div>
  );
}