import { t } from "i18next";
import * as S from "../CategorieEditForm/styles";
import React from "react";

import CategoryEditForm from "../CategorieEditForm";
import { ModalProp } from "../types/types";
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
            <S.EditModalTitle data-testid="modal-title">
              {t("sbMdlTitle")}
            </S.EditModalTitle>
            <S.Button onClick={showFormForEdit} data-testid="edit-button">
              {t("sbMdlBtnEd")}
            </S.Button>
            <S.Button onClick={handleDelete} data-testid="delete-button">
              {t("sbMdlBtnDl")}
            </S.Button>
            <S.Button onClick={handleCancel} data-testid="cancel-button">
              {t("sbMdlBtnCanc")}
            </S.Button>
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
