import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../../themes/defaultTheme';

import { StyledButton } from './styles';
import { Props } from './types';

const CommonButton: FunctionComponent<Props> = (props) => {
  const { ...rest } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledButton {...rest} />
    </ThemeProvider>
  );
};

CommonButton.defaultProps = {
  type: 'primary',
  size: 'regular',
};

export default CommonButton;
