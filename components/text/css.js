import { css } from 'styled-components';
import { handleFontSize, handleFontFamily } from '../../utils/text';
import { handleColor } from '../../utils/color';

export const base = css`
  font-family: ${function(props) {
    return handleFontFamily(props);
  }};
  font-size: ${function(props) {
    return handleFontSize(props, 1);
  }};
  line-height: ${function(props) {
    return handleFontSize(props, 1.2);
  }};
  color: ${function(props) {
    return handleColor(props);
  }};
`;
