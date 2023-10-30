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
  overflow-x: hidden;
  gap: 8px;
  transition: transform 0.25s linear;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:vertical {
    display: none;
  }

  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
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
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;
