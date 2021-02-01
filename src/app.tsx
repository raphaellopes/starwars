// Vendors
import React, { FC } from 'react';

// Locals
import { GlobalStyle, theme, ThemeProvider } from './styles';
import { Main } from './pages';

export const App: FC = () => (
  <ThemeProvider theme={{ mode: 'light', ...theme }}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);
