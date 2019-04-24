import React from 'react';
import { Text } from './styled';

function renderText(props) {
  return <Text {...props} />;
}

export default React.memo(renderText);
