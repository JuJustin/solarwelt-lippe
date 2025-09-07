"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
  useColorModeValue,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

type MainHero2Props = {
  city: string;
  leistung: string;
};

export default function CallToActionWithVideo({
  city,
  leistung,
}: MainHero2Props) {
  const showBlob = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxW={"7xl"} py={{ base: 6, md: 12 }}>
      <Stack
        align={"center"}
        spacing={{ base: 6, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 4, md: 6 }}>
          <Heading
            as="h1"
            lineHeight={1.2}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#FE8800",
                zIndex: -1,
              }}
            >
              {city ? `${leistung} in ${city}` : "Deine Solarfreiheit"}
            </Text>
            <br />
            <Text as="span" color={"#FE8800"}>
              {city ? "Lokal, fair, nachhaltig" : "mit Solarwelt-Lippe!"}
            </Text>
          </Heading>

          <Text fontSize="lg" color="gray.600" maxW="600px">
            {city
              ? `In ${city} bieten wir Ihnen All-Inclusive Photovoltaikanlagen – von der individuellen Beratung und Planung über den Bau und die Installation bis hin zur regelmäßigen Wartung. Unsere Photovoltaik-Experten sorgen dafür, dass Ihre Anlage effizient arbeitet und Sie langfristig Stromkosten sparen.`
              : "Mit Solarwelt-Lippe zur eigenen Photovoltaikanlage: Wir beraten, planen, bauen, installieren und warten – alles aus einer Hand. Ihre All-Inclusive Photovoltaiklösung für nachhaltige Energie und maximale Erträge."}
          </Text>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              as="a"
              href="/angebot"
              rounded="full"
              size="lg"
              fontWeight="normal"
              px={6}
              colorScheme="orange"
              bg="#FE8800"
              _hover={{ bg: "#FE7300" }}
            >
              Kostenloses Angebot
            </Button>
            <Button
              as="a"
              href="/referenzen"
              rounded="full"
              size="lg"
              fontWeight="normal"
              px={6}
              variant="outline"
              colorScheme="orange"
            >
              Referenzen ansehen
            </Button>
          </Stack>

          <Stack
            align="center"
            height="60px"
            justify={{ base: "center", sm: "flex-start" }}
            spacing={2}
            direction="row"
          >
            <Image
              src="/5star.svg"
              alt="5-Sterne-Bewertung bei Google"
              width={80}
              height={15}
              style={{ height: "15px", borderRadius: "18px" }}
              loading="lazy"
            />
            <Text color="gray.600">5 von 5 Sternen</Text>
            <Image
              src="/googleFullLogo.svg"
              alt="Google Bewertungen"
              width={100}
              height={50}
              style={{ height: "50px" }}
              loading="lazy"
            />
          </Stack>
        </Stack>

        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          {showBlob && (
            <Blob
              w="100%"
              h="100%"
              position="absolute"
              top="-10%"
              left={0}
              zIndex={-1}
              color={useColorModeValue("#FE880022", "#FE880044")}
            />
          )}
          <Box padding="10px" w="100%">
            <Grid templateColumns={{ base: "1fr 1fr", md: "1fr 1fr" }} gap={4}>
              {[
                {
                  src: "/projects/p2-7.jpg",
                  alt: `Photovoltaikanlage in ${city}`,
                },
                {
                  src: "/assets/images/logo.svg",
                  alt: `Logo von Solarwelt-Lippe aus ${city}`,
                },
                {
                  src: "/projects/solarfield.jpg",
                  alt: `Solarfeld in der Region ${city}`,
                },
                {
                  src: "/projects/solarworker.jpg",
                  alt: `Installation von PV-Anlagen in ${city}`,
                },
              ].map((img, idx) => (
                <Box key={idx} position="relative" width="100%" height="auto">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "18px",
                    }}
                    loading="lazy"
                  />
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
