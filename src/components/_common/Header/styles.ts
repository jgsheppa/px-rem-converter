import styled from 'styled-components';

export const MainHeader = styled.header`
  position: fixed;
  height: 4.5rem;
  width: 100%;
  background-color: var(--color-header);
  top: 0;
  left: 0;
  z-index: 1;
`;

export const HeaderInnerContainer = styled.div`
  max-width: 2600px;
  height: 4.5rem;
  margin: 0 0.125rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  align-items: center;
  min-width: 0;
  min-height: 0;
`;
