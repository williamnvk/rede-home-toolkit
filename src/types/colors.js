// @flow
import type { ThemeProps } from './theme';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'grey'
  | 'black'
  | 'custom';

export type ColorProps = {
  light: string,
  main: string,
  dark: string,
  content: string,
};

export type InjectStyleColor = {
  background?: string,
  variant?: string,
  theme: ThemeProps,
  returnObject: boolean,
};
