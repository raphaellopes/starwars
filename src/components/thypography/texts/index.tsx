// Vendors
import { css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { styled, colors } from '~styles';

const baseTextStyles = theme('mode', {
  light: css`
    color: ${colors.neutral};
  `,
});

export const Text = styled.p`
  ${baseTextStyles};
`;
