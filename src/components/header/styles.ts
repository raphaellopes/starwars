// Vendors
import { styled } from '~styles';

// Locals
import { Icon } from '../icon';
import { Toolbar as ToolbarComp } from '../toolbar';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const Logo = styled.img``;

export const Toolbar = styled(ToolbarComp)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

// Header
export const HeaderIcon = styled(Icon)`
  ${({ theme: { colors, sizes } }) => `
    font-size: ${sizes.icons.large};
    color: ${colors.light};
  `})
`;
