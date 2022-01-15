import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import "./assets/fonts/airbnb-cereal-app-cufonfonts-webfont/style.css"
import theme from './theme/theme';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);
