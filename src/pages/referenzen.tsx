import React from 'react';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import LazyShow from '../components/LazyShow';
import WhatsAppPopup from '../components/WhatsAppPopup';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import LargeWithLogoCentered from '../components/Footer2';
import Navbar2 from '../components/Navbar2';
import FooterHero from '../components/FooterHero';
import ReferenzenWidgetSimple from '../components/ReferenzenWidgetSimple';

const MainContent = () => {

  const cards1 = [
    {
      anlage: '20,01 kWp',
      speicher: '30 kW',
      standort: 'Bad Salzuflen',
      image:
        '/projects/p2-7.png',
    },
    {
      anlage: '20,01 kWp',
      speicher: '30 kW',
      standort: 'Bad Salzuflen',
      image:
          '/projects/p2-1.svg',
      },
    {
      anlage: '20,01 kWp',
      speicher: '30 kW',
      standort: 'Bad Salzuflen',
      image:
          '/projects/p2-2.svg',
      }

  ];

  const cards3 = [
    {
      anlage: '11,18 kWp',
      speicher: '9,6 kW',
      standort: 'Blomberg',
      image:
        '/projects/p1-1.svg',
    },
    {
      anlage: '11,18 kWp',
      speicher: '9,6 kW',
      standort: 'Blomberg',
      image:
          '/projects/p1-2.svg',
      },

  ];

  const cards2 = [
    {
      anlage: '21,75 kWp',
      speicher: '16 kW',
      standort: 'Lage',
      image:
        '/projects/p4-1.svg',
    },
    {
      anlage: '21,75 kWp',
      speicher: '16 kW',
      standort: 'Lage',
      image:
          '/projects/p4-2.svg',
      },
    {
      anlage: '21,75 kWp',
      speicher: '16 kW',
      standort: 'Lage',
      image:
          '/projects/p4-3.svg',
      },

  ];

  const cards4 = [
    {
      anlage: '8,7 kWp',
      speicher: '5 kW',
      standort: 'Greetsiel (Nordsee)',
      image:
        '/projects/p3-1.svg',
    },
      {
        anlage: '8,7 kWp',
        speicher: '5 kW',
        standort: 'Greetsiel (Nordsee)',
        image:
            '/projects/p3-2.svg',
        },

  ];

  return (
    <>
      <Navbar2 />
      <WhatsAppPopup />
      <Box className={`bg-background gap-y-16 overflow-hidden`}  justifyContent={'center'}>

        <Stack w='100%' className={`relative bg-background z-0`} align={'center'}>
          <Box w={{base: 'sm', md: '7xl' }}>
              <Text fontSize={{base: '24px', md: '36px' }} fontWeight='1000' pt={16} pb={6}>Einige unserer Referenzen</Text>
          </Box>
        </Stack>

        <Flex align={'center'} w={'100%'} justifyContent={'center'}>
          <SimpleGrid  maxW={{base: 'sm', md: '7xl' }} columns={{ base: 1, md: 2 }} spacing={10}> 
            <ReferenzenWidgetSimple cards={cards1}></ReferenzenWidgetSimple>
            <ReferenzenWidgetSimple cards={cards2}></ReferenzenWidgetSimple>
            <ReferenzenWidgetSimple cards={cards3}></ReferenzenWidgetSimple>
            <ReferenzenWidgetSimple cards={cards4}></ReferenzenWidgetSimple>
          </SimpleGrid>
        </Flex>
        
        <LazyShow>
          <></>
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
      </Box>
    </>
  );
};

export default MainContent;