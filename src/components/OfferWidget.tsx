import {
  Container,
  SimpleGrid,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  Image,
  Checkbox,
  Spinner,
} from '@chakra-ui/react';
import { IoCall, IoLocationSharp, IoMail } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { ReactElement, useState, useRef } from 'react';
import emailjs from 'emailjs-com';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

type Values = {
  name1: string;
  mail: string;
  phone: string;
  message: string;
};

export default function SplitWithImage() {
  const [values, setValues] = useState<Values>({
    name1: '',
    mail: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Values>>({});
  const [clicked, setClicked] = useState(false);
  const [success, setSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit (e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Partial<Values> = {};

    if (!values.name1) newErrors.name1 = 'Name fehlt';
    if (!values.mail) newErrors.mail = 'Email fehlt';
    if (!values.phone) newErrors.phone = 'Telefonnummer fehlt';
    if (!values.message) newErrors.message = 'Nachricht fehlt';

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setClicked(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    if (formRef.current) {
      try {
      emailjs.sendForm(
          'service_solarwelt_lippe',
          'template_5pafuhr',
          formRef.current,
          'kFxo4tmbZxW3djtq-'
        )

        setTimeout(() => {
          setSuccess(true)
        }, 5000);

        
      } catch (error) {
        console.error('Test Email Error:', error);
      }
    }
  };

  return (
    
    <Container maxW={'4xl'} pt={12}>
      {success ? <Text align='center' color={'black.500'} fontSize={'xl'}>
        Deine Anfrage ist erfolgreich bei uns eingegangen. Wir werden uns schnellstmöglich bei Dir melden.
      </Text> :
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
            Angebot
          </Text>
          <Text color={'gray.500'} fontSize={'l'}>
            Interessiert an nachhaltiger Energie für Ihr Zuhause? Kontaktieren Sie uns jetzt, und wir zeigen Ihnen, wie unsere Photovoltaikanlagen Ihren Energiebedarf effizient und umweltfreundlich decken können. Melden Sie sich, wir freuen uns auf Ihre Anfrage!
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
            <Feature
              icon={<Icon as={IoCall} color={'orange.500'} w={5} h={5} />}
              iconBg={useColorModeValue('orange.100', 'orange.900')}
              text={'+49 1765 7796989'}
            />
            <Feature
              icon={<Icon as={IoMail} color={'orange.500'} w={5} h={5} />}
              iconBg={useColorModeValue('orange.100', 'orange.900')}
              text={'info@solarwelt-lippe.de'}
            />
            <Feature
              icon={<Icon as={IoLocationSharp} color={'orange.500'} w={5} h={5} />}
              iconBg={useColorModeValue('orange.100', 'orange.900')}
              text={'Drosselweg 3, 32816 Schieder-Schwalenberg'}
            />
          </Stack>
          <Stack align="center" height='60px' spacing={{ base: 2, sm: 2 }} direction={{ base: 'row', sm: 'row' }}>
            <Image src="/5star.svg" alt="Image 1" borderRadius="18px" height='15px' />
            <Box>
              <Text color={'gray.600'}>
                5 von 5 Sterne bei 
              </Text>
            </Box>
            <Image src="/googleFullLogo.svg" alt="google logo" height='40px'/>
          </Stack>
        </Stack>
        <Flex>
          <Box bg="orange.100" w={{ base: '100%', md: '300px', lg: '400px' }} borderRadius="lg">
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <FormControl id="name" isInvalid={!!errors.name1}>
                    <FormLabel>Ihr Vor- und Nachname</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <BsPerson color="gray.800" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        size="md"
                        name="name1"
                        placeholder="Max Mustermann"
                        value={values.name1}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.name1 && <Text color="red.500" fontSize="sm">{errors.name1}</Text>}
                  </FormControl>
                  <FormControl id="email" isInvalid={!!errors.mail}>
                    <FormLabel>Ihre E-Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <MdOutlineEmail color="gray.800" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        size="md"
                        name="mail"
                        placeholder="max@mustermann.de"
                        value={values.mail}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.mail && <Text color="red.500" fontSize="sm">{errors.mail}</Text>}
                  </FormControl>
                  <FormControl id="phone" isInvalid={!!errors.phone}>
                    <FormLabel>Ihre Telefonnummer</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <MdOutlinePhone color="gray.800" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        size="md"
                        name="phone"
                        placeholder="+49 1765 7796989"
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.phone && <Text color="red.500" fontSize="sm">{errors.phone}</Text>}
                  </FormControl>
                  <FormControl id="message" isInvalid={!!errors.message}>
                    <FormLabel>Ihre Nachricht an uns</FormLabel>
                    <Textarea
                      name="message"
                      borderColor="gray.300"
                      _hover={{ borderRadius: 'gray.300' }}
                      placeholder="..."
                      value={values.message}
                      onChange={handleChange}
                    />
                    {errors.message && <Text color="red.500" fontSize="sm">{errors.message}</Text>}
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <Checkbox colorScheme="orange" m={2} ml={0} />
                    <Text fontSize="8px">Ich habe die <a href="/datenschutz" target='_blank'>Datenschutzhinweise</a> zur Kenntnis genommen.</Text>
                  </FormControl>

                  <FormControl id="submit" float="right">
                    {clicked ? <><Spinner
                        size="lg"
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="orange.200"
                        
                      /> <Text fontSize="14px"> Bitte warten Sie einen Moment.</Text>
                       </> : <Button
                      type="submit"
                      variant="solid"
                      bg="#FE8800"
                      color="white"
                    >
                      Absenden
                    </Button>}
                    
                  </FormControl>
                </form>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>}
    </Container>
  );
}
