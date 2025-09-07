import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const OerlinghausenContent = (
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
      Solaranlagen in Oerlinghausen
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Oerlinghausen – sauberer Strom für Ihre Region
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Oerlinghausen</strong>, mit seinem Mix aus kleineren Wohngebieten, Gewerbeflächen und
      zahlreichen Neubauten, wächst die Nachfrage nach <strong>Solaranlagen</strong>. Moderne <strong>Photovoltaikanlagen</strong> ermöglichen eine nachhaltige Stromversorgung direkt vor Ort.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>550 PV-Anlagen</strong> mit insgesamt rund <strong>4.800 kWp</strong> sind in Oerlinghausen
      installiert. Dank einer jährlichen Sonneneinstrahlung von ca. <strong>1.000 kWh/m²</strong> erzielt man
      effiziente Erträge.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-Photovoltaikanlage</strong> erzeugt hier jährlich etwa <strong>9.500–10.000 kWh Strom</strong>.
      In Kombination mit einem Speicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> kann der <strong>Eigenverbrauch über 75 %</strong> liegen – sauber, wirtschaftlich und unabhängig.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> setzt Ihre <strong>PV-Anlage in Oerlinghausen</strong> mit
      Komponenten von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> um. Von Planung über Netzanschluss bis Speicher- und Wallboxintegration –
      alles aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir beraten Sie zu Förderprogrammen wie <strong>KfW 442</strong>, EEG-Vergütung und steuerlichen
      Abschreibungen – damit sich Ihre Investition schnell amortisiert.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Oerlinghausen planen</strong> – nachhaltig, regional und effizient!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Oerlinghausen"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Oerlinghausen auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default OerlinghausenContent;