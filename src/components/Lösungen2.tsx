import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcFactory,
  FcLandscape,
  FcChargeBattery,
  FcBusinessman,
} from 'react-icons/fc';
import Canvas from './Canvas';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box as="article"
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading as="h3" size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

interface GridProps {
  city: string;
}

export default function GridListWith({ city }: GridProps) {
  return (
    <section aria-label={"Zielgruppenspezifische Solarlösungen in " + city}>
      {/* Ensure the Blob is rendered correctly */}
      <Box position="relative" overflow="visible">
        <Box p={4} pt={24}>
          <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
            <Heading as="h2" fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
              Vertrauen Sie Ihre Energiewende erfahrenen Experten an.
            </Heading>
            <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
              Setzen Sie in {city} auf umweltfreundliche Energiegewinnung mit maßgeschneiderten Photovoltaik-Lösungen und reduzieren Sie Ihren ökologischen Fußabdruck. Pader Solartechnik bietet Ihnen modernste Technologien und individuelle Lösungen für nachhaltige Solarkonzepte – sei es für Privathaushalte, gewerbliche Gebäude, innovative Energiegemeinschaften oder nachhaltige Infrastrukturprojekte.
            </Text>
          </Stack>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Card
                heading={'Private Haushalte'}
                icon={<Icon as={FcBusinessman} w={10} h={10} />}
                description={
                  `Mit einer Solaranlage für Ihr Zuhause in ${city} machen Sie einen bedeutenden Schritt hin zur Energieunabhängigkeit, reduzieren Ihre Stromkosten erheblich und leisten gleichzeitig einen wertvollen Beitrag zu einer nachhaltigen Zukunft.`
                }
                href={'#'}
              />
              <Card
                heading={'Stromspeicher & Wallboxen'}
                icon={<Icon as={FcChargeBattery} w={10} h={10} />}
                description={
                  'Mit einem Stromspeicher maximieren Sie die Nutzung Ihres Solarstroms und verwenden die Energie flexibel zu jeder Tageszeit. Ergänzen Sie Ihre Anlage mit einer Wallbox, um Ihr Elektrofahrzeug bequem und nachhaltig zu Hause mit Solarenergie aufzuladen. Beide Lösungen bieten Ihnen maximale Unabhängigkeit – gemeinsam oder auch einzeln.'
                }
                href={'#'}
              />
              <Card
                heading={'Unternehmen'}
                icon={<Icon as={FcFactory} w={10} h={10} />}
                description={
                  'Nutzen Sie Power Contracting und eine effiziente Ladeinfrastruktur, um Ihrem Unternehmen einen wirtschaftlichen Vorteil zu verschaffen. Eine Gewerbe-Photovoltaikanlage ermöglicht Ihnen, diese Potenziale gewinnbringend zu nutzen.'
                }
                href={'#'}
              />
              <Card
                heading={'Solarparks'}
                icon={<Icon as={FcLandscape} w={10} h={10} />}
                description={
                  'Von der ungenutzten Fläche zum ertragreichen Solarpark – wir begleiten Sie mit Expertise, Verlässlichkeit und Effizienz. Unsere Experten unterstützen Sie umfassend und persönlich während der gesamten Entwicklung, Projektierung, Bauphase und Inbetriebnahme. Alles aus einer Hand.'
                }
                href={'#'}
              />
            </Flex>
          </Container>
        </Box>
        <Canvas></Canvas>
      </Box>
    </section>
  );
}