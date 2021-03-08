// Locals
import { styled } from '~styles';
import { Icon as IconComp } from '../icon';

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
