// Locals
import { styled } from '~styles';
import { Card as CardComp } from '~components';

export const Cards = styled.div``;

export const Card = styled(CardComp)`
  ${({ theme: { sizes } }) => `
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: ${sizes.margins.medium};
    }
  `}
`;

// @TODO: add some thypograpy
export const CardName = styled.p`
  ${({ theme: { sizes } }) => `
    margin: 0;
    font-weight: 600;
    margin-left: ${sizes.margins.medium};
  `}
`;
