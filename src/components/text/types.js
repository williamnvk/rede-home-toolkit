import { FontSizeProps, FontFamilyProps } from '../../types';

export type TextProps = {
  ...FontSizeProps,
  ...FontFamilyProps,
  children: any,
};
