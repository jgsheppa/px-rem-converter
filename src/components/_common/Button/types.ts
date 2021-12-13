import { PropsWithChildren, CSSProperties } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Props = PropsWithChildren<any> & {
  className?: string;
  disabled?: boolean;
  shadowed?: boolean;
  block?: boolean;
  type?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'declined'
    | 'link'
    | 'muted'
    | 'blueOutlined';
  size?: 'small' | 'regular' | 'large';
  style?: CSSProperties;
  outline?: 'green' | 'red' | 'blue' | 'gray';
  width?: number;
  height?: string;
  textAlign?: string;
  margin?: string;
  padding?: string;
  fontWeight?: string;
  inVisible?: boolean;
  hideTextOnMobile?: boolean;
  color?: string;
  alignSelf?: string;
  fontSize?: string;
  submit?: string;
  backgroundColor?: string;
  buttonRadius?: string;
};
