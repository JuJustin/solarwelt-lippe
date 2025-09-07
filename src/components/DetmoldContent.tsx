import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const DetmoldContent = (
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
      Solaranlagen in Detmold
    </Text>

    <Heading as="h2" size="xl">
      Ihre Photovoltaikanlage in Detmold – Stromkosten senken & Zukunft sichern
    </Heading>

    <Text fontSize="lg" color="gray.700">
      <strong>Detmold</strong>, als Zentrum des Kreises Lippe, bietet mit seinen Wohngebieten, Industrieflächen
      und öffentlichen Gebäuden großes Potenzial für <strong>Photovoltaikanlagen</strong>. Bereits heute sind in Detmold
      über <strong>2.000 Solaranlagen</strong> mit einer Leistung von über <strong>18 MWp</strong> installiert – und täglich kommen neue hinzu.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Die jährliche Sonneneinstrahlung in Detmold liegt bei rund <strong>1.000–1.050 kWh/m²</strong>, ideal für
      wirtschaftlich betriebene <strong>PV-Anlagen</strong>. Mit einem <strong>10 kWp-System</strong> lassen sich jährlich bis zu <strong>10.000 kWh Strom</strong> erzeugen – besonders effizient in Kombination mit einem Speicher.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Als regionaler Fachbetrieb plant und installiert <strong>Solarwelt-Lippe</strong> Ihre <strong>Solaranlage in Detmold</strong>
      individuell – mit leistungsstarken Komponenten von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong>.
      Diese Hersteller stehen für höchste Qualität, Langlebigkeit und hohe Energieerträge.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Egal ob Einfamilienhaus in Heidenoldendorf, Gewerbeobjekt in Pivitsheide oder Neubaugebiet am Hiddeser Berg –
      wir bieten Lösungen für nahezu jedes Dach. Auch <strong>Balkonkraftwerke</strong> oder Speicherlösungen für
      Bestandsanlagen setzen wir fachgerecht um.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Selbstverständlich unterstützen wir Sie bei Förderprogrammen wie <strong>KfW-Zuschüssen</strong>, EEG-Einspeisevergütung
      oder steuerlicher Optimierung – damit Ihre Investition sich so schnell wie möglich rechnet.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Photovoltaikanlage in Detmold planen lassen</strong> – mit Speicher, Wallbox, Monitoring und allem, was dazugehört.
      Nachhaltig, effizient und regional.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Detmold"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Detmold auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default DetmoldContent;