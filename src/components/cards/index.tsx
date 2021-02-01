// Vendors
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { colors } from '~styles';

const cardsStyle = theme('mode', {
  light: css`
    background-color: ${colors.neutral};
  `,
});
export const Card = styled.div``;
