import React from 'react';

import Image from 'next/image';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Image
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="solaranlage"
        width={1100}
        height={1000}
      />
    </div>
  );
};

export default MainHeroImage;
