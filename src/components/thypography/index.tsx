// Vendors
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const titleStyles = theme('mode', {
  light: css`
    color: blue;
  `,
});

export const Title = styled.h1`
  ${titleStyles};
`;
