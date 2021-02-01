// Vendors
import { createGlobalStyle, css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { colors } from './colors';

const globalStyle = theme('mode', {
  light: css`
    background-color: ${colors.light};
  `,
});

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'sans-serif';
    ${globalStyle}
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
