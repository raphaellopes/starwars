// Locals
import { styled } from '~styles';
import { Card } from '../base';
import { Icon as IconComp } from '../../icon';

export const Container = styled(Card)`
  ${({ theme: { sizes } }) => `
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: ${sizes.margins.medium};
    }
  `}
`;

// @TODO: add some thypograpy
export const Text = styled.p`
  ${({ theme: { sizes } }) => `
    flex: 1;
    margin: 0;
    font-weight: 600;
    margin-left: ${sizes.margins.medium};
  `}
`;

export const Icon = styled(IconComp)`
  ${({ theme: { colors, sizes } }) => `
    color: ${colors.dark};
    font-size: ${sizes.icons.large};
  `}
`;
