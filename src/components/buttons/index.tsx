// Vendors
import { css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { styled, colors } from '~styles';

const buttonStyle = theme('mode', {
  light: css`
    background-color: ${colors.primary};
    border: 2px solid ${colors.darkest};
  `,
});
const buttonDisabledStyle = theme('mode', {
  light: css`
    background-color: ${colors.light};
    border: 2px solid ${colors.darkest};
  `,
});
export const Button = styled.button`
  ${({ onClick, disabled, theme: { sizes } }) => `
    padding: ${sizes.paddings.medium} ${sizes.paddings.xLarge};
    border-radius: ${sizes.borderRadius.huge};
    cursor: ${!!onClick && !disabled ? 'pointer' : 'initial'};
  `}
  ${({ disabled }) => (disabled ? buttonDisabledStyle : buttonStyle)}
`;
