// Vendors
import baseStyled, {
  ThemedStyledInterface,
  ThemeProvider as ThemeProviderStyled,
} from 'styled-components';

// Locals
import { sizes } from './sizes';

export const theme = {
  sizes,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export const ThemeProvider = ThemeProviderStyled;
