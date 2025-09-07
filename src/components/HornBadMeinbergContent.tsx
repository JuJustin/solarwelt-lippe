import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const HornBadMeinbergContent = (
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
      Solaranlagen in Horn-Bad Meinberg
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Horn-Bad Meinberg – Ihre Energie von morgen
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Horn-Bad Meinberg</strong> – bekannt durch die Externsteine und den Teutoburger Wald –
      entscheiden sich immer mehr Eigentümer:innen für eine eigene <strong>Solaranlage</strong>.
      Die Region bietet mit ihren zahlreichen Ein- und Mehrfamilienhäusern sowie landwirtschaftlichen Gebäuden
      ideale Voraussetzungen für <strong>Photovoltaik</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Über <strong>800 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von mehr als <strong>7.000 kWp</strong> sind in der Stadt bereits installiert. Die durchschnittliche Sonneneinstrahlung liegt bei <strong>980–1.030 kWh/m²</strong> jährlich – gute Bedingungen für eine zuverlässige Stromproduktion.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-Photovoltaikanlage</strong> erzeugt in Horn-Bad Meinberg rund <strong>9.500–10.000 kWh</strong> Strom pro Jahr. Mit einem passenden Speicher können Sie bis zu <strong>80 % Ihres Strombedarfs</strong>
      selbst decken – unabhängig, sauber und wirtschaftlich.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> ist Ihr regionaler Fachbetrieb für <strong>PV-Anlagen in Horn-Bad Meinberg</strong>.
      Wir setzen auf bewährte Technik von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> –
      leistungsstark, langlebig und optimal auf Ihre Dachfläche abgestimmt.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Ob Neubau in Vahlhausen, Bauernhof in Leopoldstal oder Bestandsobjekt in Belle – wir kümmern uns
      um Planung, Montage, Netzanschluss, Speicher, Wallbox und Förderanträge (z. B. <strong>KfW</strong>).
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Solaranlage in Horn-Bad Meinberg anfragen</strong> und von unserer regionalen Erfahrung profitieren!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Horn-Bad_Meinberg"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Horn-Bad Meinberg auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default HornBadMeinbergContent;