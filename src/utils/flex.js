// @flow

export function handleJustifyContent(justify: string): string {
  if (justify === 'center') return 'center';
  if (justify === 'right') return 'flex-end';
  return 'row';
}

export function handleAlignItems(align: string): string {
  if (align === 'center' || align === 'middle') return 'center';
  if (align === 'bottom') return 'flex-end';
  if (align === 'fill') return 'stretch';
  return 'flex-start';
}
