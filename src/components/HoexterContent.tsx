import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const HoexterContent = (
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
      Solaranlagen in Höxter
    </Text>

    <Heading as="h2" size="xl">
      Ihre Photovoltaikanlage in Höxter – Strom vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Höxter</strong> – eingebettet im Weserbergland – entscheiden sich immer mehr Haushalte,
      Betriebe und Landwirte für eine eigene <strong>Photovoltaikanlage</strong>. Mit einer modernen
      <strong> Solaranlage</strong> senken Sie Ihre Stromkosten, erhöhen den Wert Ihrer Immobilie und leisten
      einen Beitrag zur regionalen Energiewende.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>1.200 PV-Anlagen</strong> mit rund <strong>10.000 kWp Leistung</strong> sind in Höxter installiert.
      Durch die günstige Sonneneinstrahlung von etwa <strong>980–1.040 kWh/m² jährlich</strong> bieten sich ideale
      Voraussetzungen für effiziente Stromerzeugung auf privaten und gewerblichen Dächern.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-PV-Anlage</strong> produziert in Höxter jährlich bis zu <strong>9.800 kWh Strom</strong>.
      In Kombination mit einem Speicher erreichen viele Haushalte <strong>Eigenverbrauchsquoten von über 75 %</strong>.
      Damit senken Sie Ihre Stromkosten dauerhaft – unabhängig vom Energieversorger.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> plant und installiert <strong>Photovoltaikanlagen in Höxter</strong> mit
      leistungsstarken Komponenten von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong>.
      Wir beraten Sie persönlich und übernehmen alle Schritte – von der Auslegung über die
      Installation bis hin zur Anmeldung beim Netzbetreiber.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Selbstverständlich prüfen wir für Sie mögliche Förderungen wie <strong>KfW-Zuschüsse</strong>,
      steuerliche Vorteile oder Einspeisevergütungen nach dem <strong>EEG</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Beratung anfordern</strong> und Ihre <strong>Solaranlage in Höxter</strong> mit uns realisieren –
      regional, zuverlässig und zukunftssicher.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/H%C3%B6xter"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Höxter auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default HoexterContent;