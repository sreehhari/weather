import { Heading, Box, Input, Container, FormControl, FormLabel,Textarea,Button } from '@chakra-ui/react';

function ContactMe() {
  return (
    <Box
      w="100%"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, cyan.400, blue.400, purple.200)"
    >
      <Heading as="h1" size="lg" fontSize="5rem" p="4rem">
        Contact me vro
      </Heading>
      <Container h="70vh" maxW="40vw" p={8} borderRadius="lg" boxShadow="lg" bg="blue.400">
        <FormControl isRequired p='20rem ' mb="4rem">
          <FormLabel fontSize="2xl">Name</FormLabel>
          <Input type="text" size="lg" p={6} mb="4rem"/>
          <FormLabel fontSize="2xl">Email</FormLabel>
          <Input type="email" size="lg" p={6} mb="4rem" />
          <Textarea  placeholder='yap here' size='lg' placeholderColor="black" p={6} mb="4rem" />
          <Button colorScheme='teal' variant='solid' size='lg'>
    Email
  </Button>
        </FormControl>

      </Container>
    </Box>
  );
}

export default ContactMe;
