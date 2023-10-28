import styled from "styled-components";

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

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  left: 170px;
  top: 150px;
  position: absolute;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
export const Button = styled.button`
  margin: 5px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
`;

export const CategoryForm = styled.form`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5px;
  width: 100%;
`;

export const ColorInput = styled.input`
  border-radius: 4px;
`;
export const TitleInput = styled.input`
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
`;
export const FormBtn = styled.button`
  width: 100%;
  font-weight: 700;
  color: #777;
  letter-spacing: 0.1em;
  cursor: pointer;
`;
export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  color: #777;
  gap: 20px;
  justify-content: center;
`;

export const ColorInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const EditModalTitle = styled.h2`
  margin-bottom: 10px;
`;
