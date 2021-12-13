import styled from 'styled-components';

import { LabelProps } from './types';

const CommonLabel = styled.label<LabelProps>`
  margin: ${({ margin }) => margin || '0.3rem 0'};
  color: ${(props) => (props.color ? props.color : 'var(--color-text)')};
`;

export default CommonLabel;
