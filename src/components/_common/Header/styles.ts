import styled from 'styled-components';

export const MainHeader = styled.header`
  position: fixed;
  height: 72px;
  width: 100%;
  background-color: var(--color-background);
  border-bottom: #161b22 0.25rem solid;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const HeaderInnerContainer = styled.div`
  max-width: 2600px;
  height: 72px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 160px 5fr 60px 5fr 3fr;
  min-width: 0;
  min-height: 0;
`;
