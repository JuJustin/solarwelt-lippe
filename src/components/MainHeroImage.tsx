import React from 'react';

import Image from 'next/image';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-0">
      <Image
        src={mainHero.img}
        alt="Photovoltaikanlage"
        width={1100}
        height={800}
      />
    </div>
  );
};

export default MainHeroImage;
