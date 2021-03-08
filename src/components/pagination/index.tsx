// Vendors
import React, { FC } from 'react';

// Locals
import { PaginationProps } from './types';
import { Container, Button, Icon } from './styles';

export const Pagination: FC<PaginationProps> = ({
  disablePrev,
  disableNext,
  onClickPrev,
  onClickNext,
  ...rest
}) => (
  <Container {...rest}>
    <Button onClick={onClickPrev} disabled={disablePrev}>
      <Icon name="arrow-back" sideSpace="right" />
      Previous
    </Button>
    <Button onClick={onClickNext} disabled={disableNext}>
      Next
      <Icon name="arrow-forward" sideSpace="left" />
    </Button>
  </Container>
);
