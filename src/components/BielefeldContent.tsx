import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const BielefeldContent = (
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
      Solaranlagen in Bielefeld
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlage in Bielefeld – Ihre Energie von morgen beginnt heute
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Bielefeld</strong> – der größten Stadt in Ostwestfalen-Lippe – steigt der Ausbau von
      <strong> Photovoltaikanlagen</strong> rasant. Über <strong>8.000 Solaranlagen</strong> mit einer Gesamtleistung von mehr als
      <strong> 75 MWp</strong> sind bereits installiert. Ob Einfamilienhaus in Brackwede, Gewerbedach in Jöllenbeck
      oder Mehrfamilienhaus in Mitte – das Potenzial in Bielefeld ist enorm.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Dank einer durchschnittlichen Sonneneinstrahlung von <strong>1.000–1.080 kWh/m²</strong> jährlich
      und der fortschreitenden Elektrifizierung lohnt sich eine <strong>PV-Anlage in Bielefeld</strong> heute mehr denn je – sowohl ökologisch als auch wirtschaftlich.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine typische <strong>10 kWp-Photovoltaikanlage</strong> produziert jährlich rund <strong>9.500–10.500 kWh</strong> Strom.
      Mit einem Batteriespeicher erreichen Sie einen <strong>Eigenverbrauch von bis zu 80 %</strong> –
      ideal für Familien, Vermieter oder Unternehmen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> ist Ihr regionaler Partner für maßgeschneiderte <strong>Solaranlagen in Bielefeld</strong>.
      Wir planen und realisieren PV-Systeme mit hochwertigen Komponenten, garantieren fachgerechte
      Montage und kümmern uns um alles: Netzanschluss, Anmeldung, Förderung und Wartung.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Auch Fördermittel wie <strong>KfW-Zuschüsse</strong>, <strong>steuerliche Vorteile</strong> für Vermieter oder
      Investitionen nach dem <strong>Erneuerbare-Energien-Gesetz (EEG)</strong> machen die Installation besonders attraktiv.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt unverbindlich beraten lassen</strong> – und Ihre <strong>Photovoltaikanlage in Bielefeld</strong> gemeinsam mit uns realisieren!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Bielefeld"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Bielefeld auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default BielefeldContent;