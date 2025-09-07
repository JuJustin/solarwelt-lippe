import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const features = [
  {
    title: 'Solaranlage',
    text: 'Hocheffiziente Solaranlagen zur nachhaltigen Energiegewinnung für Ihr Zuhause oder Unternehmen. Maximieren Sie Ihre Energieunabhängigkeit mit unseren modernen Photovoltaiksystemen.',
  },
  {
    title: 'Stromspeicher',
    text: 'Innovative Stromspeicherlösungen, die es Ihnen ermöglichen, überschüssige Solarenergie zu speichern und bei Bedarf zu nutzen. Ideal zur Optimierung Ihrer Energieeffizienz.',
  },
  {
    title: 'Wallbox',
    text: 'Praktische Wallboxen für das effiziente und sichere Laden Ihres Elektrofahrzeugs direkt zu Hause. Optimieren Sie Ihr Ladeerlebnis mit modernen Ladepunkten.',
  },
  {
    title: 'Modulmontage',
    text: 'Professionelle Installation Ihrer Solarmodule auf Ihrem Dach oder an anderen geeigneten Orten. Wir sorgen für eine sichere und fachgerechte Montage.',
  },
  {
    title: 'Elektroinstallation',
    text: 'Komplette Elektroinstallationen für Ihre neuen und bestehenden Anlagen. Wir kümmern uns um alle Aspekte der Elektroinstallation, damit alles reibungslos funktioniert.',
  },
  {
    title: 'Beratung',
    text: 'Individuelle Beratung durch unsere Experten, um die besten Lösungen für Ihre Bedürfnisse zu finden. Wir helfen Ihnen bei der Auswahl der richtigen Produkte und der Planung Ihrer Installation.',
  },
  {
    title: 'Anmeldung',
    text: 'Unterstützung bei der Anmeldung Ihrer Solaranlage bei den zuständigen Behörden und Energieversorgern. Wir kümmern uns um die notwendigen Formalitäten und sorgen für einen reibungslosen Prozess.',
  },
  {
    title: 'Planung',
    text: 'Detaillierte Planung Ihrer Solaranlage oder Stromspeicherlösung, einschließlich der Analyse Ihrer Energiebedürfnisse und der Optimierung des Systems für maximale Effizienz.',
  },
];


export default function GridListWithHeading() {
  return (
    <Box p={4} mt={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Überblick unserer Leistungen</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
        Hier finden Sie eine Übersicht unserer hochwertigen Leistungen, die Ihnen helfen, Ihre Energieziele zu erreichen.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.title} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}