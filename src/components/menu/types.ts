// Vendors
import { HTMLAttributes } from 'react';

export interface ItemProps {
  label: string;
  onClick: () => void;
}

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  items: ItemProps[];
}
