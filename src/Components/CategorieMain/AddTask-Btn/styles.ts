import styled from "styled-components";

export const Container = styled.button`
  height: 50px;
  width: 80vw;
  border: 1px solid #ccc;
  border-radius: 16px;
  display: flex;
  margin: 8px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #eee;
    cursor: pointer;
  }
  @media screen and (min-width: 920px) {
    width: 70vw;
  }
`;

export const Icon = styled.img`
  width: 24px;
`;

export const Text = styled.p`
  color: #ccc;
  font-size: 20px;
  font-weight: 400;
  margin: 16px;
`;
