import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const SchlangenContent = (
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
      Solaranlagen in Schlangen
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Schlangen – Energie vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Schlangen</strong>, am Tor zum Teutoburger Wald, entscheiden sich immer mehr
      Eigenheimbesitzer, Familienbetriebe und Freiberufler:innen für eine eigene <strong>Solaranlage</strong>.
      Mit einer modernen <strong>Photovoltaikanlage</strong> sichern Sie sich sauberen Strom und
      reduzieren langfristig Ihre Energiekosten.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In der Gemeinde sind bereits über <strong>350 PV-Anlagen</strong> mit einer Gesamtleistung von etwa <strong>3 300 kWp</strong> installiert. 
      Die jährliche Sonneneinstrahlung beträgt ca. <strong>990–1.020 kWh/m²</strong>,
      was ideal für eine effiziente Stromproduktion ist.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp-Anlage</strong> erzeugt in Schlangen rund <strong>9.500–10.000 kWh</strong> Strom pro Jahr.
      In Kombination mit einem Speicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> lässt sich der
      Eigenverbrauch auf über <strong>75 %</strong> steigern – wirtschaftlich und unabhängig.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Schlangen</strong> mit hochwertigen
      Komponenten von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> –
      langlebig und exakt auf Ihr Dach abgestimmt.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir begleiten Sie durch alle Schritte: individuelle Planung, Förderberatung (z. B. <strong>KfW 442</strong>),
      Anmeldung beim Netzbetreiber, Montage und Integration von Speicher und optionaler Wallbox – alles aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Schlangen anfragen</strong> – sauberer Solarstrom für Ihr Zuhause oder Unternehmen!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Schlangen_(Gemeinde)"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Schlangen auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default SchlangenContent;