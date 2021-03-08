// Vendors
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IconType extends HTMLAttributes<HTMLLIElement> {
  name: string;
}

// @TODO: Create sizes to resolve icons from styles/sizes
export const Icon = styled.i.attrs<IconType>(
  ({ className, name, ...rest }) => ({
    ...rest,
    className: `swicon sw-${name} ${className}`,
  })
)<IconType>`
  display: inline-block;
`;
