import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const OWLContent = (
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
      Solaranlagen in Ostwestfalen-Lippe (OWL)
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in OWL – regionale Qualität, starke Leistung
    </Heading>

    <Text fontSize="lg" color="gray.700">
      Ostwestfalen-Lippe (OWL) ist eine der aktivsten Regionen Deutschlands, wenn es um die Energiewende geht. In Städten wie <strong>Bielefeld, Detmold, Paderborn</strong> oder <strong>Lemgo</strong> entscheiden sich immer mehr Privatpersonen und Unternehmen für eine <strong>eigene Solaranlage</strong>. Die Kombination aus hoher Sonneneinstrahlung, Fördermöglichkeiten und dem Wunsch nach Energieunabhängigkeit treibt die Nachfrage nach modernen <strong>Photovoltaiksystemen</strong> an.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Solarwelt-Lippe ist als regionaler Fachbetrieb auf <strong>maßgeschneiderte PV-Lösungen</strong> in OWL spezialisiert. Wir installieren hochwertige <strong>Solaranlagen mit Speicher</strong> und bieten Ihnen volle Unterstützung – von der Planung bis zur Wartung. Unsere Kunden profitieren von langlebigen Komponenten führender Hersteller wie <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In OWL wurden bereits mehrere tausend PV-Anlagen mit zusammen über <strong>400 MWp installierter Leistung</strong> realisiert. Die jährliche Sonneneinstrahlung liegt im Durchschnitt bei <strong>1.000–1.050 kWh/m²</strong> – ein Top-Wert für Norddeutschland.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Neben privaten Eigenheimen bieten wir auch Lösungen für <strong>Landwirtschaft, Gewerbe und Industrie</strong> – inklusive Stromspeicher, Wallbox und intelligenter Steuerung. Nutzen Sie Förderprogramme wie die <strong>KfW 442</strong> oder Einspeisevergütungen gemäß EEG und machen Sie Ihre Dachfläche zum Kraftwerk.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt unverbindlich beraten lassen</strong> – und erfahren, wie sich Photovoltaik auch in Ihrer Stadt rechnet: in <strong>Detmold, Bad Salzuflen, Herford, Höxter, Lemgo, Schieder, Steinheim, Paderborn, Blomberg, Barntrup</strong> und vielen weiteren Orten.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Ostwestfalen-Lippe"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Ostwestfalen-Lippe auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default OWLContent;