import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const SteinheimContent = (
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
      Solaranlagen in Steinheim
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Steinheim – nachhaltiger Strom vom eigenen Dach
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Steinheim</strong>, idyllisch in Lippe gelegen, entscheiden sich immer mehr Haushalte,
      Gewerbebetriebe und landwirtschaftliche Betriebe für eine eigene <strong>Solaranlage</strong>. Moderne <strong>Photovoltaikanlagen</strong> ermöglichen eine nachhaltige Stromversorgung und steigern Ihre
      Unabhängigkeit.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>300 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von rund <strong>2.500 kWp</strong> sind in Steinheim installiert. Die jährliche Sonneneinstrahlung liegt bei etwa <strong>980–1.020 kWh/m²</strong>,
      was hervorragende Bedingungen für Stromerträge schafft.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp‑Photovoltaikanlage</strong> erzeugt in Steinheim jährlich ca. <strong>9.500–10.000 kWh Strom</strong>.
      Mit einem Energiespeicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> lässt sich der <strong>Eigenverbrauch auf über 75 %</strong> steigern – wirtschaftlich und ökologisch sinnvoll.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Steinheim</strong> mit hochwertigen Komponenten
      von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> –
      perfekt abgestimmt auf Ihr Dach und Ihren Strombedarf.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Unser Service umfasst Förderberatung (z. B. <strong>KfW 442</strong>), Netzanschluss, Planung, Montage,
      Speicher- und Wallbox-Integration – alles aus einer Hand und persönlich vor Ort.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Steinheim anfragen</strong> – für lokale, nachhaltige und effiziente Energieerzeugung!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Steinheim_(Westfalen)"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Steinheim auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default SteinheimContent;