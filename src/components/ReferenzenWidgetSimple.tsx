import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Icon,
  IconButton,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { IoBatteryChargingOutline, IoFlashOutline, IoPin } from 'react-icons/io5';
import { ReactElement } from 'react';

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

const FeatureSmall = ({ text, icon, iconBg, textTitle }: FeatureProps) => (
  <Stack direction={'row'} align={'center'}>
    <Flex w={4} h={4} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
      {icon}
    </Flex>
    <Stack direction={'column'}>
      <Text fontWeight={600} fontSize={'10px'}>
        {textTitle}
      </Text>
      <Text fontWeight={600} mt={'-12px'} fontSize={'12px'}>
        {text}
      </Text>
    </Stack>
  </Stack>
);

type ReferenzenWidgetSimpleProps = {
  cards: {
    image: string;
    standort: string;
    speicher: string;
    anlage: string;
    text?: string;
  }[];
};

export default function SplitWithImage({ cards }: ReferenzenWidgetSimpleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = cards.length;

  const top = useBreakpointValue({ base: '90%', md: '96%' });
  const side = useBreakpointValue({ base: '20%', md: '40px' });

  if (total === 0) return null;

  const currentCard = cards[currentIndex]!;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <Box position="relative" height={{ base: '300px', md: '440px' }} width={{ base: '90vw', md: '45vw' }} overflow="hidden">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={prevSlide}
      >
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
        onClick={nextSlide}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Box
        key={currentIndex}
        height={{ base: '250px', md: '400px' }}
        position="relative"
        backgroundPosition="center"
        borderRadius="10px"
        transition="background-image 0.6s ease-in-out"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(${currentCard.image})`}
      >
        <Container size="container.lg" height={{ base: '230px', md: '380px' }} position="relative">
          <Stack
            className="infos"
            spacing={1}
            w="fit-content"
            maxW="lg"
            position="absolute"
            top="95%"
            transform="translate(0, -50%)"
          >
            <Box
              bg="rgba(255, 255, 255, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="md"
              display={{ base: 'none', md: 'flex' }}
              p={2}
            >
              <Stack
                spacing={5}
                direction="row"
                divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
              >
                <Feature
                  icon={<Icon as={IoPin} color="red.500" w={5} h={5} />}
                  iconBg={useColorModeValue('red.100', 'red.900')}
                  textTitle="Standort"
                  text={currentCard.standort}
                />
                <Feature
                  icon={<Icon as={IoBatteryChargingOutline} color="green.500" w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  textTitle="Speicher"
                  text={currentCard.speicher}
                />
                <Feature
                  icon={<Icon as={IoFlashOutline} color="yellow.500" w={5} h={5} />}
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  textTitle="Anlagenleistung"
                  text={currentCard.anlage}
                />
              </Stack>
            </Box>

            <Box
              bg="rgba(255, 255, 255, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="md"
              display={{ base: 'flex', md: 'none' }}
              p={2}
            >
              <Stack
                spacing={2}
                direction="row"
                divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
              >
                <FeatureSmall
                  icon={<Icon as={IoPin} color="red.500" w={5} h={5} />}
                  iconBg={useColorModeValue('red.100', 'red.900')}
                  textTitle="Standort"
                  text={currentCard.standort}
                />
                <FeatureSmall
                  icon={<Icon as={IoBatteryChargingOutline} color="green.500" w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  textTitle="Speicher"
                  text={currentCard.speicher}
                />
                <FeatureSmall
                  icon={<Icon as={IoFlashOutline} color="yellow.500" w={5} h={5} />}
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  textTitle="Anlagenleistung"
                  text={currentCard.anlage}
                />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
