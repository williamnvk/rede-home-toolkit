export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'grey'
  | 'black';

export type ColorProps = {
  primary?: boolean,
  secondary?: boolean,
  success?: boolean,
  error?: boolean,
  warning?: boolean,
  info?: boolean,
  grey?: boolean,
  black?: boolean,
};
