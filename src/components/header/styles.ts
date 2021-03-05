// Locals
import { styled } from '~styles';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Bar = styled.div`
  ${({ theme: { colors, sizes } }) => `
    background-color: ${colors.darkest};
    padding: ${sizes.paddings.large};
  `}
`;

export const Logo = styled.img``;
