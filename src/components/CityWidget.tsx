import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import Head from 'next/head';

interface CityInfoProps {
  city: string;
  content: React.ReactNode;
}

const CityInfo: React.FC<CityInfoProps> = ({ city, content }) => {
  const mapSrc =
    city.toLowerCase() === 'ostwestfalen-lippe'
      ? 'https://maps.google.com/maps?q=Solarwelt-Lippe=m&z=9&output=embed&iwloc=near'
      : `https://maps.google.com/maps?q=${encodeURIComponent(city.toLowerCase() === 'lage' ? 'Lage Kreis Lippe' : city)}&t=m&z=10&output=embed&iwloc=near`;

  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Photovoltaik & Solaranlagen in ${city} – Solarwelt-Lippe bietet moderne PV-Anlagen mit Speicher und Wallbox für Privat und Gewerbe. Jetzt beraten lassen!`}
        />
      </Head>

      <Container maxW="7xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Content passed from parent */}
          {content}

          {/* Google Map */}
          <Box
            w="100%"
            h={{ base: '300px', md: '450px' }}
            rounded="2xl"
            overflow="hidden"
            boxShadow="lg"
          >
            <iframe
              title={`Google Map ${city}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapSrc}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default CityInfo;