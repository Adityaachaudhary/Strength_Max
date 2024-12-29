import React from 'react';

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-10 py-6 bg-black text-white h-24 overflow-hidden">
      {/* Running miniature man SVG */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-run">
        <svg
          xmlns="https://img.favpng.com/7/0/12/logo-line-symbol-running-icon-kpt8eK8N.jpg"
          viewBox="0 0 64 64"
          className="w-10 h-10"
          fill="white"
        >
          <circle cx="32" cy="32" r="30" fill="#1E3A8A" />
          <path
            d="M30 22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-6zM35.5 33c.8-1.5 2.5-1.5 3.5-2.5l2 6-5.5 7-2-10c.7-1 .5-1.7 2-2.5z"
            fill="#FCD34D"
          />
          <path
            d="M27 44h-5l-2-8 6-1zM35 49h-6l-1-5 7-1z"
            fill="#6EE7B7"
          />
        </svg>
      </div>
      {/* Header Title */}
      <div className="flex items-center space-x-4">
        <div className="text-3xl font-extrabold font-sans">StrengthMax</div>
      </div>
    </header>
  );
};

export default Header;
