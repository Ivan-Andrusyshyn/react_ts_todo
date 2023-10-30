import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { PropsSidebarForm } from "../types/types";

const AddCategorieModal: React.FC<PropsSidebarForm> = ({
  error,
  setShowForm,
  color,
  handleCancel,
  setColor,
  setTitle,
  title,
  addNewCategory,
}) => {
  const { t } = useTranslation();

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setShowForm(false);
      handleCancel();
    }
  };
  const styleColorInputText = {
    color: error && !color ? "red" : "",
    opacity: 0.7,
  };
  return (
    <S.ModalOverlay onClick={handleCloseModal}>
      <S.FormModal>
        <S.CategoryForm action="" onSubmit={addNewCategory}>
          <S.TitleInput
            value={title}
            type="text"
            maxLength={10}
            error={error}
            placeholder={error && !title ? error : t("addCtgMdlPlch")}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.ColorInputWrapper>
            <S.ColorInput
              value={color}
              type="color"
              error={error}
              onChange={(e) => setColor(e.target.value)}
            />
            <span style={styleColorInputText}>
              {color ? color : t("inptClr")}
            </span>
          </S.ColorInputWrapper>
          <S.BtnWrapper>
            <S.FormBtn type="submit">{t("addCtgModal")}</S.FormBtn>
          </S.BtnWrapper>
        </S.CategoryForm>
      </S.FormModal>
    </S.ModalOverlay>
  );
};
export default AddCategorieModal;
