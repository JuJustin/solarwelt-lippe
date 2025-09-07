import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
  link: string
}

const Links2 = [
  {
    link: 'leistungen',
    title: 'Leistungen',
    displayMobile: 'flex'
  },
  {
    link: 'referenzen',
    title: 'Referenzen',
    displayMobile: 'flex'
  },
  {
    link: 'kontakt',
    title: 'Kontakt',
    displayMobile: 'flex'
  },
  {
    link: 'ueber-uns',
    title: 'Über uns',
    displayMobile: 'flex'
  },
  {
    link: 'blog',
    title: 'Blog',
    displayMobile: 'flex'
  },
];

const NavLink = (props: Props) => {
  const { children, link } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'/' + link}>
      {children}
    </Box>
  )
}

export default function Navbar2() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Box bg='rgba(255, 255, 255, 0.8)' backdropFilter='blur(10px)' px={{base: '0px', md: '60px'}} width='100%' style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Box>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link href='/'><Image src={'/assets/images/logo.svg'} alt={'Solarwelt-Lippe'} className="w-32 h-18"/></Link></Box>
            <Flex as='nav' role="navigation" aria-label="Hauptnavigation" display={{ base: 'none', md: 'flex' }}>
              {Links2.map((link) => (
                <NavLink key={link.title} link={link.link}>{link.title}</NavLink>
              ))}
            </Flex>
          </HStack>
          <Flex alignItems={'center'}>
            <Link href='/angebot'>
              <Button
                variant={'solid'}
                colorScheme={'#FE8800'}
                bg={useColorModeValue('#FE8800', '#FE8800')}
                size={'md'}
                boxShadow={
                  '0px 1px 25px -5px rgb(254 136 0 / 48%), 0 10px 10px -5px rgb(254 136 0 / 43%)'
                }
                borderRadius='20px'>
                Angebot anfordern
              </Button>
            </Link>
            <Menu>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links2.map((link) => (
                <Box display={{ base: link.displayMobile, sm: 'flex' }}>
                  <NavLink key={link.title}  link={link.link}>{link.title}</NavLink>
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
    </>
  )
}