import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 500 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-labelledby="logoTitle"
      role="img"
    >
      <title id="logoTitle">SN Design Logo</title>
      
      {/* House Structure (White) */}
      {/* Roof: Starts left, goes to peak, goes down right, then forms the geometric extension */}
      <path 
        d="M 110 180 L 250 70 L 320 125 H 370 V 90 H 420" 
        stroke="currentColor" 
        strokeWidth="22" 
        strokeLinecap="square" 
        strokeLinejoin="miter"
        className="text-white"
      />
      
      {/* Left Vertical Wall */}
      <path 
        d="M 110 180 V 230"
        stroke="currentColor" 
        strokeWidth="22" 
        strokeLinecap="square"
        className="text-white"
      />

      {/* Blue Swoosh/Foundation */}
      {/* Connects to bottom of left wall, curves right, underlines SN */}
      <path 
        d="M 110 230 Q 110 280 160 280 H 420" 
        stroke="#2997b6" 
        strokeWidth="22" 
        strokeLinecap="round"
      />

      {/* SN Text */}
      <text 
        x="250" 
        y="235" 
        textAnchor="middle" 
        fill="currentColor" 
        fontSize="130" 
        fontWeight="800" 
        fontFamily="Montserrat, sans-serif" 
        className="text-white"
      >
        SN
      </text>

      {/* Tagline */}
      <text 
        x="265" 
        y="340" 
        textAnchor="middle" 
        fill="currentColor" 
        fontSize="32" 
        fontFamily="Montserrat, sans-serif" 
        fontWeight="600"
        letterSpacing="1" 
        className="text-white"
      >
        Interior & Exterior
      </text>
    </svg>
  );
};