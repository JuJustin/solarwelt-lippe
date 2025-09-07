import React from "react";

import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import LazyShow from "../components/LazyShow";
import WhatsAppPopup from "../components/WhatsAppPopup";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import LargeWithLogoCentered from "../components/Footer2";
import Navbar2 from "../components/Navbar2";
import FooterHero from "../components/FooterHero";
import SecondHero from "../components/SecondHero";
import OurLeistungen from "../components/OurLeistungen";

const MainContent = () => {

  return (
    <>
      <Navbar2 />
      <WhatsAppPopup />
      <div className={`bg-background gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background z-0`}>
          <Box w="100%">
            <SecondHero
              height="300px"
              imageUrl={"/projects/mountains.jpg"}
              title={"Leistungen"}
              text={
                "Ihr Partner für nachhaltige Energielösungen: Solaranlagen, Stromspeicher, Wallboxen und professionelle Montage – alles, was Sie für Ihre Energiezukunft brauchen."
              }
            />
          </Box>
        </div>

        <LazyShow>
          <OurLeistungen />
        </LazyShow>

        <LazyShow>
          <Container
            maxW={"100%"}
            backgroundColor={"gray.100"}
            mt="80px"
            mb="30px"
          >
            <Stack
              textAlign={"center"}
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 14, md: 14 }}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Unsere Produkte im Detail
              </Heading>
              <Text color={"gray.500"} maxW={"3xl"}>
                Erfahren Sie mehr über die erstklassige Qualität und die
                fortschrittlichen Technologien unserer Solaranlagen,
                Stromspeicher, Wallboxen und weiteren Lösungen. Lassen Sie sich
                von den Vorteilen und dem innovativen Design überzeugen.
              </Text>
              <Stack spacing={6} direction={{ base: 'column', md: 'row' }}>
                <a href="/angebot">
                  <Button
                    rounded={"full"}
                    px={6}
                    colorScheme={"orange"}
                    bg={"orange.400"}
                    _hover={{ bg: "orange.500" }}
                  >
                    Beratungstermin anfordern
                  </Button>
                </a>
                <a href="/referenzen">
                  <Button
                    bg={"gray.200"}
                    _hover={{ bg: "gray.300" }}
                    rounded={"full"}
                    px={6}
                  >
                    Unsere Referenzen
                  </Button>
                </a>
              </Stack>
            </Stack>
          </Container>
        </LazyShow>

        <LazyShow>
          <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("orange.50", "orange.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Solarmodule
                </Text>
                <Heading>Effiziente Solarmodule mit modernem Design</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Unsere Solarmodule kombinieren hohe Leistung mit einem
                  eleganten Design. Besonders die Full-Black-Module überzeugen
                  durch ihre edle Optik und integrieren sich nahtlos in jedes
                  Gebäude. Mit ihrer außergewöhnlichen Effizienz sorgen sie auch
                  bei schwachem Licht für maximale Energieausbeute und tragen so
                  dazu bei, Ihre Energiekosten zu senken und die Umwelt zu
                  schonen.
                </Text>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/projects/aiko_modul.jpeg"}
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        </LazyShow>

        <LazyShow>
          <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("orange.50", "orange.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Stromspeicher
                </Text>
                <Heading>
                  Moderne Speicherlösungen für Ihre Energiebedürfnisse
                </Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Unsere Stromspeicher bieten Ihnen zuverlässige und effiziente
                  Möglichkeiten, Ihre erzeugte Solarenergie zu speichern und bei
                  Bedarf zu nutzen. Mit hoher Kapazität und modernster
                  Technologie sorgen unsere Speicherlösungen dafür, dass Sie
                  immer Zugriff auf Ihre Energie haben – unabhängig von
                  Tageszeit oder Wetterbedingungen.
                </Text>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/projects/ecoflow-combo.jpg"}
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        </LazyShow>

        <LazyShow>
          <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("orange.50", "orange.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Wallbox
                </Text>
                <Heading>Elegante Wallbox-Lösungen für Ihr Zuhause</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Unsere Wallboxen bieten Ihnen eine schnelle, sichere und
                  komfortable Möglichkeit, Ihr Elektrofahrzeug direkt zuhause
                  aufzuladen. Mit intelligenter Steuerung und ansprechendem
                  Design sorgen unsere Ladestationen für ein einfaches und
                  effizientes Laden – perfekt integriert in Ihre moderne
                  Wohnumgebung.{" "}
                </Text>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/projects/ecoWallbox.jpeg"}
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        </LazyShow>

        <LazyShow>
          <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("orange.50", "orange.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Montage
                </Text>
                <Heading>Präzise und Zuverlässig</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Unsere erfahrenen Techniker kümmern sich um die fachgerechte
                  Installation Ihrer Solaranlage, Stromspeicher und Wallboxen.
                  Wir gewährleisten eine präzise und sichere Montage, damit Sie
                  von den besten Leistungen und der höchsten Effizienz Ihrer
                  neuen Systeme profitieren. Vertrauen Sie auf unsere Expertise,
                  um Ihre Anlage schnell und zuverlässig in Betrieb zu nehmen.
                </Text>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/projects/solarworker.jpg"}
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        </LazyShow>

        <LazyShow>
          <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("orange.50", "orange.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Elektroinstallation
                </Text>
                <Heading>Professionell und Sicher</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Unsere Elektroinstallateure sorgen für eine fachgerechte und
                  sichere Verkabelung Ihrer Solaranlage und Stromspeicher. Wir
                  gewährleisten, dass alle elektrischen Komponenten optimal
                  miteinander verbunden sind und den höchsten
                  Sicherheitsstandards entsprechen. Vertrauen Sie auf unsere
                  Expertise, um eine zuverlässige und effiziente
                  Energieversorgung zu gewährleisten.
                </Text>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/projects/eletric.jpg"}
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
          </Container>
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
