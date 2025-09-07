import React from 'react';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import LazyShow from '../components/LazyShow';
import WhatsAppPopup from '../components/WhatsAppPopup';
import {
  Box
} from '@chakra-ui/react'
import LargeWithLogoCentered from '../components/Footer2';
import Navbar2 from '../components/Navbar2';
import FooterHero from '../components/FooterHero';
import SecondHero from '../components/SecondHero';
import KontaktWidget from '../components/KontaktWidget';

const MainContent = () => {

  return (
    <>
      <Navbar2 />
      <WhatsAppPopup />
      <div className={`bg-background gap-y-16 overflow-hidden`}>

        <div className={`relative bg-background z-0`}>
          <Box w="100%">
            <SecondHero height='300px' imageUrl={'/projects/contact.jpg'} title={'Kontakt'} text={'Da uns Ihr Wohlbefinden am Herzen liegt, kümmern wir uns persönlich um all Ihre Anliegen.'}/>
          </Box>
        </div>
        
        <LazyShow>
          <KontaktWidget />
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
        
        <Analytics />
      </div>
    </>
  );
};

export default MainContent;