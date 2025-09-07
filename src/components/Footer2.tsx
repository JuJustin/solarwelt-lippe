'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { ReactNode } from 'react'

import { IoCall, IoMail } from 'react-icons/io5';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'800'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoCentered() {

  return (
    <Box
      bg={'white'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Solarwelt-Lippe</ListHeader>
            <Box as="a" href={'/'}>
              Startseite
            </Box>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Box as="a" href={'/ueber-uns'}>
                Über uns
              </Box>
            </Stack>
            <Box as="a" href={'/kontakt'}>
              Kontakt
            </Box>
            <Box as="a" href={'/blog'}>
              Blog
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
          <ListHeader>Lösungen</ListHeader>
            <Box as="a" href={'/referenzen'}>
              Referenzen
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                Neu
              </Tag>
            </Box>
            <Box as="a" href={'/leistungen'}>
              Leistungen
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Rechtliches</ListHeader>
            <Box as="a" href={'/impressum'}>
              Impressum
            </Box>
            <Box as="a" href={'/datenschutz'}>
              Datenschutz
            </Box>
            <Box as="a" href={'/AGB.pdf'} target='_blank'>
              AGB
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Kontakt</ListHeader>
            <Box >
              Solarwelt-Lippe
            </Box>
            <Box >
              Drosselweg 3
            </Box>
            <Box>
              32816 Schieder-Schwalenberg
            </Box>
            <Box as="a"  href={
                'mailto:info@solarwelt-lippe.de?subject=Anfrage Photovoltaikanlage'
              }>
              <Tag
                  size={'sm'}
                  bg={useColorModeValue('white.300', 'white.800')}
                  color={'white'}>
                <Icon as={IoMail} color={'gray.800'} w={5} h={5} />
              </Tag>
              info@solarwelt-lippe.de
            </Box>
            <Box as="a" href={'tel:+4917657796989'}>
              <Tag
                  size={'sm'}
                  bg={useColorModeValue('white.300', 'white.800')}
                  color={'white'}>
                <Icon as={IoCall} color={'gray.800'} w={5} h={5} />
              </Tag>
              +49 1765 7796989
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={1}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <img src={'/assets/images/logo.svg'} width='128px' alt={'Solarwelt-Lippe'}/>
        </Flex>
        <Text pt={6} pb={6} fontSize={'sm'} textAlign={'center'}>
          © {new Date().getFullYear()} Solarwelt-Lippe. Alle Rechte vorbehalten.
        </Text>
      </Box>
    </Box>
  )
}