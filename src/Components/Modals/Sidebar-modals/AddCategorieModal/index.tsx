import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { PropsSidebarForm } from "../types/types";

const AddCategorieModal: React.FC<PropsSidebarForm> = ({
  error,
  setShowForm,
  color,
  handleCancel,
  colorChange,
  titleChange,
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
    <S.ModalOverlay onClick={handleCloseModal} data-testid="modal-overlay">
      <S.FormModal>
        <S.CategoryForm
          action=""
          onSubmit={addNewCategory}
          data-testid="category-form"
        >
          <S.TitleInput
            value={title}
            type="text"
            maxLength={10}
            error={error}
            placeholder={error && !title ? error : t("addCtgMdlPlch")}
            onChange={titleChange}
            data-testid="title-input"
          />
          <S.ColorInputWrapper>
            <S.ColorInput
              value={color}
              type="color"
              error={error}
              onChange={colorChange}
              data-testid="color-input"
            />
            <span style={styleColorInputText}>
              {color ? color : t("inptClr")}
            </span>
          </S.ColorInputWrapper>
          <S.BtnWrapper>
            <S.FormBtn data-testid="add-categorie-modal" type="submit">
              {t("addCtgModal")}
            </S.FormBtn>
          </S.BtnWrapper>
        </S.CategoryForm>
      </S.FormModal>
    </S.ModalOverlay>
  );
};
export default AddCategorieModal;
