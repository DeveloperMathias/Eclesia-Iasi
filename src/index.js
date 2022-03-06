import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    red: {
      600: "#323232",
      500: "#790101",
      400: "#F2C280",
      300: "#FCF8A6",
      200: "#EBEBEB",
      100: "#FFFFFF",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif"
  },
  styles:  {
    global: {
      "html, body": {
        backgroundColor: "#FFFFFF",
        color: "#323232"
      } 
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
