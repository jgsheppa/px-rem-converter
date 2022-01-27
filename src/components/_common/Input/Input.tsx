import React, { useState } from 'react';
import CommonButton from '../Button';

import CommonLabel from '../Label/Label';

import { ReactComponent as Clipboard } from '../../../assets/images/clipboard.svg';
import { ReactComponent as Checkmark } from '../../../assets/images/checkmark.svg';

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
  minWidth,
  ...rest
}) => {
  const label = required ? `${inputLabel}*` : inputLabel;

  const [isCopied, setIsCopied] = useState<boolean>(false);

  function handleCopy() {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

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
        minWidth={minWidth}
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
              borderRadius={borderRadius}
              value={value}
              {...rest}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter' && measurement) {
                  navigator.clipboard.writeText(measurement);
                  handleCopy();
                }
              }}
            />

            {measurement && (
              <CommonButton
                padding="0 1rem"
                width="4rem"
                buttonRadius={buttonRadius}
                margin="none"
                color="transparent"
                onKeyDown={(e: any) => console.log('EEE', e.key)}
                onClick={() => {
                  navigator.clipboard.writeText(measurement);
                  handleCopy();
                }}
              >
                {isCopied ? <Checkmark /> : <Clipboard />}
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
                {isCopied ? <Checkmark /> : <Clipboard />}
              </CommonButton>
            )}
          </Container>
        </StyledInnerContainer>
      </StyledInputContainer>
    </>
  );
};

export default Input;
