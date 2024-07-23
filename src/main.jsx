import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './Components/WeatherApp.jsx';
import ContactMe from './Components/ContactMe.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './Components/Theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WeatherApp />} />
          <Route
            path="/contactMe"
            element={
              <ChakraProvider theme={Theme}>
                <ContactMe />
              </ChakraProvider>
            }
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
