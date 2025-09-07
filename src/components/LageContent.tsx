import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const LageContent = (
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
      Solaranlagen in Lage (Lippe)
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Lage – Strom vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Lage</strong>, mitten im Kreis Lippe gelegen, setzen immer mehr Eigenheimbesitzer,
      Unternehmen und landwirtschaftliche Betriebe auf <strong>Photovoltaikanlagen</strong>.
      Mit einer eigenen <strong>Solaranlage</strong> erzeugen Sie nachhaltigen Strom und senken dauerhaft Ihre Energiekosten.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In der Stadt Lage sind über <strong>1.100 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von mehr als <strong>9.000 kWp</strong> installiert. Die durchschnittliche Sonneneinstrahlung beträgt rund <strong>1.000 kWh/m² jährlich</strong>, wodurch sich sehr gute Erträge erzielen lassen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp-PV-Anlage</strong> produziert in Lage etwa <strong>9.800 kWh Strom pro Jahr</strong>.
      In Verbindung mit einem Speicher lässt sich der Eigenverbrauch auf über <strong>75 %</strong> steigern – ideal
      für energieautarke Haushalte oder Unternehmen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> ist Ihr regionaler Fachpartner für <strong>Solaranlagen in Lage</strong>.
      Wir verbauen ausschließlich hochwertige Komponenten von <strong>Aiko</strong>, <strong>Trina</strong>,
      <strong>Sungrow</strong> und <strong>EcoFlow</strong> – leistungsstark, langlebig und perfekt auf Ihr Dach abgestimmt.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Von der Planung über die Anmeldung bis hin zur Montage und Fördermittelberatung (z. B. <strong>KfW 442</strong>)
      übernehmen wir alles aus einer Hand. Auch Speicher, Wallbox und Monitoring sind optional integrierbar.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre PV-Anlage in Lage planen lassen</strong> – für nachhaltige Stromerzeugung aus der Region.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Lage_(Lippe)"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Lage auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default LageContent;