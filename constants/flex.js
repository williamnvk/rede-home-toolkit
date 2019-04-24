import { css } from 'styled-components';

export const defaultDirection = 'row';
export const defaultWrap = 'nowrap';
export const defaultJustifyContent = 'flex-start';
export const defaultAlignItems = 'flex-start';

export const flexDisplay = css`
  display: flex;
`;

export const flexDirectionCollection = [
  `${defaultDirection}`,
  'row-reverse',
  'column',
  'column-reverse',
];

export const flexWrapCollection = [
  `${defaultWrap}`,
  'wrap',
  'wrap-reverse',
];

export const justifyContent = [
  `${defaultJustifyContent}`,
  'center',
  'flex-end',
  'space-between',
];
