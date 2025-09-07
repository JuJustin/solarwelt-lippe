import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri'
import { ReactElement } from 'react'

import Image from 'next/image';

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
  text2: string
}

const Feature = ({ text, icon, iconBg, text2 }: FeatureProps) => {
  return (
    <>
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text as="h3" fontWeight={600}>{text}</Text>
      </Stack>
      <Text fontWeight={200} ml={'40px'}>{text2}</Text>
    </>
  )
}

export default function SplitWithImage({ city }: { city: string }) {
  return (
    <section aria-label="Ablauf Photovoltaik Beratung und Montage">
      <Container maxW={'7xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'orange.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('orange.50', 'orange.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Ablauf
            </Text>
            <Heading as="h2">3 Schritte zu Ihrer individuellen Energielösung in {city}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={RiNumber1} color={'orange.500'} w={5} h={5} />}
                iconBg={useColorModeValue('orange.100', 'orange.900')}
                text={'Persönliches Angebot anfordern'}
                text2={'Fordern Sie Ihr maßgeschneidertes Angebot für ' + city + ' bequem über unseren Konfigurator oder telefonisch an. Unser erfahrenes Team berät Sie ausführlich und professionell zu jedem Planungsschritt.'}
              />
              <Feature
                icon={<Icon as={RiNumber2} color={'orange.500'} w={5} h={5} />}
                iconBg={useColorModeValue('orange.100', 'orange.900')}
                text={'Maßgeschneiderte Planung'}
                text2={'Profitieren Sie von einer individuellen Planung durch unsere Solarexperten, die Ihre speziellen Wünsche und Anforderungen aus ' + city + ' berücksichtigen. Unsere präzise Analyse hilft Ihnen, Zeit und Kosten zu sparen.'}
              />
              <Feature
                icon={<Icon as={RiNumber3} color={'orange.500'} w={5} h={5} />}
                iconBg={useColorModeValue('orange.100', 'orange.900')}
                text={'Fachgerechte Installation'}
                text2={'Unsere Systemplaner und Handwerker sorgen für eine effiziente und fehlerfreie Montage Ihrer Solarlösung in ' + city + '. Durch ihre enge Zusammenarbeit garantieren wir Ihnen eine schnelle und sorgfältige Umsetzung Ihres Projekts.'}
              />
            </Stack>
          </Stack>
          <Stack align="center" spacing={{ base: 2, sm: 2 }} direction={{ base: 'column', sm: 'column' }}>
            <Image
              alt={`Angebotsanfrage für Photovoltaik in ${city}`}
              src={
                '/projects/angebot_anfordern.jpg'            
              }
              width={800}               
              height={500}
              style={{
                borderRadius: '8px',    
                objectFit: 'cover',     
                width: '100%',          
                height: 'auto',
                maxHeight: '180px',
              }}
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <Image
              src="/projects/plannung.jpg"
              alt={`Planung von Solaranlagen in ${city}`}
              width={800}               
              height={500}
              style={{
                borderRadius: '8px',    
                objectFit: 'cover',     
                width: '100%',          
                height: 'auto',
                maxHeight: '180px',
              }}
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <Image
              alt={`Montage durch Solarteam in ${city}`}
              src={
                '/projects/solarworker.jpg'            
              }
              width={800}               
              height={500}
              style={{
                borderRadius: '8px',    
                objectFit: 'cover',     
                width: '100%',          
                height: 'auto',
                maxHeight: '180px',
              }}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  )
}