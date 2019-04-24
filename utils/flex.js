import {
  defaultJustifyContent,
  defaultAlignItems,
} from '../constants/flex';

export function handleJustifyContent(justify) {
  if (justify === 'center') return 'center';
  if (justify === 'right') return 'flex-end';
  return defaultJustifyContent;
}

export function handleAlignItems(align) {
  if (align === 'center' || align === 'middle') return 'center';
  if (align === 'bottom') return 'flex-end';
  if (align === 'fill') return 'stretch';
  return defaultAlignItems;
}
