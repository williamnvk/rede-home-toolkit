import { css } from 'styled-components';
import {
  flexDirectionValidator,
  flexWrapValidator,
} from '../../validators/flex';
import { defaultDirection, defaultWrap } from '../../constants/flex';
import { display } from '../../css';

const content = css`
  flex-direction: ${({ direction }) =>
    direction ? flexDirectionValidator(direction) : defaultDirection};
  flex-wrap: ${({ wrap }) =>
    wrap ? flexWrapValidator(wrap) : defaultWrap};
`;

export const row = css`
  ${display};
  ${content};
`;

export const column = css`
  ${content};
  ${function({ width, size }) {
    return !width && `flex: ${size || 1}`;
  }};
  ${function({ width }) {
    return width && `width: ${width};`;
  }};
  ${function({ height }) {
    return height && `height: ${height};`;
  }};
`;
