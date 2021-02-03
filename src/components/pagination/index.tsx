// Vendors
import React, { FC } from 'react';

// Locals
import { Button } from '../buttons';
import { PaginationProps } from './types';
import { Container } from './styles';

export const Pagination: FC<PaginationProps> = ({
  disablePrev,
  disableNext,
  onClickPrev,
  onClickNext,
  ...rest
}) => (
  <Container {...rest}>
    <Button onClick={onClickPrev} disabled={disablePrev}>
      prev
    </Button>
    <Button onClick={onClickNext} disabled={disableNext}>
      next
    </Button>
  </Container>
);
