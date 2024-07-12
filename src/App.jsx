import { useState } from 'react'

import WeatherApp from './Components/WeatherApp'
import  "./Components/WeatherApp.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App
