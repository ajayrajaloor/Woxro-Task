import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
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
        <FaTimes color="white" size={20} />
      </button>
    </div>
  );
}
