// Vendors
import React, { FC, HTMLAttributes, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { Menu } from '../menu';
import { Container, Logo, Toolbar, HeaderIcon } from './styles';

// assets
import LogoSvg from '~assets/logos/default.svg';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const menuItems = [
    {
      label: 'Characters',
      onClick: () => history.push('/characters'),
    },
    {
      label: 'Species',
      onClick: () => history.push('/species'),
    },
  ];

  const handleClickHeaderMenu = () => setShowMenu(!showMenu);

  // renders
  const renderBar = () => (
    <Toolbar
      componentLeft={<Logo src={LogoSvg} />}
      componentRight={
        <HeaderIcon
          name={showMenu ? 'close' : 'menu'}
          onClick={handleClickHeaderMenu}
        />
      }
    />
  );

  const renderMenu = () => showMenu && <Menu items={menuItems} />;

  return (
    <Container {...props}>
      {renderBar()}
      {renderMenu()}
    </Container>
  );
};
