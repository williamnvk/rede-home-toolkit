import {
  flexDirectionValidator,
  flexWrapValidator,
  colorValidator,
} from '../validators';
import { handleJustifyContent, handleAlignItems } from './flex';

export function inject(props) {
  const {
    width,
    size,
    height,
    direction,
    wrap,
    justify,
    align,
    background,
  } = props;

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
    const flexDirection = flexDirectionValidator(direction);
    if (flexDirection) {
      styles.push(`flex-direction: ${flexDirection}`);
    }
  }

  if (wrap) {
    const flexWrap = flexWrapValidator(wrap);
    if (flexWrap) {
      styles.push(`flex-wrap: ${flexWrap}`);
    }
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
