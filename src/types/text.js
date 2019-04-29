export type FontSize =
  | 'isTiny'
  | 'isSmall'
  | 'isRegular'
  | 'isLarge'
  | 'isExtraLarge';

export type FontFamily =
  | 'isLight'
  | 'isMedium'
  | 'isNormal'
  | 'isBold'
  | 'isBlack';

export type FontSizeProps = {
  tyni?: boolean,
  small?: boolean,
  regular?: boolean,
  large?: boolean,
  extra?: boolean,
};

export type FontFamilyProps = {
  light?: boolean,
  medium?: boolean,
  bold?: boolean,
  black?: boolean,
};
