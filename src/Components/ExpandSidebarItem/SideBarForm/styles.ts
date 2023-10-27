import styled, { css } from "styled-components";
interface propInput {
  error: string;
}
export const Backdrop = styled.div`
  background-color: transparent;
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
`;
export const FormModal = styled.div`
  background-color: #fff;
  position: absolute;
  width: 250px;
  border-radius: 6px;
  z-index: 222;
  left: 180px;
  top: 330px;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
export const ModalOverlay = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const CategoryForm = styled.form`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5px;
  width: 100%;
`;
export const ErrorText = styled.p`
  font-size: 12px;
  color: red;
`;
export const ColorInput = styled.input<propInput>`
  border-radius: 4px;
  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `};
`;
export const TitleInput = styled.input<propInput>`
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `};
  &::placeholder {
    color: #bbb;
    opacity: 0.6;
    color: ${(props) => (props.error ? "red" : "#bbb")};
  }
`;
export const FormBtn = styled.button`
  width: 100%;
  font-weight: 700;
  color: #777;
  height: 25px;
  letter-spacing: 0.1em;
  cursor: pointer;
`;
export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
`;

export const ColorInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
