// Vendors
import baseStyled, {
  ThemedStyledInterface,
  ThemeProvider as ThemeProviderStyled,
} from 'styled-components';

// Locals
import { sizes } from './sizes';
import { colors } from './colors';

export const theme = {
  sizes,
  colors,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export const ThemeProvider = ThemeProviderStyled;
