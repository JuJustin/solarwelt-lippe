import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const VlothoContent = (
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
      Solaranlagen in Vlotho
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Vlotho – Energie vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Vlotho</strong>, malerisch an der Weser gelegen, entscheiden sich immer mehr Hausbesitzer, Gewerbebetriebe und Landwirtschaftsbetriebe für eine eigene <strong>Photovoltaikanlage</strong>. Mit modernen <strong>Solaranlagen</strong> senken Sie dauerhaft Ihre Stromkosten und fördern saubere Energie direkt aus der Region.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In der Stadt Vlotho sind bereits über <strong>500 PV-Anlagen</strong> installiert – mit einer geschätzten Gesamtleistung von rund <strong>3 800 kWp</strong>. Die jährliche Sonneneinstrahlung liegt bei etwa <strong>1 000 kWh/m²</strong>, was hervorragende Voraussetzungen für effiziente Solarenergiesysteme schafft.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp‑Photovoltaikanlage</strong> erzeugt in Vlotho jährlich ca. <strong>9.800–10.200 kWh Strom</strong>. In Verbindung mit einem Speicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> lässt sich der <strong>Eigenverbrauch auf über 75 %</strong> steigern – nachhaltig und wirtschaftlich.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Vlotho</strong> mit hochwertiger Technik von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> – speziell zugeschnitten auf Ihre Dachform und Ihren Verbrauch.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir kümmern uns um alle Schritte: individuelle Planung, Förderberatung (z. B. <strong>KfW 442</strong>), Anmeldung beim Netzbetreiber, Montage sowie Speicher- und Wallbox-Integration – alles aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Vlotho planen</strong> – für saubere Energie, mehr Unabhängigkeit und regionale Wertschöpfung.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Vlotho"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Vlotho auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default VlothoContent;