import { css } from 'styled-components';

import { shared } from '../components/styled';

const buttonCommonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 4px;
  font-family: ${shared.font.hind};
  font-weight: ${shared.font.weight.regular};
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.23px;
  text-align: center;
  cursor: pointer;

  & > svg {
    margin: 0 0.5rem 0 0;
  }
`;

const buttonTypes = {
  primary: css`
    border: 1px solid ${shared.colors.blue.blueAction};
    color: ${shared.colors.white.light};
    background-color: ${shared.colors.blue.blueAction};

    &:hover {
      border: 1px solid ${shared.colors.blue.hover};
      background-color: ${shared.colors.blue.hover};
    }

    &:disabled {
      border: 1px solid ${shared.colors.blue.cta60};
      background-color: ${shared.colors.blue.cta60};
      pointer-events: none;
    }

    &:active {
      box-shadow: ${shared.colors.blue.blueAction} 0px 0px 4px;
    }
  `,
  secondary: css`
    border: 1px solid ${shared.colors.blue.blueAction};
    background-color: ${shared.colors.white.light};
    color: ${shared.colors.blue.blueAction};

    &:hover {
      border: 1px solid ${shared.colors.blue.hover};
      color: ${shared.colors.blue.hover};
    }

    &:disabled {
      border: 1px solid ${shared.colors.blue.cta60};
      color: ${shared.colors.blue.cta60};
      pointer-events: none;
    }

    &:active {
      box-shadow: ${shared.colors.blue.blueAction} 0px 0px 4px;
    }
  `,
  tertiary: css`
    border: 1px solid rgba(58, 68, 245, 0.1);
    background-color: rgba(58, 68, 245, 0.1);
    color: ${shared.colors.blue.blueAction};

    &:hover {
      background-color: rgba(58, 68, 245, 0.2);
    }

    &:active {
      box-shadow: ${shared.colors.blue.blueAction} 0px 0px 4px;
    }
  `,
  white: css`
    border: 1px solid ${shared.colors.white.light};
    background-color: ${shared.colors.white.light};
    color: ${shared.colors.blue.blueAction};
  `,
  danger: css`
    border: 1px solid ${shared.colors.red.semiRegular};
    background-color: ${shared.colors.red.semiRegular};
    color: ${shared.colors.white.light};

    &:hover {
      border: 1px solid ${shared.colors.red.hover};
      background-color: ${shared.colors.red.hover};
    }

    &:disabled {
      // Not specified by designer
      pointer-events: none;
    }

    &:active {
      box-shadow: ${shared.colors.red.semiRegular} 0px 0px 4px;
    }
  `,
  dangerOutline: css`
    border: 1px solid ${shared.colors.red.semiRegular};
    background-color: ${shared.colors.white.light};
    color: ${shared.colors.red.semiRegular};

    &:hover {
      border: 1px solid ${shared.colors.red.hover};
      color: ${shared.colors.red.hover};
    }

    &:disabled {
      // Not specified by designer
      pointer-events: none;
    }

    &:active {
      box-shadow: ${shared.colors.red.semiRegular} 0px 0px 4px;
    }
  `,
  greenOutline: css`
    border: 1px solid ${shared.colors.green.tertiary};
    background-color: rgba(39, 174, 96, 0.2);
    color: ${shared.colors.green.tertiary};

    &:hover {
      background-color: rgba(39, 174, 96, 0.3);
    }

    &:disabled {
      // Not specified by designer
      border: 1px solid rgba(39, 174, 96, 0.5);
      background-color: rgba(39, 174, 96, 0.1);
      pointer-events: none;
    }
  `,
  redOutline: css`
    border: 1px solid ${shared.colors.red.semiRegular};
    background-color: rgba(235, 87, 87, 0.2);
    color: ${shared.colors.red.semiRegular};

    &:hover {
      background-color: rgba(235, 87, 87, 0.3);
    }

    &:disabled {
      // Not specified by designer
      border: 1px solid rgba(235, 87, 87, 0.5);
      background-color: rgba(235, 87, 87, 0.1);
      pointer-events: none;
    }
  `,
  link: css`
    border: none;
    background-color: inherit;
    color: ${shared.colors.blue.blueAction};
    line-height: 1.2;

    &:hover {
      color: ${shared.colors.blue.hover};
    }

    &:disabled {
      color: ${shared.colors.blue.cta60};
      pointer-events: none;
    }
  `,
  muted: css`
    background: ${shared.colors.white.light};
    color: ${shared.colors.gray.dark};
  `,
};

const buttonOutlines = {
  green: css`
    border: 1px solid ${shared.colors.green.grassy};
  `,
  red: css`
    border: 1px solid ${shared.colors.red.regular};
  `,
  blue: css`
    border: 1px solid ${shared.colors.blue.regular};
  `,
  gray: css`
    border: 1px solid ${shared.colors.gray.regular};
  `,
};

const buttonSizes = {
  small: css`
    font-size: ${shared.font.size.small};
    padding: 0.4rem 0.6rem;
  `,
  regular: css`
    font-size: ${shared.font.size.medium};
    padding: 0.6rem 1rem;
  `,
  large: css`
    font-size: ${shared.font.size.regular};
    padding: 1rem 1.4rem;
  `,
};

const notificationTypes = {
  error: css`
    border: 1px solid ${shared.colors.red.regular};
    border-left: 4px solid ${shared.colors.red.regular};
    background: ${shared.colors.red.light};
    font-weight: ${shared.font.weight.medium};
  `,
  info: css`
    border: 1px solid ${shared.colors.blue.lightRoyal};
    border-left: 4px solid ${shared.colors.blue.lightRoyal};
    background: ${shared.colors.white.regular};
  `,
  warning: css`
    border: 1px solid ${shared.colors.yellow.regular};
    border-left: 4px solid ${shared.colors.yellow.regular};
    background: ${shared.colors.white.regular};
  `,
  success: css`
    border: 1px solid ${shared.colors.green.grassy};
    border-left: 4px solid ${shared.colors.green.grassy};
    background: ${shared.colors.white.regular};
    font-weight: ${shared.font.weight.medium};
  `,
};

const notificationSizes = {
  regular: css`
    font-size: ${shared.font.size.medium};
    padding: 0.6rem 1rem;
  `,
  small: css`
    font-size: ${shared.font.size.xsmall};
    padding: 0.3rem 0.5rem;
  `,
};

const defaultTheme = {
  button: {
    default: buttonCommonStyles,
    types: buttonTypes,
    outlines: buttonOutlines,
    sizes: buttonSizes,
  },
  notification: {
    types: notificationTypes,
    sizes: notificationSizes,
  },
};

export default defaultTheme;
