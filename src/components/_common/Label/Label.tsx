import styled from 'styled-components';

import { shared } from '../../styled';

import { LabelProps } from './types';

const CommonLabel = styled.label<LabelProps>`
  margin: ${({ margin }) => margin || '0.3rem 0'};
  font-size: ${(props) =>
    props.largerLabel ? shared.font.size.medium : shared.font.size.small};
  font-weight: ${(props) =>
    props.largerLabel
      ? shared.font.weight.semiBold
      : shared.font.weight.regular};
  color: ${(props) => (props.color ? props.color : shared.colors.blue.dark60)};
`;

export default CommonLabel;
