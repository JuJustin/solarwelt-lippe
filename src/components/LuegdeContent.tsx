import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const LuegdeContent = (
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
      Solaranlagen in Lügde
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Lügde – Sonnenstrom für mehr Unabhängigkeit
    </Heading>

    <Text fontSize="lg" color="gray.700">
      <strong>Lügde</strong>, zwischen Weserbergland und Teutoburger Wald gelegen, bietet perfekte Bedingungen
      für eine <strong>eigene Solaranlage</strong>. Ob Eigenheim, Landwirtschaft oder Gewerbebetrieb –
      mit einer modernen <strong>Photovoltaikanlage</strong> senken Sie Ihre Energiekosten und produzieren
      umweltfreundlichen Strom direkt auf Ihrem Dach.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In Lügde sind bereits über <strong>400 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von <strong>3.500 kWp</strong> installiert. Die Sonneneinstrahlung liegt bei rund <strong>990–1.030 kWh/m² jährlich</strong>,
      was ideale Voraussetzungen für hohe Solarerträge schafft.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-Photovoltaikanlage</strong> in Lügde kann jährlich bis zu <strong>10.000 kWh Strom</strong> erzeugen. 
      In Kombination mit einem <strong>Speicher von EcoFlow oder Sungrow</strong> erreichen Sie <strong>Eigenverbrauchsquoten von über 75 %</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>Solaranlage in Lügde</strong> mit Technik von
      <strong> Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> – langlebig, leistungsstark und
      individuell auf Ihre Anforderungen abgestimmt.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir kümmern uns um alles: Förderberatung (z. B. <strong>KfW 442</strong>), Netzanschluss, Planung, Montage,
      Speicherintegration und optional auch Wallbox. Alles aus einer Hand – direkt aus der Region.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Photovoltaikanlage in Lügde anfragen</strong> – und von sauberem Sonnenstrom profitieren!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/L%C3%BCgde"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Lügde auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default LuegdeContent;