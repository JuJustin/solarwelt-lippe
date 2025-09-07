import React from 'react';

import Canvas from './Canvas';
import LazyShow from './LazyShow';
import WhatsAppPopup from './WhatsAppPopup';

import LargeWithLogoCentered from './Footer2';
import Navbar2 from './Navbar2';
import MainHero2 from './MainHero2';
import Lösungen2 from './Lösungen2';
import Merkmale from './Merkmale';  
import ReferenzenWidget from './ReferenzenWidget';
import TestimonialWidget from './TestimonialWidget';
import Steps2 from './Steps2';
import AboutUsWidget from './AboutUsWidget';
import FooterHero from './FooterHero';
import CityWidget from './CityWidget';
import FAQWidget from './FAQWidget';

type MainHero2Props = {
  city: string;
  leistung: string;
  content: React.ReactNode;
};

const MainContent = ({ city, leistung, content }: MainHero2Props) => {

  return (
    <>
      <Navbar2 />
      <WhatsAppPopup />
      <div className={`bg-background gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background z-0`}>
          <div className="max-w-7xl mx-auto">
            <MainHero2 city={city} leistung={leistung}/>
          </div>
        </div>

        <LazyShow>
          <CityWidget city={city} content={content}/>
        </LazyShow>
        
        <LazyShow>
          <Steps2 city={city} />
        </LazyShow>
        
        <LazyShow>
         <Merkmale city={city} />
        </LazyShow>

        <LazyShow>
          <ReferenzenWidget city={city} />
        </LazyShow>

        <LazyShow>
          <TestimonialWidget />
        </LazyShow>

        <LazyShow>
          <AboutUsWidget isMore={true} city={city}/>
        </LazyShow>

        <LazyShow>
          <Lösungen2 city={city}/>
        </LazyShow>

        <LazyShow>
          <FAQWidget city={city} />
        </LazyShow>

        <LazyShow>
          <FooterHero />
        </LazyShow>
        
        <LazyShow>
          <>
            <Canvas />
            <LargeWithLogoCentered />
          </>
        </LazyShow>
      </div>
    </>
  );
};

export default MainContent;
