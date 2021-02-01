// Vendors
import React, { FC, HTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { Menu } from '../menu';
import { Container } from './styles';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const history = useHistory();

  const menuItems = [
    {
      label: 'Characters',
      onClick: () => history.push('/'),
    },
    {
      label: 'Species',
      onClick: () => history.push('/species'),
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
