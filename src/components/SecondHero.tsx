import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function WithBackgroundImage({
  title,
  text,
  imageUrl,
  height,
}: {
  title: string
  text: string
  imageUrl: string
  height: string
}) {
  return (
    <Flex
      w={'full'}
      h={{ base: height }}
      backgroundImage={
        'url(' + imageUrl + ')'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      // Adding a darker overlay over the image
      position="relative"
      _before={ title === '' ? {} : {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'rgba(0, 0, 0, 0.4)', // 60% black overlay
        zIndex: 1,
      }}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        zIndex={2} // Make sure the text is above the overlay
      >
        <Stack maxW={'4xl'} align={'left'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={1000}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
          >
            {title}
          </Text>
          <Text
            color={'white'}
            fontWeight={300}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
          >
            {text}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  )
}