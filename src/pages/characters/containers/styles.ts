// Locals
import { styled } from '~styles';
import { Pagination as PaginationComp } from '~components';

export const Cards = styled.div``;

export const Pagination = styled(PaginationComp)`
  ${({ theme: { sizes } }) => `
    margin-top: ${sizes.margins.medium};
  `}
`;
