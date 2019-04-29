// @flow
import { handleJustifyContent, handleAlignItems } from './flex';
import { isNumber } from '../helpers/numbers';
import type { StyleProps } from '../types';
import { handleColor } from './color';

export function inject(
  {
    direction,
    wrap,
    width,
    size,
    height,
    justify,
    align,
    background,
    color,
    variant,
    el,
    theme: { measurer, colors },
  }: StyleProps,
  obj: boolean = false,
): string | Object {
  const styles = [];

  const { type } = measurer;

  if (width && !size) styles.push(`width: ${width}${type}`);
  if (height && !size) styles.push(`height: ${height}${type}`);
  if (justify)
    styles.push(`justify-content: ${handleJustifyContent(justify)}`);
  if (align) styles.push(`align-items: ${handleAlignItems(align)}`);

  if (el === 'row' || el === 'column') {
    if (size || (!width && !height))
      styles.push(`flex: ${size && isNumber(size) ? size : 1}`);
    styles.push(`flex-direction: ${direction || 'row'}`);
    styles.push(`flex-wrap: ${wrap || 'nowrap'}`);
  }

  if (background)
    styles.push(
      handleColor(
        background,
        'background-color',
        variant || false,
        colors,
      ),
    );

  if (color)
    styles.push(
      handleColor(color, 'color', variant || false, colors),
    );

  return obj ? styles : styles.join(';');
}
