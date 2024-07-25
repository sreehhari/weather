import { useRef, useState } from 'react';
import { Heading, Box, Input, Container, FormControl, FormLabel, Textarea, Button, Center } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';



function ContactMe() {
  const[check,setcheck]=useState(false);
  const[isLoading,setisLoading]=useState(false);
  const form = useRef();
  const sendEmail=(e)=>{
  e.preventDefault();
  setisLoading(true)
  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,{
        publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }

    )
    .then(
      ()=>{
        console.log("success")
        setcheck(true);
        console.log(check)
        setisLoading(false)
        

      },
      (error)=>{
        console.log("failed",error.text);
        setisLoading(false)
      },

    )
}

  return (
    <Box
      w="100%"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, cyan.400, blue.400, purple.200)"
      p={[4, 8]} // Responsive padding
    >
      <Heading 
        as="h1" 
        size="lg" 
        fontSize={["2rem", "3rem", "4rem", "5rem"]} // Responsive font size
        p={[2, 4]}
        textAlign="center" // Center text for better readability on small screens
      >
        Contact me vro
      </Heading>
      <Container 
        h="auto" 
        maxW={["90vw", "80vw", "60vw", "40vw"]} // Responsive width
        p={[4, 6, 8]} // Responsive padding
        borderRadius="lg" 
        boxShadow="lg" 
        bg="blue.400"
      >
        <form ref={form} onSubmit={sendEmail}>
        <FormControl isRequired mb="4rem">
          <FormLabel fontSize={["lg", "xl", "2xl"]}>Name</FormLabel>
          <Input type="text" name="user_name" size="lg" p={6} mb="4rem"/>
          <FormLabel fontSize={["lg", "xl", "2xl"]}>Email</FormLabel>
          <Input type="email" name='user_email' size="lg" p={6} mb="4rem" />
          <FormLabel fontSize={["lg", "xl", "2xl"]}>Message</FormLabel>
          <Textarea placeholder='Type here' name='message' size='lg' placeholderColor="black" p={6} mb="4rem" />
          <Button type='submit' colorScheme='teal' variant='solid' size='lg' w="100%" isLoading={isLoading}> 
            Send Email
          </Button>
          
        </FormControl>
        </form>
        {/* <Container> */}
        {check? 
        <Heading as='check' textAlign='center' fontSize={["lg", "xl", "2xl"]} fontWeight="bold" noOfLines={1}>Sent</Heading>:null
        
        }
        {/* </Container> */}
      </Container>
    </Box>
  );
}

export default ContactMe;
