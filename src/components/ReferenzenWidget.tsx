import React, { useState } from 'react';
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { IoBatteryChargingOutline, IoFlashOutline, IoPin } from 'react-icons/io5';
import { ReactElement } from 'react';
import Image from 'next/image';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
  textTitle: string;
}

const Feature = ({ text, icon, iconBg, textTitle }: FeatureProps) => (
  <Stack direction={'row'} align={'center'}>
    <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
      {icon}
    </Flex>
    <Stack direction={'column'}>
      <Text fontWeight={600} fontSize={'10px'}>
        {textTitle}
      </Text>
      <Text fontWeight={600} mt={'-12px'}>
        {text}
      </Text>
    </Stack>
  </Stack>
);

export default function SplitWithImage({ city }: { city: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const top = useBreakpointValue({ base: '90%', md: '96%' });
  const side = useBreakpointValue({ base: '20%', md: '40px' });

  const cards = [
    {
      anlage: '20,01 kWp',
      speicher: '30 kW',
      standort: 'Bad Salzuflen',
      description: 'Dachanlage auf Einfamilienhaus in Bad Salzuflen – inkl. Speicher & Wallbox',
      image: '/projects/p2-7.jpg',
    },
    {
      anlage: '21,75 kWp',
      speicher: '16 kW',
      standort: 'Lage',
      description: 'Dachanlage auf Einfamilienhaus in Lage – inkl. Speicher & Wallbox',
      image: '/projects/p4-1.svg',
    },
    {
      anlage: '11,18 kWp',
      speicher: '9,6 kW',
      standort: 'Blomberg',
      description: 'Dachanlage auf Einfamilienhaus in Blomberg – inkl. Speicher & Wallbox',
      image: '/projects/p1-2.svg',
    },
    {
      anlage: '8,7 kWp',
      speicher: '5 kW',
      standort: 'Greetsiel (Nordsee)',
      description: 'Dachanlage auf Einfamilienhaus in Greetsiel – inkl. Speicher & Wallbox',
      image: '/projects/p3-2.svg',
    },
  ];

  const currentCard = cards[currentIndex] ?? null;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  if (!currentCard) return null;

  return (
    <Container maxW={'7xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'orange.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('orange.50', 'orange.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Referenzen
          </Text>
          <Heading>Unsere realisierten Projekte in {city} und Umgebung</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lassen Sie sich von erfolgreichen Solarprojekten aus {city} inspirieren. Solarwelt-Lippe realisiert
            Solaranlagen exakt nach Ihren Bedürfnissen – zuverlässig, effizient und regional verwurzelt.
          </Text>
          <a href="/referenzen">
            <Text color={'orange.500'} fontSize={'l'}>
              Mehr zu den Referenzen &gt;
            </Text>
          </a>
        </Stack>

        <Flex>
          <Box position="relative" height={{ base: '300px', md: '440px' }} width="full" overflow="hidden">
            <IconButton
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform="translate(0%, -50%)"
              zIndex={2}
              onClick={prevSlide}>
              <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform="translate(0%, -50%)"
              zIndex={2}
              onClick={nextSlide}>
              <BiRightArrowAlt size="40px" />
            </IconButton>

            <Box
              height={{ base: '250px', md: '400px' }}
              width="full"
              position="relative"
              borderRadius="30px"
              overflow="hidden">
              <Image
                src={currentCard.image}
                alt={`Photovoltaikanlage in ${currentCard.standort}`}
                fill
                style={{ objectFit: 'cover' }}
              />

              <Stack
                spacing={1}
                w={'fit-content'}
                maxW={'lg'}
                position="absolute"
                top="95%"
                transform="translate(0, -50%)">
                <Box
                  bg="rgba(255, 255, 255, 0.8)"
                  backdropFilter="blur(10px)"
                  borderRadius="md"
                  display={{ base: 'none', md: 'flex' }}
                  p={2}>
                  <Stack
                    spacing={5}
                    direction={'row'}
                    divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
                    <Feature
                      icon={<Icon as={IoPin} color={'red.500'} w={5} h={5} />}
                      iconBg={useColorModeValue('red.100', 'red.900')}
                      textTitle="Standort"
                      text={currentCard.standort}
                    />
                    <Feature
                      icon={<Icon as={IoBatteryChargingOutline} color={'green.500'} w={5} h={5} />}
                      iconBg={useColorModeValue('green.100', 'green.900')}
                      textTitle="Speicher"
                      text={currentCard.speicher}
                    />
                    <Feature
                      icon={<Icon as={IoFlashOutline} color={'yellow.500'} w={5} h={5} />}
                      iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                      textTitle="Anlagenleistung"
                      text={currentCard.anlage}
                    />
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}