// Vendors
import { HTMLAttributes } from 'react';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  disablePrev: boolean;
  disableNext: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
}
