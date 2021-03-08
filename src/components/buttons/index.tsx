// Vendors
import { css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { styled, colors } from '~styles';

const buttonStyle = theme('mode', {
  light: css`
    background-color: ${colors.primary};
  `,
});
const buttonDisabledStyle = theme('mode', {
  light: css`
    background-color: ${colors.primaryLight};
  `,
});

export const Button = styled.button`
  ${({ onClick, disabled, theme: { sizes } }) => `
    padding: ${sizes.paddings.medium} ${sizes.paddings.xLarge};
    border-radius: ${sizes.borderRadius.large};
    cursor: ${!!onClick && !disabled ? 'pointer' : 'initial'};
    border: none;
    text-transform: uppercase;
    color: ${colors.light};
  `}
  ${({ disabled }) => (disabled ? buttonDisabledStyle : buttonStyle)}
`;
