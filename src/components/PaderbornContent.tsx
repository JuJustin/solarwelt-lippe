import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const PaderbornContent = (
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
      Solaranlagen in Paderborn
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Paderborn – sauberer Strom aus der Region
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Paderborn</strong>, einer dynamischen Universitätsstadt im östlichen NRW, steigt der
      Ausbau von <strong>Solaranlagen</strong> rasant. Sowohl im privaten als auch im gewerblichen Bereich
      setzen immer mehr Menschen auf ihre eigene <strong>Photovoltaikanlage</strong>, um Energiekosten zu senken und CO₂ zu reduzieren.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>3.500 PV-Anlagen</strong> mit einer geschätzten Gesamtleistung von mehr als <strong>30 MWp</strong> sind in Paderborn installiert. Dank einer jährlichen Sonneneinstrahlung von
      rund <strong>1.020 kWh/m²</strong> erzielt man hier hervorragende Erträge.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp-Photovoltaikanlage</strong> erzeugt etwa <strong>10.200 kWh Strom im Jahr</strong>.
      Mit einem Speicher von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> können Sie
      Ihren <strong>Eigenverbrauch auf bis zu 80 %</strong> steigern – ideal für Einfamilienhäuser, Mehrfamilienhäuser und Unternehmen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> installiert Ihre <strong>PV-Anlage in Paderborn</strong> mit
      hochwertigen Modulen und Wechselrichtern von <strong>Aiko</strong>, <strong>Trina</strong> sowie
      Speicherlösungen von <strong>Sungrow</strong> und <strong>EcoFlow</strong> – leistungsstark,
      langlebig und zugeschnitten auf Ihr Dach und Budget.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir übernehmen alles – von der Planung, Förderberatung (z. B. <strong>KfW 442</strong>), Anmeldung beim
      Netzbetreiber, Montage bis zur Integration von Speicher und Wallbox – kompetent und aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre Solaranlage in Paderborn planen lassen</strong> – regional, effizient und zukunftsgerichtet.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Paderborn"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Paderborn auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default PaderbornContent;