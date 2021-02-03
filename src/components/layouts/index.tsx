// Locals
import { styled } from '~styles';

export const Container = styled.div`
  ${({ theme: { sizes } }) => `
    max-width: 960px;
    margin: 0 ${sizes.margins.medium};
  `}
`;
