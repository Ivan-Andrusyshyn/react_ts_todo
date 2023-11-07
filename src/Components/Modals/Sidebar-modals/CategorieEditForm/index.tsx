import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { CategoryEditFormProps } from "../types/types";
import useInput from "../../../../hooks/useInput";

const CategoryEditForm: React.FC<CategoryEditFormProps> = ({
  initialName,
  initialColor,
  onSave,
}) => {
  const editedName = useInput(initialName);
  const editedColor = useInput(initialColor);
  const { t } = useTranslation();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedName.value, editedColor.value);
  };

  return (
    <>
      <S.CategoryForm
        action=""
        onSubmit={handleSave}
        data-testid="category-edit-form"
      >
        <S.TitleInput
          data-testid="title-input"
          value={editedName.value}
          type="text"
          maxLength={10}
          onChange={editedName.handleChange}
        />
        <S.ColorInputWrapper>
          <S.ColorInput
            data-testid="color-input"
            value={editedColor.value}
            type="color"
            onChange={editedColor.handleChange}
          />
          <span>{editedColor.value ? editedColor.value : t("inptClr")}</span>
        </S.ColorInputWrapper>
        <S.BtnWrapper>
          <S.FormBtn type="submit" data-testid="addBtn">
            {t("sbMdlBtnEd")}
          </S.FormBtn>
        </S.BtnWrapper>
      </S.CategoryForm>
    </>
  );
};

export default CategoryEditForm;
