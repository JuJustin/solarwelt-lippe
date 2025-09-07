import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const LoehneContent = (
  <Stack spacing={6}>
    <Text
      textTransform="uppercase"
      color="orange.400"
      fontWeight={600}
      fontSize="sm"
      bg="orange.50"
      p={2}
      alignSelf="flex-start"
      rounded="md"
    >
      Solaranlagen in Löhne
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Löhne – Ihre Energiewende startet hier
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Löhne</strong>, Zentrum im Nordosten von NRW, wächst das Interesse an nachhaltiger Energie – viele Häuser,
      Unternehmen und Gewerbebetriebe setzen bereits auf eine eigene <strong>Solaranlage</strong>. Mit modernen <strong>Photovoltaikanlagen</strong> senken Sie dauerhaft Ihre Stromkosten und reduzieren Ihren CO₂‑Fußabdruck.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In Löhne sind mittlerweile über <strong>650 PV-Anlagen</strong> installiert, mit geschätzt insgesamt rund <strong>5 500 kWp</strong>. Die jährliche Sonneneinstrahlung liegt bei etwa <strong>1 000 kWh/m²</strong> – optimale Bedingungen für effiziente Solarstromproduktion.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp-Photovoltaikanlage</strong> generiert in Löhne ca. <strong>9 500–10 000 kWh Strom pro Jahr</strong>.
      In Kombination mit Speicherlösungen von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> erreichen Sie <strong>Eigenverbrauchsraten von bis zu 80 %</strong> und maximieren Ihre Energieunabhängigkeit.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Löhne</strong> mit namhaften Komponenten von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> – perfekt abgestimmt auf Ihr Dach und Ihren Verbrauch.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir übernehmen den gesamten Prozess: Planung, Förderberatung (z. B. <strong>KfW 442</strong>), Anmeldung beim Netzbetreiber,
      Montage und Integration von Speicher & Wallbox – direkt aus Ihrer Region.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Löhne planen</strong> – profitieren Sie von nachhaltigem Solarstrom und regionalem Service.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Löhne"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Löhne auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default LoehneContent;