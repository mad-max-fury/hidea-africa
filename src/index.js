import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import "./assets/fonts/airbnb-cereal-app-cufonfonts-webfont/style.css"
import theme from './theme/theme';
import 'focus-visible/dist/focus-visible';

import { Global, css } from '@emotion/react'

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
