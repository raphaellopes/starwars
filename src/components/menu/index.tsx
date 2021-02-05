// Vendors
import React, { FC } from 'react';

// Locals
import { Container } from '../layouts';
import { Wrapper, Items, Item } from './styles';
import { MenuProps, ItemProps } from './types';

export const Menu: FC<MenuProps> = ({ items, ...rest }) => {
  const renderItem = ({ label, onClick }: ItemProps, index: number) => (
    <Item key={`menu-item-${index}`} onClick={onClick}>
      {label}
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
