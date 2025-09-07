import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const LeopoldshoeheContent = (
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
      Solaranlagen in Leopoldshöhe
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Leopoldshöhe – für nachhaltige Energie direkt von Ihrem Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Leopoldshöhe</strong>, dicht bei Bielefeld, entscheiden sich Privathaushalte und Unternehmen
      zunehmend für eine eigene <strong>Solaranlage</strong>. Die gute Infrastruktur und die vielen
      großzügigen Dachflächen schaffen ideale Voraussetzungen für profitable <strong>Photovoltaikanlagen</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>600 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von rund <strong>5.500 kWp</strong> wurden in Leopoldshöhe installiert. Die jährliche Sonneneinstrahlung beträgt
      etwa <strong>1.000 kWh/m²</strong>, was ein zuverlässiges Ertragspotenzial garantiert.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-Anlage</strong> erzeugt in Leopoldshöhe jährlich bis zu <strong>10.000 kWh Strom</strong>.
      In Kombination mit Speichertechnik von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> erreichen Sie
      einen Eigenverbrauch von über <strong>75 %</strong> – optimal für Privathaushalte, Gewerbe und Landwirtschaft.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Leopoldshöhe</strong> mit Komponenten
      von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong>.
      Wir übernehmen Planung, Anmeldung, Montage, Speicher-Integration und Förderberatung – für eine
      sorgenfreie Umsetzung.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Profitieren Sie von Förderprogrammen wie <strong>KfW 442</strong>, EEG-Einspeisevergütung oder steuerlichen
      Abschreibungsmöglichkeiten – wir beraten Sie umfassend dazu.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt unverbindlich anfragen</strong> und Ihre individuelle <strong>Solaranlage in Leopoldshöhe</strong>
      realisieren – intelligent, nachhaltig und regional unterstützt.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Leopoldsh%C3%B6he"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Leopoldshöhe auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default LeopoldshoeheContent;