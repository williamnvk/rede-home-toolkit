// @flow

export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between';

export type AlignItems = 'flex-start' | 'center' | 'flex-end';

export type FlexProps = {
  direction?: FlexDirection,
  wrap?: FlexWrap,
  Justify?: JustifyContent,
  align?: AlignItems,
};
