import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const DoerentrupContent = (
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
      Solaranlagen in Dörentrup
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Dörentrup – Energie vom eigenen Dach nutzen
    </Heading>

    <Text fontSize="lg" color="gray.700">
      <strong>Dörentrup</strong> im Kreis Lippe ist geprägt durch Einfamilienhäuser, landwirtschaftliche Gebäude
      und große Dachflächen – ideale Voraussetzungen für eine wirtschaftlich starke <strong>Solaranlage</strong>.
      Die sonnige Lage und die verfügbaren Flächen machen <strong>Photovoltaik in Dörentrup</strong> besonders lohnenswert.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In der Region wurden bereits über <strong>400 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von rund <strong>3.500 kWp</strong> installiert. Mit einer modernen <strong>10 kWp-Anlage</strong> können jährlich bis zu <strong>10.000 kWh Strom</strong> produziert werden – das deckt einen Großteil des Strombedarfs eines Haushalts
      mit Speicher.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> ist Ihr regionaler Ansprechpartner für <strong>Photovoltaikanlagen in Dörentrup</strong>.
      Wir setzen auf hochwertige Technik von <strong>Aiko</strong> und <strong>Trina</strong> (Solarmodule), <strong>Sungrow</strong> (Wechselrichter) sowie <strong>EcoFlow</strong> (Speicherlösungen) – zuverlässig, langlebig und effizient.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Ob Scheunendach, Neubau oder Satteldach – wir finden die passende Lösung für Ihre Immobilie und
      kümmern uns um alles: Planung, Montage, Netzanschluss, Anmeldung und Förderung
      (z. B. <strong>KfW-Zuschüsse</strong> oder steuerliche Vorteile).
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Dörentrup anfragen</strong> und dauerhaft Stromkosten sparen –
      mit Technik auf dem neuesten Stand und persönlicher Betreuung vor Ort.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Dörentrup"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Dörentrup auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default DoerentrupContent;