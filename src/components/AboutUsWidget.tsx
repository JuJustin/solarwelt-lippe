import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'

import Image from 'next/image';

interface MoreProps {
  isMore: boolean;
  city: string;
}

export default function SplitWithImage({isMore, city}: MoreProps) {
  return (
    <Box p={4} bg={'#262629'} pt='50px' pb='50px'>
    <Container maxW={'6xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={2}>
          <Text
            textTransform={'uppercase'}
            color={'orange.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('orange.50', 'orange.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Über uns
          </Text>
          <Heading color={'orange'}>Solarwelt-Lippe</Heading>
          <Text color={useColorModeValue('gray.500', 'gray.900')} fontSize={'lg'}>
            Ihr lokaler Experte für Photovoltaikanlagen in {city}.
          </Text>
          <Text color={'white'} fontSize={'lg'}>
            Wir stehen für persönliche Beratung, faire Preise und regionale Verbundenheit – direkt bei Ihnen vor Ort in {city} und ganz Ostwestfalen-Lippe.
          </Text>

          <Text color={'white'} fontSize={'lg'} pt={3}>
            Unsere Mission bei Solarwelt-Lippe ist es, das Leben unserer Kunden durch selbst erzeugte, saubere Energie zu verbessern und die Umwelt für kommende Generationen zu bewahren. Mit einem engagierten Team und zertifizierten Partnern sind wir als regionales Unternehmen in {city} Ihr verlässlicher Ansprechpartner für nachhaltige Energielösungen.
          </Text>

          <Text color={'white'} fontSize={'lg'} pt={3}>
            Ob Einfamilienhaus, Gewerbebetrieb oder landwirtschaftlicher Hof – wir begleiten Sie von der ersten Beratung bis zur betriebsfertigen Photovoltaikanlage mit Stromspeicher oder Wallbox. Vertrauen Sie auf unsere langjährige Erfahrung, höchste Qualität und ehrliche Kommunikation – für Ihre Solaranlage in {city} und Umgebung.
          </Text>


          {isMore ? <a href='/ueber-uns'> <Text color={'orange'} fontSize={'l'} >
            {'Mehr über Solarwelt-Lippe >'}
          </Text> </a>: <></>}
        </Stack>
        <Flex>
        <Image
          alt={`Das Team von Solarwelt-Lippe2 in ${city}`}
          src="/projects/team2.png"
          width={1000} // use actual dimensions of the image
          height={400}
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
        </Flex>
      </SimpleGrid>
    </Container>
    </Box>
  )
}