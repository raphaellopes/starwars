// Locals
import { styled } from '~styles';
import { Pagination as PaginationComp } from '../../pagination';
import { Container as ContainerComp } from '../../layouts';

export const Cards = styled.div``;

export const Pagination = styled(PaginationComp)`
  ${({ theme: { colors, sizes } }) => `
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.light};
    padding: ${sizes.paddings.medium};

    @media ${sizes.mediaScreens.small} {
      margin-top: ${sizes.margins.medium};
      position: relative;
    }
  `}
`;

export const Container = styled(ContainerComp)`
  padding-bottom: 60px;
`;
