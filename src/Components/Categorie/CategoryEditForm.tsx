import React, { useState } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

interface CategoryEditFormProps {
  initialName: string;
  initialColor: string;
  onCancel: (prev: boolean) => void;
  openModal: boolean;
  onSave: (editedName: string, editedColor: string) => void;
}

const CategoryEditForm: React.FC<CategoryEditFormProps> = ({
  initialName,
  initialColor,
  onCancel,
  openModal,
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
      <S.CategoryForm action="" onSubmit={handleSave}>
        <S.TitleInput
          value={editedName}
          type="text"
          maxLength={10}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <S.ColorInputWrapper>
          <S.ColorInput
            value={editedColor}
            type="color"
            onChange={(e) => setEditedColor(e.target.value)}
          />
          <span>{editedColor ? editedColor : t("inptClr")}</span>
        </S.ColorInputWrapper>
        <S.BtnWrapper>
          <S.FormBtn type="submit">{t("sbMdlBtnEd")}</S.FormBtn>
        </S.BtnWrapper>
      </S.CategoryForm>
    </>
  );
};

export default CategoryEditForm;
