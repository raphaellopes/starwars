// Vendors
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

// Locals
import { GlobalStyle } from './styles';
import { Main } from './pages';

export const App: FC = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);
