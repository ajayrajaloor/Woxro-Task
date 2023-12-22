// CardPortion.jsx
import React from 'react';

const CardPortion = () => {
  return (
    <div className="flex flex-wrap  max-w-4xl mx-auto justify-around mt-8">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 text-center">
        <img className="w-full h-56 object-cover mb-4" src="images/image2.jpeg" alt="Card 1" />
        <p >Explore large, destructible environments where no two games are ever the same.</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 text-center">
        <img className="w-full h-56 object-cover mb-4" src="images/image3.png" alt="Card 2" />
        <p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 text-center">
        <img className="w-full h-56 object-cover mb-4" src="images/image4.jpeg" alt="Card 3" />
        <p>Discover even more ways to play across thousands of creator-made game genres</p>
      </div>
    </div>
  );
};

export default CardPortion;
