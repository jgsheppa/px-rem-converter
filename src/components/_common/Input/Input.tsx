import React from 'react';
import CommonButton from '../Button';

import CommonLabel from '../Label/Label';

import { ReactComponent as Clipboard } from '../../../assets/images/clipboard.svg';

import {
  StyledInnerContainer,
  StyledInputContainer,
  StyledInput,
} from './styles';
import { InputProps } from './types';
import Container from '../Container';

const Input: React.FC<InputProps> = ({
  icon,
  barcodeIcon,
  inputContainerStyles,
  marginConversion,
  buttonRadius,
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
  measurement,
  borderRadius,
  isMargin,
  justify,
  ...rest
}) => {
  const inputProps: InputProps = {
    icon,
    errors,
    noIconErrorMargin,
    borderRadius,
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
        justify={justify}
      >
        <StyledInnerContainer justify={justify}>
          {label && (
            <CommonLabel
              margin={largeLabel ? '1rem 0' : ''}
              largerLabel={largeLabel}
            >
              {label}
            </CommonLabel>
          )}
          <Container direction="row" width="fit-content" height="auto">
            <StyledInput
              maxWidth={maxWidth}
              borderRadius={borderRadius}
              value={value}
              {...rest}
            ></StyledInput>
            {measurement && (
              <CommonButton
                padding="0 1rem"
                buttonRadius={buttonRadius}
                margin="none"
                color="transparent"
                onClick={() => navigator.clipboard.writeText(measurement)}
              >
                <Clipboard />
              </CommonButton>
            )}
            {isMargin && (
              <CommonButton
                padding="0 1rem"
                buttonRadius={buttonRadius}
                margin="none"
                color="transparent"
                disabled={!marginConversion}
                onClick={() => {
                  if (marginConversion)
                    navigator.clipboard.writeText(marginConversion);
                }}
              >
                <Clipboard />
              </CommonButton>
            )}
          </Container>
        </StyledInnerContainer>
      </StyledInputContainer>
    </>
  );
};

export default Input;
