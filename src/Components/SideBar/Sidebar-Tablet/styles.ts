import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;
