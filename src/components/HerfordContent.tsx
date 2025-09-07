import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const HerfordContent = (
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
      Solaranlagen in Herford
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Herford – saubere Energie für Ihre Zukunft
    </Heading>

    <Text fontSize="lg" color="gray.700">
      <strong>Herford</strong>, als wirtschaftliches Zentrum zwischen Bielefeld und Minden, setzt zunehmend auf
      <strong> Photovoltaik</strong>. Ob Reihenhaus in Elverdissen, Gewerbehalle in Diebrock oder Mehrfamilienhaus in
      Schwarzenmoor – mit einer <strong>modernen Solaranlage</strong> sichern Sie sich langfristige Unabhängigkeit vom Strompreis.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>3.000 PV-Anlagen</strong> mit einer geschätzten Leistung von mehr als <strong>28 MWp</strong> sind
      in Herford installiert. Das macht die Stadt zu einem der aktivsten Solarstandorte in Ostwestfalen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Die mittlere Globalstrahlung beträgt in Herford etwa <strong>1.000–1.060 kWh/m² jährlich</strong>. Eine typische <strong>10 kWp-Photovoltaikanlage</strong> erzeugt damit <strong>9.500–10.500 kWh Strom</strong> – ideal zur direkten Nutzung
      in Haushalt oder Betrieb. Mit einem Speicher erreichen Sie bis zu <strong>80 % Eigenverbrauch</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>Solaranlage in Herford</strong> mit hochwertigen Komponenten von
      <strong> Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> – für maximale Leistung, Langlebigkeit und digitale Steuerung.
      Ob Steildach, Flachdach oder PV auf der Garage: Wir liefern die optimale Lösung für Ihre Immobilie.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir begleiten Sie durch den gesamten Prozess – von der Planung über die Montage bis zur Inbetriebnahme.
      Auch Förderungen wie <strong>KfW 442</strong>, steuerliche Vorteile oder EEG-Vergütung binden wir mit ein.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt PV-Anlage in Herford planen lassen</strong> – regional, persönlich und technisch auf höchstem Niveau.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Herford"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Herford auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default HerfordContent;