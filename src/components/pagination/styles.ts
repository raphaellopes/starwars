// Locals
import { styled } from '~styles';

export const Container = styled.div`
  ${({ theme: { sizes } }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    > button {
      &:not(:last-child) {
        margin-right: ${sizes.margins.medium};
      }
    }
  `}
`;
