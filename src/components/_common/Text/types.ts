import { PropsWithChildren } from "react";

export type Props = PropsWithChildren<any> & {
  small?: boolean;
  medium?: boolean;
  regular?: boolean;
  xregular?: boolean;
  big?: boolean;
  large?: boolean;
  xlarge?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  align?: string;
  center?: boolean;
  className?: string;
  justify?: string;
  margin?: string;
  font?: string;
  color?: string;
  fontWeight?: string;
  inline?: boolean;
  inFocus?: boolean;
  width?: string;
  checkBoxMargin?: boolean;
  whiteSpace?: string;
  ellipsis?: boolean;
  lineHeight?: string;
  numberFormat?: boolean;
};
