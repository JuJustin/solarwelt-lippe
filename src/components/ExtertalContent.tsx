import React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const ExtertalContent = (
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
      Solaranlagen in Extertal
    </Text>

    <Heading as="h2" size="xl">
      Ihre Photovoltaikanlage in Extertal – regional, effizient & nachhaltig
    </Heading>

    <Text fontSize="lg" color="gray.700">
      <strong>Extertal</strong> im äußersten Nordosten von NRW bietet mit seinen ländlich geprägten Ortsteilen
      und zahlreichen freistehenden Gebäuden ideale Voraussetzungen für die Nutzung von
      <strong> Solaranlagen</strong>. Mit moderner <strong>Photovoltaik</strong> senken Sie Ihre Stromkosten und leisten
      gleichzeitig einen aktiven Beitrag zur Energiewende – direkt vor Ort.
    </Text>

    <Text fontSize="lg" color="gray.700">
      In der Gemeinde sind bereits über <strong>500 PV-Anlagen</strong> installiert – mit einer geschätzten
      Gesamtleistung von <strong>4.000–4.500 kWp</strong>. Die jährliche Sonneneinstrahlung liegt bei
      <strong>980–1.030 kWh/m²</strong>, was hervorragende Bedingungen für hohe Stromerträge bietet.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Eine <strong>10 kWp-Photovoltaikanlage</strong> erzeugt in Extertal rund <strong>9.500–10.000 kWh</strong> Strom pro Jahr.
      In Verbindung mit einem Speicher kann der <strong>Eigenverbrauch auf über 75 %</strong> gesteigert werden –
      ideal für Familien, Selbstständige und Landwirte.
    </Text>

    <Text fontSize="lg" color="gray.700">
      <strong>Solarwelt-Lippe</strong> plant und installiert Ihre <strong>PV-Anlage in Extertal</strong> mit geprüften Komponenten
      von <strong>Aiko</strong>, <strong>Trina</strong>, <strong>Sungrow</strong> und <strong>EcoFlow</strong> – langlebig, leistungsstark und auf Ihre Dachfläche
      abgestimmt. Ob Satteldach, Scheunendach oder Carport – wir holen das Maximum für Sie heraus.
    </Text>

    <Text fontSize="lg" color="gray.700">
      Wir übernehmen alle Schritte: Förderberatung (z. B. <strong>KfW</strong>), Planung, Anmeldung beim Netzbetreiber
      und auf Wunsch auch Speicher- und Wallbox-Integration – alles aus einer Hand.
    </Text>

    <Text fontSize="lg" color="gray.700">
      👉 <strong>Jetzt kostenlos beraten lassen</strong> – und Ihre <strong>Solaranlage in Extertal</strong> professionell und zukunftssicher umsetzen!
    </Text>

    <Link
      href="https://de.wikipedia.org/wiki/Extertal"
      isExternal
      color="orange.500"
      fontWeight="bold"
    >
      Extertal auf Wikipedia ansehen →
    </Link>
  </Stack>
);

export default ExtertalContent;