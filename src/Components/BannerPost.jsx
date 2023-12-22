import React from "react";

const BannerPost = () => {
  return (
    <div className=" text-white text-center  py-16">
      <p className="text-3xl max-w-4xl flex leading-12 tracking-wide capitalize mx-auto items-center">Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
      <div className="mx-auto max-w-4xl mt-8">
        <img
          className="w-full h-72 object-cover object-top mx-auto"
          src="/images/1dd8e61fcac2c9c7af98f1fbbf93d497.jpeg"
          alt="Banner"
        />
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-lg">
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <button className="mt-4 bg-white text-black py-2 px-16 rounded-sm hover:bg-blue-700">
          Visit Website
        </button>
      </div>
    </div>
  );
};

export default BannerPost;
