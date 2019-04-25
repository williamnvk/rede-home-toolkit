// @flow
import React, { memo } from 'react';
import { Text } from './styled';
import { TextProps } from './types';

function renderText(props: TextProps) {
  return <Text {...props} />;
}

export default memo<TextProps>(renderText);
