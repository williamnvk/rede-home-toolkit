import React from 'react';
import { Column } from './styled';

function renderColumn(props) {
  return <Column {...props} />;
}

export default React.memo(renderColumn);
