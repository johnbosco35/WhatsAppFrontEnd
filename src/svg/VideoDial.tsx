import React from 'react';

interface VideoDialIconProps {
  className?: string;
}

const VideoDialIcon: React.FC<VideoDialIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="700pt"
      height="700pt"
      viewBox="0 0 700 700"
      className={className}
    >
      <path d="M178.86 153.85h223.75c20.039 0 36.168 16.133 36.168 36.168v179.95c0 20.039-16.133 36.168-36.168 36.168l-223.75.004c-20.039 0-36.168-16.133-36.168-36.168v-179.95c0-20.04 16.133-36.168 36.168-36.168zM541.97 180.54c-2.453.094-4.852.965-6.98 2.543l-71.238 53.031v87.785l71.238 53.031v-.004c4.605 3.422 10.277 3.418 14.879-.008 4.605-3.43 7.44-9.761 7.449-16.617v-160.59c-.008-5.191-1.645-10.16-4.535-13.77s-6.79-5.558-10.812-5.398z"></path>
    </svg>
  );
}

export default VideoDialIcon;
