import React from "react";

import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import LazyShow from "../components/LazyShow";
import WhatsAppPopup from "../components/WhatsAppPopup";
import Footer2 from "../components/Footer2";
import OfferWidget from "../components/OfferWidget";
import Navbar2 from "../components/Navbar2";
import SecondHero from "../components/SecondHero";
import { Box, Image } from "@chakra-ui/react";

const Angebot = () => {
  return (
    <Box>
      <WhatsAppPopup />
      <Navbar2/>
      {/* First Box with SecondHero */}
      <Box w="100%" position="relative" zIndex={1}>
        <SecondHero height='200px' imageUrl={'/projects/angebot_anfordern.jpg'} title={''} text={''} />
      </Box>
      
      {/* Second Box with the logo image, placed above the First Box */}
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        mt="-80px"  // Moves the second box up above the first box
        zIndex={2}
      >
        <Image src="/assets/images/logo.svg" alt="Image 3" w="300px" borderRadius='200px' p='30px' pb='0px'backgroundColor={'white'}/>
      </Box>
      
      <OfferWidget />
      
      <div>
        <LazyShow>
          <>
            <Canvas />
            <Footer2 />
          </>
        </LazyShow>
      </div>
      <Analytics />
    </Box>
  );
};

export default Angebot;