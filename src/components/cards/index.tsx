// Vendors
import { css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { colors, styled } from '~styles';

// @TODO: Implements variant
const cardsStyle = theme('mode', {
  light: css`
    background-color: ${colors.neutral};
  `,
});
export const Card = styled.div`
  ${cardsStyle}
  ${({ theme: { sizes } }) => `
    border-radius: ${sizes.borderRadius.medium};
    padding: ${sizes.paddings.medium};
  `}
`;
