import React, { useState } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { CategoryEditFormProps } from "../types/types";

const CategoryEditForm: React.FC<CategoryEditFormProps> = ({
  initialName,
  initialColor,
  onSave,
}) => {
  const [editedName, setEditedName] = useState(initialName);
  const [editedColor, setEditedColor] = useState(initialColor);
  const { t } = useTranslation();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedName, editedColor);
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
          value={editedName}
          type="text"
          maxLength={10}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <S.ColorInputWrapper>
          <S.ColorInput
            data-testid="color-input"
            value={editedColor}
            type="color"
            onChange={(e) => setEditedColor(e.target.value)}
          />
          <span>{editedColor ? editedColor : t("inptClr")}</span>
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
