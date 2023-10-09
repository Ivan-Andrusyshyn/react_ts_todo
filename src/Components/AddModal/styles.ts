import { error } from "console";
import styled, { css } from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 40vw;
  background: white;
  border-radius: 16px;
  opacity: 1;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
`;

export const Buttons = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CancelButton = styled.button`
  background: white;
  border: 1px solid blue;
  color: blue;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  font-size: 20px;
  margin: 8px;

  &:hover {
    border: 2px solid blue;
    font-weight: 500;
    background: #eee;
  }
`;

export const DeletButton = styled.button`
  background: white;
  border: 1px solid green;
  color: green;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  font-size: 20px;
  margin: 8px;

  &:hover {
    border: 2px solid green;
    font-weight: 500;
    background: #eee;
  }
`;
interface propInput {
  error: string;
}
export const TitleInput = styled.input<propInput>`
  width: 32vw;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  padding-left: 8px;
  font-size: 20px;
  color: #555;
  box-sizing: border-box;
  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `};
  &:focus {
    border: 1px solid #999;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
    opacity: 0.6;
    color: ${(props) => (props.error ? "red" : "#bbb")};
  }
`;

export const Select = styled.select`
  width: 32vw;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  padding-left: 8px;
  font-size: 20px;
  color: #555;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #999;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const ErrorText = styled.p`
  font-size: 16px;
  opacity: 0.6;
  color: red;
`;
export const Text = styled.p`
  font-size: 20px;
  color: #555;
`;
