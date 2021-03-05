// Vendors
import React, { FC, HTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { Menu } from '../menu';
import { Container, Bar, Logo } from './styles';

// assets
import LogoSvg from '~assets/logos/default.svg';

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

  // renders
  const renderBar = () => (
    <Bar>
      <Logo src={LogoSvg} />
    </Bar>
  );

  return (
    <Container {...props}>
      {renderBar()}
      <Menu items={menuItems} />
    </Container>
  );
};
