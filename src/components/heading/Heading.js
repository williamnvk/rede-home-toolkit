// @flow
import React, { memo } from 'react';
import { Heading } from './styled';
import type { HeadingProps } from './types';
import { withRef } from '../../utils';

function renderHeading(props: HeadingProps) {
  return <Heading {...props} />;
}

export default memo<HeadingProps>(withRef(renderHeading));
