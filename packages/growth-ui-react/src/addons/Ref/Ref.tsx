import React, { FC } from 'react';
import { Ref as InnerRef, RefProps } from '@fluentui/react-component-ref';

const Ref: FC<RefProps> = (props) => {
  const { children, ...rest } = props;

  return <InnerRef {...rest}>{children}</InnerRef>;
};

export default Ref;
