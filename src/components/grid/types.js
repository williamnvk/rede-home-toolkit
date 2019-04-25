import { StyleProps } from '../../types';

export type ColumnProps = {
  ...StyleProps,
  direction: string,
  size: number,
  children: any,
};

export type RowProps = {
  ...StyleProps,
  direction: string,
  children: any,
};
