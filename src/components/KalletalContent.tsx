import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const KalletalContent = (
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
      Solaranlagen in Kalletal
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Kalletal – nachhaltig erneuerbare Energie nutzen
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Kalletal</strong>, umgeben von ländlich geprägten Ortsteilen und viel Freiraum,
      bieten sich beste Voraussetzungen für <strong>Photovoltaikanlagen</strong>. Mit modernen <strong>Solaranlagen</strong> können Sie Ihren Eigenverbrauch steigern und langfristig
      unabhängig vom Stromversorger werden.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>450 PV-Anlagen</strong> mit einer geschätzten Leistung von etwa <strong>3.800 kWp</strong> sind im Kalletal installiert. Die Sonneneinstrahlung liegt bei
      rund <strong>980–1.020 kWh/m² jährlich</strong> – ideal für effiziente Solarstromnutzung.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp-Photovoltaikanlage</strong> erzeugt in Kalletal jährlich ca. <strong>9.500–10.000 kWh Strom</strong>. Mit einem Speicher können Sie bis zu <strong>80 %</strong> Eigenverbrauch erreichen – optimal für Einfamilienhäuser,
      Landwirtschaft und Gewerbe.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> setzt auf hochwertige Technik von <strong>Aiko</strong>,
      <strong>Trina</strong> (Solarmodule), <strong>Sungrow</strong> (Wechselrichter) und <strong>EcoFlow</strong> (Speicher). Damit erreichen Sie maximale Leistung und
      Langlebigkeit – maßgeschneidert für Ihr Dach im Kalletal.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir übernehmen die komplette Umsetzung: Planung, Förderberatung (z. B. <strong>KfW 442</strong>),
      Netzanschluss, Montage und Integration von Speicher und Wallbox – regional und zuverlässig.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Kalletal anfragen</strong> und von nachhaltigem,
      wirtschaftlichem Solarstrom profitieren – direkt aus Ihrer Region!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Kalletal"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Kalletal auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default KalletalContent;