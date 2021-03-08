// Vendors
import React, { FC } from 'react';

// Locals
import { PaginationProps } from './types';
import { Container, Button, ButtonText, Icon } from './styles';

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
      <ButtonText>Previous</ButtonText>
    </Button>
    <Button onClick={onClickNext} disabled={disableNext}>
      <ButtonText>Next</ButtonText>
      <Icon name="arrow-forward" sideSpace="left" />
    </Button>
  </Container>
);
