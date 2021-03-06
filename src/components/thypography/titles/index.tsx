// Vendors
import { css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { styled, colors } from '~styles';

const titleStyles = theme('mode', {
  light: css`
    color: ${colors.primary};
  `,
});

export const Title = styled.h1`
  ${titleStyles};
`;
