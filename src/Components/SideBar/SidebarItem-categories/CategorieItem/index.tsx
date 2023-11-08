import React from "react";
import * as S from "./styles";
import { Link, useParams } from "react-router-dom";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalToggle from "../../../Modals/Sidebar-modals/ModalToggle";
import { CategorieItemProps } from "../../types/types";
import useCategorieItemLogic from "./CategorieItemLogic";

const CategorieItem: React.FC<CategorieItemProps> = ({
  name,
  color,
  id,
  onNavigate,
}) => {
  const params = useParams();

  const {
    isChecked,
    editedName,
    editedColor,
    isOpen,
    modalOpenForm,
    handleDelete,
    showFormForEdit,
    handleEdit,
    handleCancel,
    backdropCloseModal,
    handleOpenModal,
    setIsChecked,
    setModalOpenForm,
  } = useCategorieItemLogic({ name, color, id, onNavigate });

  return (
    <>
      <Link
        data-testid="categorieItem"
        to={"/categorie/" + name}
        style={{
          textDecoration: "none",
        }}
      >
        <S.Categorie>
          <S.CustomRadioInput
            type="radio"
            id={name}
            onChange={() => setIsChecked(name === params.name)}
            checked={isChecked}
            color={color}
          />
          <div style={{ width: 20 }}>
            <S.LabelForm htmlFor={name} color={color}>
              {params.name === name && <S.Selected color={color} />}
            </S.LabelForm>
          </div>

          <S.ItemWrapper>
            <S.ListName>{name}</S.ListName>
            <div
              onClick={handleOpenModal}
              style={{ marginLeft: 40 }}
              data-testid="modal-button"
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#828ea6" }}
              />
            </div>
          </S.ItemWrapper>
        </S.Categorie>
      </Link>

      {isOpen && (
        <ModalToggle
          data-testid="modal-form"
          modalOpenForm={modalOpenForm}
          editedName={editedName}
          editedColor={editedColor}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCancel={handleCancel}
          backdropCloseModal={backdropCloseModal}
          showFormForEdit={showFormForEdit}
          setModalOpenForm={setModalOpenForm}
        />
      )}
    </>
  );
};

export default CategorieItem;
