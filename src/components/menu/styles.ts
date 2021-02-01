// Vendors
import { css } from 'styled-components';
import theme from 'styled-theming';

// Locals
import { styled, colors } from '~styles';

export const Wrapper = styled.nav`
  ${theme('mode', {
    light: css`
      background-color: ${colors.opacity.light};
    `,
  })};
`;

export const Items = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.5s;
  ${theme('mode', {
    light: css`
      &:hover {
        background-color: ${colors.opacity.light};
      }
    `,
  })}
`;
