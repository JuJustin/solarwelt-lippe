import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

interface CityFaqProps {
  city: string;
}

const CityFaq: React.FC<CityFaqProps> = ({ city }) => {
  const allCities = [
    'Schieder-Schwalenberg',//
    'Detmold',//
    'Blomberg',//
    'Lemgo',//
    'Lage',//
    'Horn-Bad Meinberg',//
    'Bad Salzuflen',//
    'Oerlinghausen',//
    'Paderborn',//
    'Höxter',//
    'Barntrup',//
    'Augustdorf',//
    'Steinheim',//
    'Brakel',//
    'Nieheim',//
    'Extertal',//
    'Kalletal',//
    'Vlotho',//
    'Löhne',//
    'Bielefeld',//
    'Herford',//
    'Bad Pyrmont',//
    'Dörentrup',//
    'Leopoldshöhe',//
    'Lügde',//
    'Schlangen',//
    'Bad Driburg',//
    'Altenbeken',//
  ];

  const slugify = (name: string) =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[äöüß]/g, (match) => {
        const map: Record<string, string> = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' };
        return map[match] || match;
      });

  const renderCityLinks = () => {
    return allCities.map((c, i) => (
      <React.Fragment key={c}>
        <Link href={`/photovoltaik-${slugify(c)}`}>{c}</Link>
        {i < allCities.length - 2 ? ', ' : ''}
        {i === allCities.length - 2 ? ' und ' : ''}
      </React.Fragment>
    ));
  };

  const faqData = [
    {
      q: `Wie lange dauert die Installation einer PV-Anlage in ${city}?`,
      a: `Die Installation einer Photovoltaikanlage in ${city} dauert in der Regel zwischen 1 und 3 Tagen – abhängig von Anlagengröße und Dachbeschaffenheit.`,
    },
    {
      q: `Bietet Solarwelt-Lippe auch Wartungsdienste für PV-Anlagen in ${city} an?`,
      a: `Ja, wir bieten regelmäßige Wartung und technische Betreuung für Ihre Solaranlage in ${city}, damit Ihre Anlage stets effizient arbeitet.`,
    },
    {
      q: `Kann ich Förderungen oder Zuschüsse für meine PV-Anlage in ${city} erhalten?`,
      a: `Ja, es gibt attraktive Förderprogramme für Photovoltaikanlagen in ${city}. Wir beraten Sie gerne zu KfW-Förderung, Landeszuschüssen und Einspeisevergütung.`,
    },
    {
      q: `Wie viel kann ich mit einer PV-Anlage in ${city} sparen?`,
      a: `Je nach Verbrauch und Anlagengröße können Sie in ${city} jährlich mehrere hundert bis tausende Euro an Stromkosten einsparen.`,
    },
    {
      q: `Wie umweltfreundlich sind PV-Anlagen von Solarwelt-Lippe?`,
      a: `Unsere PV-Anlagen in ${city} produzieren CO₂-freien Strom und tragen aktiv zur Energiewende bei.`,
    },
    {
      q: `Welche Garantien bietet Solarwelt-Lippe auf PV-Anlagen in ${city}?`,
      a: `Unsere Anlagen haben bis zu 25 Jahre Produkt- und Leistungsgarantie – auch für Installationen in ${city}.`,
    },
    {
      q: `Was unterscheidet Solarwelt-Lippe in ${city} von anderen Anbietern?`,
      a: `Wir sind regional verwurzelt, bieten individuelle Beratung und setzen ausschließlich auf hochwertige Komponenten.`,
    },
    {
      q: `Wie kann ich ein Angebot für eine PV-Anlage in ${city} erhalten?`,
      a: `Einfach Kontaktformular ausfüllen oder telefonisch anfragen – wir erstellen Ihnen ein kostenloses, individuelles Angebot.`,
    },
    {
      q: `Was ist Photovoltaik?`,
      a: `Photovoltaik ist die Umwandlung von Sonnenlicht in elektrische Energie mithilfe von Solarzellen.`,
    },
    {
      q: `Was kostet eine PV-Anlage in ${city}?`,
      a: `Je nach Größe und Ausstattung kostet eine Solaranlage in ${city} meist zwischen 8.000 und 25.000 Euro.`,
    },
    {
      q: `Wie hoch ist die Rendite einer PV-Anlage?`,
      a: `Die durchschnittliche Rendite liegt bei 5–8 % jährlich – je nach Eigenverbrauch und Förderquote.`,
    },
    {
      q: `Lohnt sich ein Stromspeicher?`,
      a: `Ja, mit einem Stromspeicher erhöhen Sie den Eigenverbrauch Ihrer PV-Anlage in ${city} deutlich und machen sich unabhängiger vom Strompreis.`,
    },
    {
      q: 'In welchen Städten ist Solarwelt-Lippe aktiv?',
      a: (
        <Text>
          Wir sind aktiv in {renderCityLinks()} – und natürlich auch in vielen weiteren Städten der Region.
        </Text>
      ),
    },
  ];

  const bg = useColorModeValue('gray.50', 'gray.800');

  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Häufige Fragen zu Photovoltaik & Solaranlagen in ${city} – Installation, Förderung, Kosten, Wartung & mehr. Solarwelt-Lippe beantwortet Ihre Fragen.`}
        />
      </Head>

      <Box bg={bg} py={{ base: 10, md: 16 }}>
        <Container maxW="7xl">
          <Stack spacing={6}>
            <Heading as="h2" size="xl" color="gray.800">
              Häufige Fragen zu Photovoltaik in {city}
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Sie haben Fragen rund um Solaranlagen in {city}? Hier finden Sie Antworten auf die häufigsten Themen –
              von Förderungen über Kosten bis zur Technik.
            </Text>

            <Accordion allowMultiple borderRadius="lg" bg="white" boxShadow="md" px={4} py={2}>
              {faqData.map((item, index) => (
                <AccordionItem key={index} border="none">
                  <h3>
                    <AccordionButton _expanded={{ bg: 'orange.50' }}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        {item.q}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} color="gray.700">
                    {item.a}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CityFaq;