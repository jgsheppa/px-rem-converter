import { CSSProperties } from 'react';

export type InputProps = {
  ref?: React.Ref<HTMLInputElement> | null;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  dualIcons?: boolean;
  singleIcon?: boolean;
  icon?: React.ReactElement;
  barcodeIcon?: React.ReactElement | null;
  value?: string | number;
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  min?: number;
  max?: number;
  type?: string;
  minWidth?: string;
  name?: string;
  maxLength?: number;
  multiline?: boolean;
  multilineHeight?: string;
  required?: boolean;
  errors?: string | boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  readOnly?: boolean;
  highlighted?: boolean;
  inputContainerStyles?: CSSProperties;
  dropMargin?: boolean;
  inputLabel?: string | React.ReactElement;
  marginTop?: string;
  noIconErrorMargin?: boolean;
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
  largeLabel?: boolean;
  boxSizing?: string;
  rightAligned?: boolean;
  errorMarginTop?: string;
  marginBottom?: string;
  htmlFor?: string;
  form?: boolean;
  formErrors?: string | boolean;
  flex?: string | number;
  format?: string;
  numberFormat?: boolean;
  mask?: string;
  measurement?: string;
  decimalScale?: number;
  borderRadius?: string;
  buttonRadius?: string;
  marginConversion?: string | undefined;
  isMargin?: boolean;
  justify?: string;
};
