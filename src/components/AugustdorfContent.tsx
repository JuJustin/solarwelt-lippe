import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const AugustdorfContent = (
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
      Solaranlagen in Augustdorf
    </Text>

    <Heading as="h2" size="xl">
      Ihre Photovoltaikanlage in Augustdorf – nachhaltig investieren & sparen
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Augustdorf</strong> wurden bis Ende 2023 bereits über <strong>850 Photovoltaikanlagen</strong> installiert –
      mit einer Gesamtleistung von mehr als <strong>7.500 kWp</strong>. Damit zählt die Gemeinde im Kreis Lippe
      zu den aktivsten PV-Regionen in Ostwestfalen. Der Trend ist klar: Immer mehr Bürger:innen
      investieren in ihre eigene <strong>Solaranlage</strong>, um Stromkosten zu senken und unabhängig zu werden.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine durchschnittliche PV-Anlage auf einem Einfamilienhaus in Augustdorf hat ca. <strong>8–12 kWp</strong> und
      spart jährlich bis zu <strong>1.200–1.800 €</strong> an Stromkosten – je nach Verbrauch und Speichergröße.
      Durch das EEG erhalten Sie zudem eine garantierte Einspeisevergütung über 20 Jahre.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Die Sonneneinstrahlung in Augustdorf liegt bei rund <strong>980–1.020 kWh/m² jährlich</strong>.
      Flache Dächer, große Dachflächen und oft ideale Südausrichtungen bieten optimale Voraussetzungen
      für eine wirtschaftliche <strong>Photovoltaikanlage</strong>.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Mit <strong>Solarwelt-Lippe</strong> setzen Sie auf einen erfahrenen PV-Fachbetrieb aus der Region.
      Wir bieten Ihnen Planung, Montage, Speicherintegration und Unterstützung bei Förderanträgen –
      z. B. <strong>KfW 442</strong> oder <strong>NRW-Förderprogramme</strong> für Batteriespeicher und Ladeinfrastruktur.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Unsere Anlagen sind mit Markenmodulen (z. B. AIKO Solar, EcoFlow, Huawei Speicher) ausgestattet
      und kommen auf höchste Wirkungsgrade. Auch eine Kombination mit einer <strong>Wallbox</strong> für Ihr E-Auto ist problemlos möglich.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt kostenlos beraten lassen</strong> und Ihre eigene <strong>PV-Anlage in Augustdorf</strong> verwirklichen –
      wir begleiten Sie von der ersten Idee bis zur Anmeldung beim Netzbetreiber.
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Augustdorf"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Augustdorf auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default AugustdorfContent;