import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { FcRuler, FcLock, FcPositiveDynamic } from 'react-icons/fc'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack w={350} textAlign="center" align="center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text as="h3" fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns({ city }: { city: string }) {
  return (
    <section aria-label={"Vorteile Solarwelt-Lippe in " + city}>
    <Box p={4} bg={useColorModeValue('gray.100', 'gray.700')} pt='70px' pb='70px'>
      {/* Big Title added here */}
      <Heading as="h2" fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }} fontWeight="bold" textAlign="center" mb={10} color="black">
        Ihre Vorteile mit Solarwelt-Lippe in {city}
      </Heading>

      <SimpleGrid 
        columns={{ base: 1, md: 3 }} 
        spacing={10} 
        justifyItems="center" 
        alignItems="center"
      >
        <Feature
          icon={<Icon as={FcRuler} w={10} h={10} title="Symbol für Maßgeschneiderte Energielösungen" />}
          title={'Maßgeschneiderte Energielösungen'}
          text={`Unser Expertenteam bietet in ${city} maximale Zuverlässigkeit, entwickelt individuelle Lösungen und wählt die idealen Komponenten – perfekt abgestimmt auf Ihre Bedürfnisse.`}
        />
        <Feature
          icon={<Icon as={FcPositiveDynamic} w={10} h={10} title="Symbol für Maximale Effizienz" />}
          title={'Maximale Effizienz'}
          text={`Dank modernster Technologien und optimierter Prozesse gewährleisten wir höchste Effizienz Ihrer Energielösung in ${city} – für langfristige Einsparungen.`}
        />
        <Feature
          icon={<Icon as={FcLock} w={10} h={10} title="Symbol für Sicherheit" />}
          title={'Umfassende Sicherheit'}
          text={`Mit unserer Rundum-Sicherheit erhalten Sie in ${city} maximalen Schutz und umfassende Unterstützung – von der Planung über die Installation bis zur Wartung.`}
        />
      </SimpleGrid>
    </Box>
    </section>
  )
}