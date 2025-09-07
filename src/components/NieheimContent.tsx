import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const NieheimContent = (
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
      Solaranlagen in Nieheim
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Nieheim – sauberer Strom vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Nieheim</strong>, umgeben von sanftem Hügelland und historischen Fachwerkhäusern,
      entscheiden sich immer mehr Familien, Landwirte und Betriebe für eine eigene <strong>Solaranlage</strong>.
      Moderne <strong>Photovoltaikanlagen</strong> senken nachhaltig die Energiekosten und stärken Ihre Unabhängigkeit.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>300 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von rund <strong>2.800 kWp</strong> sind 
      in Nieheim installiert. Die jährliche Sonneneinstrahlung liegt bei etwa <strong>980–1.020 kWh/m²</strong>,
      optimale Werte für effiziente Solarstromerzeugung.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-Photovoltaikanlage</strong> erzeugt in Nieheim jährlich ca. <strong>9.500–10.000 kWh Strom</strong>.
      In Kombination mit einem Energiespeicher, z. B. von <strong>EcoFlow</strong> oder <strong>Sungrow</strong>,
      lässt sich der Eigenverbrauch auf über <strong>75 %</strong> steigern – ideal für Familie, Gewerbe oder Landwirtschaft.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Nieheim</strong> mit Komponenten von
      <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> – langlebig,
      leistungsstark und exakt auf Ihre Dachfläche ausgelegt.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir unterstützen Sie bei allen Schritten: individuelle Planung, Förderberatung (z. B. <strong>KfW 442</strong>),
      Netzanschluss, Montage, Speicher-/Wallbox-Integration – alles aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Nieheim anfragen</strong> – für nachhaltige Energie aus der Region!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Nieheim"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Nieheim auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default NieheimContent;