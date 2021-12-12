import React, { FunctionComponent } from 'react';

import { StyledButton } from './styles';
import { Props } from './types';

const CommonButton: FunctionComponent<Props> = (props) => {
  const { ...rest } = props;
  return <StyledButton {...rest} />;
};

CommonButton.defaultProps = {
  type: 'primary',
  size: 'regular',
};

export default CommonButton;
