import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const BadPyrmontContent = (
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
      Solaranlagen in Bad Pyrmont
    </Text>

    <Heading as="h2" size="xl">
      Ihre Photovoltaikanlage in Bad Pyrmont – Strom vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Bad Pyrmont</strong>, im Herzen des Weserberglands, gewinnen immer mehr Hausbesitzer
      und Betriebe ihre Energie mit einer eigenen <strong>Solaranlage</strong>. Die Kombination aus guter
      Sonneneinstrahlung und attraktiven Förderprogrammen macht die Region besonders geeignet für
      den Einsatz moderner <strong>Photovoltaikanlagen</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bis Ende 2023 wurden in Bad Pyrmont über <strong>1.300 PV-Anlagen</strong> installiert – mit einer
      geschätzten Gesamtleistung von rund <strong>11.000 kWp</strong>. Der Zubau steigt stetig, da viele Dächer
      ideal nach Süden ausgerichtet sind und großzügige Dachflächen auf Ein- und Mehrfamilienhäusern
      sowie Gewerbegebäuden genutzt werden.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Die mittlere Globalstrahlung liegt in Bad Pyrmont bei ca. <strong>1.000–1.050 kWh/m²</strong> im Jahr –
      perfekt für effiziente PV-Nutzung. Mit einem <strong>10 kWp-System</strong> können Sie jährlich etwa <strong>9.000–10.000 kWh</strong> Strom erzeugen. In Kombination mit einem Speicher ist ein <strong>Eigenverbrauch von 70–80 %</strong> realistisch.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> plant und installiert Ihre <strong>Photovoltaikanlage in Bad Pyrmont</strong> individuell
      – inklusive Batteriespeicher, Wallbox, Anmeldung beim Netzbetreiber und Unterstützung bei
      Förderprogrammen (z. B. <strong>KfW</strong> oder <strong>Niedersachsen-Förderung</strong>).
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir verwenden ausschließlich Markenmodule und Wechselrichter namhafter Hersteller und setzen auf
      fachgerechte Auslegung – passend zu Ihrem Dach, Verbrauch und Budget.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt kostenlos beraten lassen</strong> und Ihre <strong>Solaranlage in Bad Pyrmont</strong> planen –
      nachhaltig, effizient und aus einer Hand!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Bad_Pyrmont"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Bad Pyrmont auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default BadPyrmontContent;