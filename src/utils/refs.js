import React, { forwardRef } from 'react';

export const withRef = Component => {
  const withForwardRef = function(props, ref) {
    return <Component ref={ref} {...props} />;
  };

  return forwardRef(withForwardRef);
};
