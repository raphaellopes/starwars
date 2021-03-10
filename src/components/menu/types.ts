// Vendors
import { HTMLAttributes } from 'react';

// Locals
import { RouteType } from '~shared';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  items: RouteType[];
  onClickItem: (item: RouteType) => void;
}
