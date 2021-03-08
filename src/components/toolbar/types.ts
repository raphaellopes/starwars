// Vendors
import { HTMLAttributes, ReactElement } from 'react';

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  componentLeft?: ReactElement;
  componentRight?: ReactElement;
}
