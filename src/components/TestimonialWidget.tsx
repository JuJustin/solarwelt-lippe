import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      maxW={'400px'}
      w={'full'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  name,
  title,
}: {
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} pt='0px' as={Stack} spacing={0}>
        <Stack spacing={0} align={'center'}>
          <Heading mb='10px' textAlign={'center'} fontSize={{base: '2xl', sm: '3xl'}}>Das sagen unsere Kunden</Heading>
          <Stack align="center" justify={{base:'center', sm:'flex-start'}} height='100px' spacing={{ base: 2, sm: 2 }} direction='row'>
            <Image src="/5star.svg" alt="Image 1" borderRadius="18px" height='15px' />
            <Box>
              <Text color={'gray.600'}>
                5 von 5 Sterne bei 
              </Text>
            </Box>
            <Image src="/googleFullLogo.svg" alt="google logo" height='40px'/>
         </Stack>
        </Stack>
        <Stack
          align={'center'}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
             <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>"Tolle Beratung, schnelle Umsetzung, empfehlenswert"</TestimonialHeading>
              <TestimonialText>
              Beratung super, schnelle Umsetzung und super Koordinierung der einzelnen Mitarbeiter. Auf Fragen meinerseits kam immer schnell eine Antwort.
Keine Acht Wochen vom ersten Gespräch bis zur vollständigen Inbetriebnahme.
Kann ich nur empfehlen!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name={'Bernd Nieman'}
              title={'Google Bewertung'}
            />
          </Testimonial>
          
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>"Reibungslos, professionell, empfehlenswert"</TestimonialHeading>
              <TestimonialText>
              Meine Erfahrungen mit der Installation der Photovoltaikanlage und der Wallbox waren absolut positiv. Von der initialen Beratung durch den Vertrieb, die professionelle Angebotsbearbeitung über die Projektsteuerung und -betreuung bis hin zur Installation hat alles absolut problemlos und wie abgesprochen funktioniert. Alle Mitarbeitenden mit denen ich Kontakt hatte, waren sehr freundlich und Service orientiert. Ich habe selten ein so perfektes und positives Projekt erlebt und kann Solarwelt-Lippe mit gutem Gewissen empfehlen.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name={'Franz Neumann'}
              title={'Google Bewertung'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>"Freundlich, günstig, schnelle Montage"</TestimonialHeading>
              <TestimonialText>
              Sehr freundliches Team, günstiger als gedacht und super schnelle Montage der Anlage!
Wir sind froh uns für Solarwelt-Lippe entschieden zu haben!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name={'Ritha Henning'}
              title={'Google Bewertung'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}