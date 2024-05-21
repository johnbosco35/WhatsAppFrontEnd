import React from "react";

/**
 * Component for rendering the logo.
 */
const Logo: React.FC = () => {
  return (
    <svg
      viewBox="0 0 303 172"
      width={360}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M229.565 160.229C262.212 149.245 286.931 118.241 283.39 73.4194C278.009 5.31929 212.365 -11.5738 171.472 8.48673C115.998 35.6999 108.972 40.1612 69.2388 40.1612C39.645 40.1612 9.51317 54.4147 5.74669 92.952C3.01662 120.885 13.9985 145.267 54.6373 157.716C128.599 180.373 198.017 170.844 229.565 160.229Z"
        fill="#364147"
      />
      {/* Rest of the SVG paths */}
    </svg>
  );
};

export default Logo;
