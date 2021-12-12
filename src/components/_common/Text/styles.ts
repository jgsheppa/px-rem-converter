import styled from 'styled-components';

import { shared } from '../../styled';

import { Props } from './types';

export const StyledCommonText = styled.p<Props>`
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  color: ${({ color }) => color || 'var(--color-text)'};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || 0};
  font-family: ${({ font }) => font}; // default from body is hind
  font-weight: ${({ fontWeight }) => fontWeight}; // default from browser is 400
  font-size: ${({ fontSize }) => fontSize || shared.font.size.medium};
  margin-left: ${({ checkBoxMargin }) => checkBoxMargin && '28px'};
  white-space: ${({ whiteSpace }) => whiteSpace};
`;
