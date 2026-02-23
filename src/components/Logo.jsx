import React from 'react';

const Logo = ({ className = "h-16 w-auto", dark = false }) => {
  // Colors
  const textColor = dark ? "#f7e6ea" : "#1a1a1a";
  const sloganColor = dark ? "#f7e6ea" : "#d97ba8"; // Adjusted for visibility on light backgrounds (darker pink)
  const roseDark = "#d97ba8";
  const roseLight = "#e8a8c8";

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 350 100" 
      className={className}
      aria-label="Ella's Beautique Logo"
      role="img"
    >
      <title>Ella's Beautique</title>
      
      {/* Decorative Rose Icon - Centered Top */}
      <g transform="translate(175, 25) scale(0.8)">
        {/* Rose Center - Spiral */}
        <path 
          d="M0,0 C2,-2 4,0 4,3 C4,6 0,8 -3,5 C-6,2 -4,-4 1,-6 C6,-8 10,-4 11,2" 
          fill="none" 
          stroke={roseDark} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        
        {/* Inner Petals */}
        <path 
          d="M-4,-7 C-8,-9 -13,-4 -12,2 C-11,8 -5,11 2,11 C9,11 14,6 14,-1" 
          fill="none" 
          stroke={roseLight} 
          strokeWidth="1.2" 
          strokeLinecap="round"
        />
        
        {/* Outer Petals */}
        <path 
          d="M13,-5 C16,-9 10,-14 3,-14 C-5,-14 -11,-10 -14,-4" 
          fill="none" 
          stroke={roseDark} 
          strokeWidth="1" 
          strokeLinecap="round" 
        />
        <path 
          d="M-13,5 C-15,10 -10,16 -2,16 C6,16 13,12 16,5" 
          fill="none" 
          stroke={roseLight} 
          strokeWidth="1" 
          strokeLinecap="round" 
        />
      </g>

      {/* Brand Name Text - Bold Heavy Sans-Serif */}
      <text 
        x="50%" 
        y="60" 
        textAnchor="middle"
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="800"
        fontSize="34" 
        fill={textColor}
        letterSpacing="1"
      >
        ELLA'S BEAUTIQUE
      </text>
      
      {/* Slogan Text - Sans-Serif */}
      <text 
        x="50%" 
        y="82" 
        textAnchor="middle"
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="500"
        fontSize="14" 
        fill={sloganColor}
        letterSpacing="2"
        style={{ textTransform: 'uppercase' }}
      >
        luxury facials in Bolton
      </text>
    </svg>
  );
};

export default Logo;