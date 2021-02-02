// Vendors
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

// Locals
import store from './store';
import { GlobalStyle, theme, ThemeProvider } from './styles';
import { Main } from './pages';

export const App: FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={{ mode: 'light', ...theme }}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </ReduxProvider>
);
