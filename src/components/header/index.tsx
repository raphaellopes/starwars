// Vendors
import React, { FC, HTMLAttributes, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { routes, RouteType } from '~shared';
import { Menu } from '../menu';
import { Container, Logo, Toolbar, HeaderIcon } from './styles';

// assets
import LogoSvg from '~assets/logos/default.svg';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClickHeaderMenu = () => setShowMenu(!showMenu);

  const handleClickMenuItem = ({ path }: RouteType) => history.push(path);

  // renders
  const renderBar = () => (
    <Toolbar
      componentLeft={<Logo src={LogoSvg} onClick={() => history.push('/')} />}
      componentRight={
        <HeaderIcon
          name={showMenu ? 'close' : 'menu'}
          onClick={handleClickHeaderMenu}
        />
      }
    />
  );

  const renderMenu = () =>
    showMenu && <Menu items={routes} onClickItem={handleClickMenuItem} />;

  return (
    <Container {...props}>
      {renderBar()}
      {renderMenu()}
    </Container>
  );
};
