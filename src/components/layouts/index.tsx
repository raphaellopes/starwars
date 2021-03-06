// Locals
import { styled } from '~styles';

export const Container = styled.div`
  ${({ theme: { sizes } }) => `
    max-width: 960px;
    margin: auto;
    padding: ${sizes.paddings.medium};
  `}
`;
