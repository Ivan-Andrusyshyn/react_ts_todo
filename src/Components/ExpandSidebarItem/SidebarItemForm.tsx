import React from "react";
import * as S from "./styles";
interface PropsSidebarForm {
  error: string;
  setShowForm: (arg: boolean) => void;
  color: string;
  handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setColor: (arg: string) => void;
  setTitle: (arg: string) => void;
  title: string;
  addNewCategory: (e: React.FormEvent) => void;
}
const SidebarItemForm: React.FC<PropsSidebarForm> = ({
  error,
  setShowForm,
  color,
  handleCancel,
  setColor,
  setTitle,
  title,
  addNewCategory,
}) => {
  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setShowForm(false);
    }
  };
  return (
    <S.ModalOverlay onClick={handleCloseModal}>
      <S.FormModal>
        <S.CategoryForm action="" onSubmit={addNewCategory}>
          <S.TitleInput
            value={title}
            style={{ border: error ? "1px solid red" : "" }}
            type="text"
            maxLength={10}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <S.ErrorText>{error}</S.ErrorText>}
          <S.ColorInputWrapper>
            <S.ColorInput
              value={color}
              type="color"
              style={{ border: error ? "1px solid red" : "" }}
              onChange={(e) => setColor(e.target.value)}
            />
            <span>{color ? color : "Choose color"}</span>
          </S.ColorInputWrapper>
          <S.BtnWrapper>
            <S.FormBtn type="submit">Add</S.FormBtn>
            <S.FormBtn onClick={handleCancel} id="close">
              Cancel
            </S.FormBtn>
          </S.BtnWrapper>
        </S.CategoryForm>
      </S.FormModal>
    </S.ModalOverlay>
  );
};
export default SidebarItemForm;
