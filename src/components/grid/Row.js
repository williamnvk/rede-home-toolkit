import React from 'react';
import { Row } from './styled';

function renderRow(props) {
  return <Row {...props} />;
}

export default React.memo(renderRow);
