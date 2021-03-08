// Vendors
import React, { FC, HTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { Menu } from '../menu';
import { Toolbar } from '../toolbar';
import { Container, Logo, HeaderIcon } from './styles';

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
    <Toolbar
      componentLeft={<Logo src={LogoSvg} />}
      componentRight={<HeaderIcon name="menu" />}
    />
  );

  return (
    <Container {...props}>
      {renderBar()}
      <Menu items={menuItems} />
    </Container>
  );
};
