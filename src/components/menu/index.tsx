// Vendors
import React, { FC } from 'react';

// Locals
import { RouteType } from '~shared';
import { Container } from '../layouts';
import { Wrapper, Items, Item } from './styles';
import { MenuProps } from './types';

export const Menu: FC<MenuProps> = ({ items, onClickItem, ...rest }) => {
  const renderItem = (item: RouteType, index: number) => (
    <Item key={`menu-item-${index}`} onClick={() => onClickItem(item)}>
      {item.label}
    </Item>
  );

  return (
    <Wrapper {...rest}>
      <Container>
        <Items>{items.map(renderItem)}</Items>
      </Container>
    </Wrapper>
  );
};
