import { t } from "i18next";
import * as S from "./styles";
import React from "react";

import CategoryEditForm from "./CategorieEditForm";
import { ModalProp } from "./types/types";
const ModalToggle: React.FC<ModalProp> = ({
  modalOpenForm,
  editedName,
  editedColor,
  handleEdit,
  handleDelete,
  handleCancel,
  backdropCloseModal,
  showFormForEdit,
  setModalOpenForm,
}) => {
  return (
    <S.ModalOverlay onClick={(e) => backdropCloseModal(e)}>
      <S.ModalContent>
        {!modalOpenForm ? (
          <div>
            <S.EditModalTitle>{t("sbMdlTitle")}</S.EditModalTitle>
            <S.Button onClick={showFormForEdit}>{t("sbMdlBtnEd")}</S.Button>
            <S.Button onClick={handleDelete}>{t("sbMdlBtnDl")}</S.Button>
            <S.Button onClick={handleCancel}>{t("sbMdlBtnCanc")}</S.Button>
          </div>
        ) : (
          <CategoryEditForm
            initialName={editedName}
            initialColor={editedColor}
            onCancel={setModalOpenForm}
            onSave={handleEdit}
            openModal={modalOpenForm}
          />
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
export default ModalToggle;
