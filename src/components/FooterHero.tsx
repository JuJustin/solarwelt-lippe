'use client'

import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'4xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
            Nutzen Sie schon heute die {' '}
          <Text as={'span'} color={'orange.400'}>
            Kraft der Sonne!
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Fordern Sie in wenigen Schritten Ihr kostenloses und unverbindliches Angebot an!
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            as="a" href={'/angebot'}
            rounded={'full'}
            px={6}
            colorScheme={'#FE8800'}
            bg={'#FE8800'}
            boxShadow={
              '0px 1px 25px -5px rgb(254 136 0 / 48%), 0 10px 10px -5px rgb(254 136 0 / 43%)'
            }
            _hover={{ bg: '#FE8800' }}>
            Angebot anfordern
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}