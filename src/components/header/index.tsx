// Vendors
import React, { FC, HTMLAttributes } from 'react';

// Locals
import { Container } from './styles';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <Container {...props} />
);
