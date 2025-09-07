import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const BadSalzuflenContent = (
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
      Solaranlagen in Bad Salzuflen
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlage in Bad Salzuflen – sauberer Strom vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Bad Salzuflen</strong>, einer der größten Städte im Kreis Lippe, steigt das Interesse an
      <strong> PV-Anlagen</strong> seit Jahren kontinuierlich. Mehr als <strong>2.300 Solaranlagen</strong> sind hier bereits
      in Betrieb – mit einer installierten Gesamtleistung von über <strong>21 MWp</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Die Region bietet mit durchschnittlich <strong>1.000–1.050 kWh/m²</strong> Globalstrahlung jährlich sehr gute
      Bedingungen für eine <strong>Photovoltaikanlage in Bad Salzuflen</strong>. Ob Flach- oder Satteldach,
      Privathaus oder Gewerbeimmobilie – in fast allen Stadtteilen lassen sich wirtschaftlich starke Anlagen umsetzen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Ein typisches Einfamilienhaus kann mit einer <strong>10 kWp Solaranlage</strong> rund <strong>9.500 kWh</strong> Strom pro Jahr erzeugen
      – ideal in Kombination mit einem <strong>Stromspeicher</strong> und einer <strong>Wallbox</strong> für das E-Auto. So erreichen
      Sie bis zu <strong>80 % Eigenverbrauch</strong> und maximale Unabhängigkeit vom Energieversorger.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Als erfahrener regionaler Anbieter bietet <strong>Solarwelt-Lippe</strong> Ihnen individuelle Beratung,
      passgenaue Planung und professionelle Montage – inkl. Unterstützung bei Förderanträgen (z. B.
      <strong> KfW</strong>, <strong>BAFA</strong> oder kommunale Programme). Auch Unternehmen profitieren durch steuerliche Vorteile
      und Energieeinsparung.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Unsere PV-Systeme werden ausschließlich mit hochwertigen Komponenten installiert – z. B. von
      AIKO Solar, EcoFlow, Huawei Speicher – mit bis zu <strong>25 Jahren Garantie</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Photovoltaik in Bad Salzuflen anfragen</strong> – wir machen Sie unabhängig, nachhaltig & effizient.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Bad_Salzuflen"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Bad Salzuflen auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default BadSalzuflenContent;