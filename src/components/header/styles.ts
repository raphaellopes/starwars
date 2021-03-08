// Vendors
import { styled } from '~styles';

// Locals
import { Icon } from '../icon';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img``;

// Header
export const HeaderIcon = styled(Icon)`
  ${({ theme: { colors, sizes } }) => `
    font-size: ${sizes.icons.large};
    color: ${colors.light};
  `})
`;
