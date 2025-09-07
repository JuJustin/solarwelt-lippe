import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const LemgoContent = (
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
      Solaranlagen in Lemgo
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Lemgo – Strom vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      <strong>Lemgo</strong>, als traditionsreiche Stadt im Kreis Lippe, bietet hervorragende Voraussetzungen
      für <strong>Photovoltaikanlagen</strong>. Mit zahlreichen Einfamilienhäusern, Gewerbebauten
      und landwirtschaftlichen Flächen ist die Region prädestiniert für wirtschaftliche
      <strong> Solaranlagen</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>1.300 PV-Anlagen</strong> mit mehr als <strong>11.000 kWp</strong> Gesamtleistung
      sind in Lemgo installiert. Die durchschnittliche Sonneneinstrahlung beträgt rund <strong>1.000–1.050 kWh/m² jährlich</strong> – ideale Bedingungen für eine nachhaltige Energiegewinnung.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-PV-Anlage</strong> erzeugt in Lemgo jährlich bis zu <strong>10.200 kWh Strom</strong>.
      Mit einem Speicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> steigern Sie den <strong>Eigenverbrauch auf bis zu 80 %</strong> – ideal für private Haushalte, Gewerbe und Landwirtschaft.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> realisiert Ihre <strong>Solaranlage in Lemgo</strong> individuell,
      mit hochwertigen Modulen von <strong>Aiko</strong> und <strong>Trina</strong>, intelligenter Steuerung
      und modernster Speichertechnik. Planung, Netzanschluss, Anmeldung und Förderberatung –
      alles aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir begleiten Sie durch den gesamten Prozess – inklusive Beratung zu <strong>KfW-Förderungen</strong>,
      Einspeisevergütung und steuerlicher Optimierung.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Solaranlage in Lemgo anfragen</strong> und von maximaler Effizienz und regionalem Service profitieren.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Lemgo"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Lemgo auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default LemgoContent;