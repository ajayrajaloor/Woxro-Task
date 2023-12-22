import React, { useState } from 'react';
import BannerPost from './Components/BannerPost';
import CardPortion from './Components/CardPortion';
import Contribution from './Components/Contribution';
import Footer from './Components/Footer';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div className="bg-black text-white">
        <BannerPost />
        <CardPortion />
        <Contribution />
        <Footer />
      </div>

      <button
        className={`absolute top-4 right-4 bg-transparent border-none cursor-pointer transform transition-transform ${
          isHovered ? 'rotate-45' : 'rotate-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-0.5 h-6 bg-white"></span>
      </button>
    </div>
  );
}
