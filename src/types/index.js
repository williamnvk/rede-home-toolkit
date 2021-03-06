// @flow
import type {
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
} from './flex';
import type { Colors, ColorProps } from './colors';
import type { FontSizeProps, FontFamilyProps } from './text';

export type {
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
  FontSizeProps,
  FontFamilyProps,
  Colors,
  ColorProps,
};

type Measurer = {
  type: string,
  multiplier: number,
};

export type ThemeProps = {
  colors: Object,
  measurer: Measurer,
};

export type StyleProps = {
  width?: string | number,
  size?: string | number,
  height?: string | number,
  direction?: FlexDirection,
  wrap?: FlexWrap,
  justify?: JustifyContent,
  align?: AlignItems,
  background?: string,
  color: string,
  variant?: string,
  el?: string,
  gap?: string | number,
  theme: ThemeProps,
};
