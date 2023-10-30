import styled from "styled-components";

export const AddArea = styled.button`
  height: 20px;
  margin: 4px 0 4px 15px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  position: relative;
`;
export const AddIcon = styled.img`
  height: 16px;
`;
export const AddText = styled.p`
  font-size: 16px;
  color: #ccc;
  margin-left: 8px;
  font-weight: 400;
  transition: color 0.25s linear;
  &:hover {
    color: #bdbdbd;
  }
`;
