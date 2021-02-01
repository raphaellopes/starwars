// Vendors
import React, { FC, HTMLAttributes } from 'react';

// Locals
import { Menu } from '../menu';
import { Container } from './styles';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const menuItems = [
    {
      label: 'Characters',
      onClick: () => console.log('>>> handle click characters'),
    },
    {
      label: 'Species',
      onClick: () => console.log('>>> handle click species'),
    },
    {
      label: 'Planets',
      onClick: () => console.log('>>> handle click planets'),
    },
  ];

  return (
    <Container {...props}>
      <Menu items={menuItems} />
    </Container>
  );
};
