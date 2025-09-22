import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="w-10 h-10 relative">
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e74c9d" />
            <stop offset="100%" stopColor="#bc1e66" />
          </linearGradient>
        </defs>
        
        {/* Círculo exterior */}
        <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" opacity="0.1" />
        
        {/* Forma tecnológica central */}
        <path
          d="M12 12 L28 12 L28 16 L24 16 L24 24 L28 24 L28 28 L12 28 L12 24 L16 24 L16 16 L12 16 Z"
          fill="url(#logoGradient)"
        />
        
        {/* Detalles tecnológicos */}
        <rect x="18" y="14" width="4" height="2" fill="white" opacity="0.8" />
        <rect x="18" y="18" width="4" height="2" fill="white" opacity="0.8" />
        <rect x="18" y="22" width="4" height="2" fill="white" opacity="0.8" />
        
        {/* Puntos decorativos */}
        <circle cx="14" cy="14" r="1" fill="url(#logoGradient)" />
        <circle cx="26" cy="14" r="1" fill="url(#logoGradient)" />
        <circle cx="14" cy="26" r="1" fill="url(#logoGradient)" />
        <circle cx="26" cy="26" r="1" fill="url(#logoGradient)" />
      </svg>
    </div>
  );
};

export default Logo;
