// Vendors
import { styled } from '~styles';

export const Container = styled.div`
  ${({ theme: { colors, sizes } }) => `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.darkest};
    padding: ${sizes.paddings.large};
  `}
`;

export const Content = styled.div`
  flex: 1;
`;

export const SideWrapper = styled.div``;
