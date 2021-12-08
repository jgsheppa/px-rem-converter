import React from 'react';

import { StyledCommonText } from './styles';
import { Props } from './types';

const CommonText: React.FC<Props> = (props) => {
  return (
    <StyledCommonText {...props} width={props.width || 'fit-content'}>
      {props.children}
    </StyledCommonText>
  );
};

export default CommonText;
