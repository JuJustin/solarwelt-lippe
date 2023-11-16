import React from 'react';

import Image from 'next/image';

import config from '../config/index.json';
import Divider from './Divider';

const Überuns = () => {
  const { überuns } = config;
  const [firstItem] = überuns.items;

  const imgSrc: string = firstItem?.img!;

  return (
    <section className={`bg-background py-8`} id="überuns">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h2
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {überuns.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h2>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-2xl text-gray-800 font-bold leading-none mb-4`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray`}>{firstItem?.description}</p>
            <p className={`text-white`}>-</p>
            <p className={`text-gray`}>{firstItem?.description2}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <Image
              className="h-6/6 rounded-bl-3xl rounded-tr-3xl"
              src={imgSrc}
              alt={firstItem?.title}
              width={400}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Überuns;
