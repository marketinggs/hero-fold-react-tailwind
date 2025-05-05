
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="bg-toi-red p-1 h-12 w-12 flex items-center justify-center">
          <span className="text-white font-bold text-xl">TOI</span>
        </div>
        <span className="text-black font-serif text-xl font-bold">THE TIMES OF INDIA</span>
      </div>
    </div>
  );
};

export default Logo;
