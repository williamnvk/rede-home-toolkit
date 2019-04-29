// @flow
import type {
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
} from './flex';

export type ThemeProps = {
  colors: Object,
  measurer: string,
};

export type StyleProps = {
  direction?: FlexDirection,
  wrap?: FlexWrap,
  width?: string | number,
  size?: string | number,
  height?: string | number,
  justify?: JustifyContent,
  align?: AlignItems,
  background?: string,
  color: string,
  variant?: string,
  el?: string,
  theme: ThemeProps,
};
