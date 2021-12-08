import styled from 'styled-components';

import { shared } from '../../styled';

import { Props } from './types';

export const StyledCommonText = styled.p<Props>`
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  color: ${({ color }) => color || shared.colors.gray.dark};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || 0};
  font-family: ${({ font }) => font}; // default from body is hind
  font-weight: ${({ fontWeight }) => fontWeight}; // default from browser is 400
  font-size: ${({ fontSize }) => fontSize || shared.font.size.medium};
  margin-left: ${({ checkBoxMargin }) => checkBoxMargin && '28px'};
  white-space: ${({ whiteSpace }) => whiteSpace};
  ${({ ellipsis, width }) =>
    ellipsis &&
    `
    @media (max-width: ${shared.breakpoints.mobile}) {
      white-space: nowrap;
      width: 100%;
      max-width: ${`calc(${width} / 1.8)`};
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `}
  ${({ numberFormat }) =>
    numberFormat &&
    `
    white-space: nowrap;
  `};
  ${({ center }) =>
    center &&
    `
    justify-content: center;
    align-items: center;
  `};
  ${({ inFocus }) =>
    inFocus &&
    `
    font-size: ${inFocus ? shared.font.size.regular : shared.font.size.small};
  `};
  ${({ small }) =>
    small &&
    `
    font-size: ${shared.font.size.small};
  `};
  ${({ medium }) =>
    medium &&
    `
    font-size: ${shared.font.size.medium};
  `};
  ${({ regular }) =>
    regular &&
    `
    font-size: ${shared.font.size.regular};
  `};
  ${({ xregular }) =>
    xregular &&
    `
    font-size: ${shared.font.size.xregular};
  `};
  ${({ big }) =>
    big &&
    `
    font-size: ${shared.font.size.big};
  `};
  ${({ large }) =>
    large &&
    `
    font-size: ${shared.font.size.large};
  `};
  ${({ xlarge }) =>
    xlarge &&
    `
    font-size: ${shared.font.size.xlarge};
    line-height: 1.1;
  `};
  ${({ semiBold }) =>
    semiBold &&
    `
    font-weight: ${shared.font.weight.semiBold};
  `};
  ${({ bold }) =>
    bold &&
    `
    font-weight: ${shared.font.weight.bold};
  `};
  &.text-blue-dark {
    color: ${shared.colors.blue.dark};
  }
  &.text-gray {
    color: ${shared.colors.gray.dark};
  }
`;
