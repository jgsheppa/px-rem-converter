import React from 'react';

import CommonLabel from '../Label/Label';

import {
  StyledInnerContainer,
  StyledInputContainer,
  StyledInput,
} from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  icon,
  barcodeIcon,
  inputContainerStyles,
  multiline,
  inputLabel,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  placeholder,
  errors,
  padding,
  type,
  rightAligned,
  name,
  errorMarginTop,
  noIconErrorMargin,
  required,
  largeLabel,
  form,
  formErrors,
  flex,
  maxWidth,
  height,
  format,
  numberFormat,
  mask,
  decimalScale,
  value,
  ...rest
}) => {
  const inputProps: InputProps = {
    icon,
    errors,
    noIconErrorMargin,
    marginLeft,
    marginRight,
    padding,
    type,
    rightAligned,
    largeLabel,
    name,
    errorMarginTop,
    marginBottom,
    placeholder,
    flex,
    maxWidth,
    form,
    format,
    numberFormat,
    mask,
    decimalScale,
    value,
    ...rest,
  };

  const label = required ? `${inputLabel}*` : inputLabel;

  return (
    <>
      <StyledInputContainer
        style={inputContainerStyles}
        marginTop={marginTop}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        maxWidth={maxWidth}
        flex={flex}
      >
        <StyledInnerContainer>
          <CommonLabel
            margin={largeLabel ? '1rem 0' : ''}
            largerLabel={largeLabel}
          >
            {label}
          </CommonLabel>
          <StyledInput value={value} {...rest}></StyledInput>
        </StyledInnerContainer>
      </StyledInputContainer>
    </>
  );
};

export default Input;
