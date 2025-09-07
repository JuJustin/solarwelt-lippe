import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const AltenbekenContent = (
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
      Solaranlagen in Altenbeken
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Altenbeken – nachhaltig, lokal und effizient
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Altenbeken</strong> im Kreis Paderborn setzen immer mehr Eigenheimbesitzer, Gewerbebetriebe und landwirtschaftliche Betriebe auf eine eigene <strong>Solaranlage</strong>. Eine moderne <strong>Photovoltaikanlage</strong> erzeugt sauberen Strom direkt vom eigenen Dach – umweltfreundlich und kostensparend.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Über <strong>300 PV-Anlagen</strong> mit geschätzten <strong>2.500 kWp Gesamtleistung</strong> sind in Altenbeken installiert. Bei etwa <strong>1.020 kWh/m²</strong> Sonneneinstrahlung pro Jahr lassen sich mit einer <strong>10 kWp-Anlage</strong> jährlich rund <strong>10.000 kWh Strom</strong> erzeugen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In Kombination mit einem Speicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> kann der <strong>Eigenverbrauch auf über 75 %</strong> steigen – für maximale Unabhängigkeit und einen nachhaltigen Beitrag zur Energiewende.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Altenbeken</strong> mit bewährter Technik von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> – zuverlässig, langlebig und zugeschnitten auf Ihr Dach.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir übernehmen den gesamten Prozess: individuelle Planung, Förderberatung (z. B. <strong>KfW 442</strong>), Netzanschluss, Montage, Speicher- oder Wallbox-Integration – alles aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Altenbeken anfragen</strong> – für nachhaltige Energie, Kostenersparnis und regionale Wertschöpfung!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Altenbeken"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Altenbeken auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default AltenbekenContent;