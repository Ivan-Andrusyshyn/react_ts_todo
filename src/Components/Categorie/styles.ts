import styled from "styled-components";
interface ColorTagProps {
  color: string;
}

export const Categorie = styled.li`
  height: 20px;
  margin: 4px 4px 4px 15px;
  display: flex;
  position: relative;
  align-items: center;
  position: relative;
  gap: 8px;
  transition: transform 0.25s linear;
`;
export const ColorTag = styled.div<ColorTagProps>`
  height: 14px;
  width: 14px;
  border-radius: 4px;
  background: ${(props) => props.color};
`;
export const LabelForm = styled.label<ColorTagProps>`
  display: flex;
  border: 2px solid ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
export const ListName = styled.p`
  font-size: 16px;
  color: #777;
  font-weight: 600;
`;
export const Selected = styled.div`
  position: absolute;
  background: ${(props) => props.color};
  width: 7px;
  height: 7px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  margin-right: 1px;
`;
export const CustomRadioInput = styled.input<ColorTagProps>`
  opacity: 0;
  position: absolute;
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
export const AddIcon = styled.img`
  height: 16px;
`;
export const ItemWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
// ===================MODAL
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
  top: 350px;
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
  width: 75px;
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

export const EditModalTitle = styled.h2`
  margin-bottom: 10px;
`;
