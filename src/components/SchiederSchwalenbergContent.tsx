import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const SchiederSchwalenbergContent = (
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
      Solaranlagen in Schieder‑Schwalenberg
    </Text>

    <Heading as="h2" size="xl">
      Photovoltaikanlagen in Schieder‑Schwalenberg – Energieautarkie mit System
    </Heading>

    <Text fontSize="lg" color="gray.700">
      In <strong>Schieder‑Schwalenberg</strong> – malerisch eingebettet im Südspan von Lippe – wächst der
      Bedarf an <strong>Solaranlagen</strong>. Dank vieler Einfamilienhäuser, Bauernhöfe und Gewerbedächer
      entstehen zunehmend neue <strong>Photovoltaikanlagen</strong> für sauberen Strom vom eigenen Dach.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Bereits über <strong>500 PV-Anlagen</strong> mit rund <strong>4.200 kWp Gesamtleistung</strong> sind hier installiert.
      Die Sonneneinstrahlung liegt bei etwa <strong>980–1.020 kWh/m² jährlich</strong> – optimale Bedingungen,
      um mit einer <strong>10 kWp-Anlage</strong> ungefähr <strong>9.500–10.000 kWh Strom pro Jahr</strong> zu erzeugen.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Mit gespeicherte Systeme von <strong>EcoFlow</strong> oder <strong>Sungrow</strong> lässt sich der <strong>Eigenverbrauch auf über 75 %</strong> steigern – unabhängig, nachhaltig und effizient.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> plant und installiert Ihre <strong>Solaranlage in Schieder‑Schwalenberg</strong> mit 
      starken Komponenten von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> –
      perfekt abgestimmt auf Ihr Dach und Ihren Strombedarf.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir übernehmen alles für Sie: individuelles Konzept, Förderberatung (z. B. <strong>KfW 442</strong>),
      Anmeldung, Montage, Netzanschluss und Integration von Speicher und Wallbox.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt Ihre PV-Anlage in Schieder‑Schwalenberg planen lassen</strong> – nutzen Sie Sonnenenergie nachhaltig und lokal!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Schieder-Schwalenberg"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Schieder‑Schwalenberg auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default SchiederSchwalenbergContent;