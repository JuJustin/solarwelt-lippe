import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const BlombergContent = (
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
      Solaranlagen in Blomberg
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Blomberg – Ihr Weg zur Energieunabhängigkeit
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Blomberg</strong>, am Rande des Teutoburger Waldes, setzen immer mehr Hausbesitzer:innen,
      Unternehmen und landwirtschaftliche Betriebe auf eigene <strong>Solaranlagen</strong>. Die ländlich geprägte Struktur,
      großzügige Dachflächen und günstige Ausrichtung bieten perfekte Voraussetzungen für eine
      wirtschaftlich starke <strong>Photovoltaikanlage in Blomberg</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits heute sind in der Region über <strong>750 PV-Anlagen</strong> mit einer geschätzten Leistung von
      rund <strong>6.500 kWp</strong> installiert – Tendenz steigend. Besonders beliebt: <strong>10 kWp-Anlagen</strong> mit
      Batteriespeicher, mit denen Haushalte bis zu <strong>80 % ihres Stroms selbst erzeugen</strong> und nutzen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Die jährliche Sonneneinstrahlung liegt in Blomberg bei etwa <strong>980–1.030 kWh/m²</strong>, was hervorragende
      Voraussetzungen für effiziente <strong>PV-Systeme</strong> schafft. Damit lassen sich jährlich je nach Anlage <strong>8.500–10.000 kWh</strong> Strom erzeugen – ideal für Eigenheime, Mehrfamilienhäuser oder Gewerbe.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> ist Ihr Partner in Blomberg: Wir planen, installieren und warten
      <strong> Photovoltaikanlagen mit Speicher, Wallbox und Förderberatung</strong> – alles aus einer Hand,
      mit hochwertigen Komponenten führender Hersteller wie AIKO Solar, EcoFlow, Huawei Speicher.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Auch bei Förderprogrammen (z. B. <strong>KfW 442, BAFA oder steuerlicher Abschreibung</strong>) begleiten wir Sie – von der Auswahl
      bis zur Antragsstellung. Und das Beste: Die Anlagen amortisieren sich oft in weniger als <strong>10 Jahren</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Blomberg planen</strong> – sauberer Strom, sichere Versorgung, lokale Umsetzung.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Blomberg"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Blomberg auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default BlombergContent;