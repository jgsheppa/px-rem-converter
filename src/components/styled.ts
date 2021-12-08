import styled from 'styled-components';

export interface StyledFlexItemProps {
  alignItems?: string;
  flex?: string;
  direction?: string;
  margin?: string;
  justifyContent?: string;
  width?: string;
}

export const shared = {
  zIndex: {
    modal: 1300,
    modalOverlay: 1200,
    notification: 1100,
    sidebar: 1000,
    dropdown: 400,
    select: 350,
    actionBar: 300,
    tooltip: 200,
    tableHeader: 100,
    tableFilter: 3,
  },
  font: {
    monteserrat: "'Montserrat', sans-serif",
    hind: "'Hind Siliguri', sans-serif",
    size: {
      xsmall: '0.7rem',
      small: '0.8rem',
      medium: '0.9rem',
      regular: '1rem',
      xregular: '1.2rem',
      big: '1.4rem',
      large: '1.8rem',
      xlarge: '2rem',
      xxlarge: '2.7rem',
      megalarge: '4.7rem',
    },
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: '430px',
    tablet: '768px',
    desktop: '1024px',
    wideDesktop: '1240px',
    ultraWide: '1380px',
  },
  colors: {
    white: {
      regular: '#fefefe',
      light: '#fff',
    },
    yellow: {
      regular: '#fdc222',
      light: '#fff099',
      semiLight: '#FAE9B7',
      brownYellow: '#7E610A',
    },
    orange: {
      regular: '#ff8f0b',
    },
    gray: {
      disabled: '#f3f4f6',
      light: '#f7f7f7',
      mid: '#dee0e4',
      muted: '#cecfd8',
      regular: '#c8c9d1',
      semidark: '#B6B9C6',
      lightDark: '#9A9A9A',
      boring: '#333',
      dark: '#666666',
    },
    blue: {
      light: '#eceef7',
      semiLight: '#d5defe',
      semiRegular: '#d7ddf7',
      dark40: '#9A9DAD',
      dark60: '#6D728C',
      regular: '#304ffe',
      blueAction: '#3A44F5',
      lightRoyal: '#3e3bff',
      dark: '#0c1440',
      cta60: '#B0B4FB',
      cta20: '#D8DAFD',
      cta10: '#EBECFE',
      cta05: '#F5F6FE',
      hover: '#202ADF',
    },
    red: {
      light: '#fff4f4',
      semiLight: '#FBDDDD',
      semiRegular: '#EB5757',
      regular: '#ff3b3b',
      darkerlight: '#FAC6C6',
      dark: '#C01B1B',
      hover: '#E73232',
    },
    green: {
      light: '#c6f8b3',
      grassy: '#34b403',
      dark: '#276913',
      lightDark: '#196F3E',
      strong: '#0c8559',
      tertiary: '#27AE60',
    },
  },
};

// Has to be !important.
export const Main = styled.main`
  max-width: 2600px;
  margin: 0 auto !important;
  margin-top: 60px !important;
  height: calc(100vh - 60px) !important;
`;
export const StyledFlexItem = styled.div<StyledFlexItemProps>`
  align-items: ${(props) => props.alignItems || 'center'};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  margin: ${(props) => props.margin || 0};
  width: ${(props) => props.width || 'auto'};

  ${(props) => {
    if (props.flex) {
      return `flex: ${props.flex}`;
    }

    if (props.direction) {
      return `flex-direction: ${props.direction};`;
    }
  }}
`;
