import { FlexDirection, FlexWrap, JustifyContent } from './flex';

export { FontSizeProps, FontFamilyProps } from './text';
export { Colors, ColorProps } from './color';

export { FlexDirection, FlexWrap, JustifyContent };

export type StyleProps = {
  width?: string | number,
  size?: string | number,
  height?: string | number,
  direction?: FlexDirection,
  wrap?: FlexWrap,
  justify?: JustifyContent,
  align?: string,
  background?: string,
};
