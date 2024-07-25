import React from 'react';
// import WeatherApp from './Components/WeatherApp'
import  "./Components/WeatherApp.css"
import { Outlet } from "react-router"
// import { ChakraProvider } from '@chakra-ui/react';
function App() {

  return (
    <>
      {/* <ChakraProvider> */}
      <Outlet />
      {/* </ChakraProvider> */}
    </>
  )
}

export default App
