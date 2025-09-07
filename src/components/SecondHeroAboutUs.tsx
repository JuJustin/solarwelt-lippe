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
      align={'center'}
      w={ 'full' }
      h={{ base: height }}
      backgroundImage={
        'url(' + imageUrl + ')'
      }
      backgroundSize={'cover'}
      // Adding a darker overlay over the image
      position="relative"
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        zIndex={2} // Make sure the text is above the overlay
      >
        <Stack maxW={'2xl'} align={'left'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            {title}
          </Text>
          <Text
            color={'white'}
            fontWeight={500}
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