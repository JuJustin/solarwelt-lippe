import React from 'react';

import Head from 'next/head';

import About from './About';
import Analytics from './Analytics';
import Canvas from './Canvas';
import Header from './Header';
import LazyShow from './LazyShow';
import Features from './Lösungen';
import MainHero from './MainHero';
import MainHeroImage from './MainHeroImage';
import Pricing from './Vorteile';
import WhatsAppPopup from './WhatsAppPopup';
import Product from './Überuns';

type LinkCardProps = {
  stadt: string;
};

const MainContent = (props: LinkCardProps) => {
  return (
    <>
      <WhatsAppPopup />
      <div className={`bg-background gap-y-16 overflow-hidden`}>
        <Head>
          <title>{`Photovoltaikanlage in ${props.stadt}`}</title>
          <meta
            property="og:title"
            content={`Photovoltaikanlage in ${props.stadt}`}
            key="title"
          />
          <link
            rel="icon"
            href="https://www.solarwelt-lippe.de/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta
            property="og:title"
            content={`Photovoltaikanlage in ${props.stadt}`}
            key="title"
          />
          <meta
            name="description"
            content="Sie möchten mit einer eigenen Photovoltaikanlage Strom erzeugen und Ihre Kosten senken? Jetzt vom Photovoltaikanbieter aus Ihrer Region!"
          />
        </Head>
        <div className={`relative bg-background z-0`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header mainPage={true} />
              <MainHero stadt={props.stadt} />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <LazyShow>
          <Pricing />
        </LazyShow>
        <LazyShow>
          <Features />
        </LazyShow>
        <LazyShow>
          <Product />
        </LazyShow>
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
        <Analytics />
      </div>
    </>
  );
};

export default MainContent;
