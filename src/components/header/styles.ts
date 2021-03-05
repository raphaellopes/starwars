// Vendors
import { styled } from '~styles';

// Locals
import { Icon as IconComponent } from '../icon';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Bar = styled.div`
  ${({ theme: { colors, sizes } }) => `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.darkest};
    padding: ${sizes.paddings.large};
  `}
`;

export const Logo = styled.img``;

export const Icon = styled(IconComponent)`
  ${({ theme: { colors } }) => `
    color: ${colors.light};
    font-size: 24px
  `}
`;
