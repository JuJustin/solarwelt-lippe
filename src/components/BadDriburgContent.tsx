import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const BadDriburgContent = (
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
      Solaranlagen in Bad Driburg
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Bad Driburg – saubere Energie aus der Region
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Bad Driburg</strong>, dem Heilbad und Kurort im Teutoburger Wald, entdecken immer mehr Haushalte,
      Hotels und Gewerbebetriebe den Nutzen einer eigenen <strong>Solaranlage</strong>. Moderne <strong>Photovoltaikanlagen</strong> sparen Stromkosten und tragen zur nachhaltigen Energieerzeugung bei.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In der Stadt sind bereits über <strong>400 PV-Anlagen</strong> mit etwa <strong>3.200 kWp Gesamtleistung</strong> installiert. Die jährliche Sonneneinstrahlung liegt bei rund <strong>1.000 kWh/m²</strong> – ideale Bedingungen für hohe Erträge.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp‑Photovoltaikanlage</strong> erzeugt in Bad Driburg ca. <strong>9.800–10.000 kWh Strom pro Jahr</strong>.
      In Kombination mit einem Speicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> kann der Eigenverbrauch
      auf über <strong>75 %</strong> gesteigert werden – nachhaltig und autark versorgt.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> plant und installiert Ihre <strong>PV-Anlage in Bad Driburg</strong> mit Premium-Technik von
      <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> –
      passend zu Ihrem Dach, Verbrauch und Budget.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir übernehmen alle Schritte: Planung, Förderberatung (z. B. <strong>KfW 442</strong>), Netzanschluss,
      Montage sowie Speicher- oder Wallboxintegration – kompetent und aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Bad Driburg planen</strong> – für saubere, regionale Energie und unabhängige Stromversorgung.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Bad_Driburg"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Bad Driburg auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default BadDriburgContent;