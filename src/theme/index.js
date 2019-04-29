import React from 'react';
import { ThemeProvider } from 'styled-components';
import base from './base';
import measurer from './measurer';
import * as font from './font';
import * as border from './border';
import colors from '../colors';
import { themeValidator } from '../validators';
import type { ThemeProps } from '../types';
import heading from './heading';

const themeProps = {
  base,
  measurer,
  font,
  border,
  colors,
};

const themeDefault = {
  ...themeProps,
  heading: heading(themeProps),
};

export const withTheme = Component => props => (
  <ThemeProvider
    theme={{
      ...themeDefault,
      ...props.theme,
    }}
  >
    <Component {...props} />
  </ThemeProvider>
);

export function createTheme(theme: ThemeProps): Object {
  if (themeValidator(theme)) {
    return theme;
  }
  return theme;
}
