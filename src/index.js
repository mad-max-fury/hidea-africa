import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import "./assets/fonts/airbnb-cereal-app-cufonfonts-webfont/style.css"
import theme from './theme/theme';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
