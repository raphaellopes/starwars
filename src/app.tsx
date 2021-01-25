// Vendors
import React, { FC } from 'react';

// Locals
import { GlobalStyle } from './styles';
import { Main } from './pages';

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Main />
  </>
);
