// Locals
import { styled } from '~styles';
import { Icon as IconComp } from '../icon';
import { Button as ButtonComp } from '../buttons';

export const Container = styled.div`
  ${({ theme: { sizes } }) => `
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${sizes.mediaScreens.small} {
      margin: auto;
      max-width: 300px;
    }
  `}
`;

type SideType = 'left' | 'right';
const sideSpaceIcon = (side: SideType, size: string) => `
    margin-${side}: ${size};
`;
export const Icon = styled(IconComp)<{ sideSpace: SideType }>`
  ${({ sideSpace, theme: { sizes } }) => `
    color: inherit;
    ${sideSpaceIcon(sideSpace, sizes.margins.medium)};
  `}
`;

export const Button = styled(ButtonComp)`
  ${({ theme: { sizes } }) => `
    flex: 1;
    &:not(:last-child) {
      margin-right: ${sizes.margins.medium};
    }
  `}
`;
