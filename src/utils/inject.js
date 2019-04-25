// @flow
import { colorValidator } from '../validators';
import { handleJustifyContent, handleAlignItems } from './flex';
import { StyleProps } from '../types';

export function inject({
  width,
  size,
  height,
  direction,
  wrap,
  justify,
  align,
  background,
}: StyleProps): string {
  const styles = [];

  if (size) {
    styles.push(`flex: ${size}`);
  }

  if (width && !size) {
    styles.push(`width: ${width}`);
  }

  if (height && !size) {
    styles.push(`height: ${height}`);
  }

  if (direction) {
    styles.push(`flex-direction: ${direction}`);
  }

  if (wrap) {
    styles.push(`flex-wrap: ${wrap}`);
  }

  if (justify) {
    styles.push(`justify-content: ${handleJustifyContent(justify)}`);
  }

  if (align) {
    styles.push(`align-items: ${handleAlignItems(align)}`);
  }

  if (background) {
    const hex = colorValidator(background);
    if (hex) {
      styles.push(`background-color: ${hex}`);
    }
  }

  return styles.join(';');
}
