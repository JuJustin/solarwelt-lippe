import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const BrakelContent = (
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
      Solaranlagen in Brakel
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Brakel – Ihr Beitrag zur Energiewende vor Ort
    </Heading>

    <Text fontSize="lg" color="gray.700">
      Die Stadt <strong>Brakel</strong> im Kreis Höxter setzt vermehrt auf nachhaltige Energiequellen –
      insbesondere auf <strong>Photovoltaik</strong>. Mit über <strong>1.000 installierten PV-Anlagen</strong> und einer
      Gesamtleistung von rund <strong>8.500 kWp</strong> entwickelt sich Brakel zu einem wichtigen Solarstandort in
      Ostwestfalen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Dank einer durchschnittlichen Sonneneinstrahlung von <strong>980–1.030 kWh/m²</strong> im Jahr
      bietet Brakel sehr gute Bedingungen für den Betrieb wirtschaftlicher <strong>PV-Anlagen</strong>.
      Ob in Gehrden, Hembsen, Bellersen oder Istrup – große Dachflächen und freie Grundstücke
      ermöglichen den effektiven Einsatz von <strong>Solaranlagen mit Speicher und Wallbox</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-Photovoltaikanlage</strong> erzeugt in Brakel jährlich rund <strong>9.500–10.000 kWh Strom</strong>.
      Mit Speicherlösungen können Sie bis zu <strong>80 % Eigenverbrauch</strong> erreichen – und machen sich
      unabhängiger vom Strompreis.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> ist Ihr erfahrener Ansprechpartner in der Region: Wir planen, installieren
      und warten Ihre <strong>Solaranlage in Brakel</strong> – inklusive individueller Beratung,
      Fördermittelservice (z. B. <strong>KfW 442</strong>), Anlagenüberwachung und Notdienst.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir arbeiten ausschließlich mit geprüften Komponenten führender Marken wie AIKO Solar, EcoFlow, Huawei Speicher – für maximale Langlebigkeit, Leistung und Garantie.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt unverbindlich beraten lassen</strong> – gemeinsam realisieren wir Ihre <strong>Photovoltaikanlage in Brakel</strong>
      mit voller Förderung, modernster Technik und regionalem Service.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Brakel"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Brakel auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default BrakelContent;