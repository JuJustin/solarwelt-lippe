import React from "react";

import Canvas from "../components/Canvas";
import LazyShow from "../components/LazyShow";
import WhatsAppPopup from "../components/WhatsAppPopup";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  VStack,
} from "@chakra-ui/react";

import LargeWithLogoCentered from "../components/Footer2";
import Navbar2 from "../components/Navbar2";
import FooterHero from "../components/FooterHero";
import SecondHeroAboutUs from "../components/SecondHeroAboutUs";
import AboutUsWidget from "../components/AboutUsWidget";
import Head from "next/head";

interface Props {
  children: React.ReactNode
}

function PriceWrapper(props: Props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}

const MainContent = () => {
  return (
    <>
      <Head>
        <title>Über uns | Solarwelt Lippe</title>
      </Head>
      <Navbar2 />
      <WhatsAppPopup />
      <div className={`bg-background gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background z-0`}>
          <Box w="100%">
            <SecondHeroAboutUs
              height="500px"
              imageUrl={"/projects/team3.png"}
              title={""}
              text={""}
            />
          </Box>
        </div>

        <LazyShow>
          <Container maxW={"4xl"}>
            <Stack
              textAlign={"center"}
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              pt={{ base: 20, md: 28 }}
              pb={{ base: 20, md: 28 }}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                WIR SIND{" "}
                <Text as={"span"} color={"orange.400"}>
                  {" "}
                  SOLARWELT-LIPPE
                </Text>
              </Heading>
              <Text color={"gray.800"} maxW={"3xl"}>
                Als familiengeführtes Unternehmen sind wir leidenschaftlich
                engagiert in der Planung und Installation von
                Photovoltaikanlagen. Von der ersten Beratung über die
                fachgerechte Montage bis hin zur regelmäßigen Wartung – Ihre
                maßgeschneiderte Energielösung liegt uns am Herzen.
              </Text>
            </Stack>
          </Container>
        </LazyShow>

        <LazyShow>
          <AboutUsWidget isMore={false} city={'Ostwestfalen-Lippe'}/>
        </LazyShow>

        <LazyShow>
        <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize={{base: '3xl', md: '4xl' }}>
          UNSERE UNTERNEHMENSWERTE
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Unsere Grundsätze für nachhaltigen Erfolg und vertrauensvolle Partnerschaften.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" pb='30px'>
                TRANSPARENZ
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="1xl" fontWeight="600">
              Bei uns stehen Offenheit und klare Kommunikation im Mittelpunkt. Von der ersten Beratung bis zur finalen Installation erhalten Sie transparente Informationen zu Kosten, Einsparpotenzialen und allen relevanten Aspekten – damit Sie fundierte Entscheidungen treffen können.
              </Text>
            </HStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('orange.300', 'orange.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Solarwelt-Lippe
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" pb='30px'>
              ZUVERLÄSSIGKEIT
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="1xl" fontWeight="600">
                Mit einer Photovoltaikanlage investieren Sie in Ihre Zukunft. Deshalb setzen wir auf höchste Qualität bei unseren Produkten und eine fachgerechte Installation. Sie können sich darauf verlassen, dass Ihre Anlage zuverlässig und über viele Jahre hinweg effizient arbeitet.
                </Text>
              </HStack>
            </Box>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" pb='30px'>
            SERVICE
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="1xl" fontWeight="600">
              Unser Service endet nicht mit der Inbetriebnahme Ihrer Anlage. Wir bieten Ihnen eine umfassende Betreuung, von der regelmäßigen Wartung bis hin zur schnellen Hilfe im Fall der Fälle. So stellen wir sicher, dass Ihre Photovoltaikanlage langfristig optimal läuft.
              </Text>
            </HStack>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
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
