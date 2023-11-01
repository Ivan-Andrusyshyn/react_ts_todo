import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import { TaskListType } from "../../../../Contexts/typesContext/taskType";
import { CategorieContextType } from "../../../../Contexts/typesContext/categoriesType";
import { CategoriesContext } from "../../../../Contexts/categoriesContext";
import ModalToggle from "../../../Modals/Sidebar-modals/ModalToggle";
import { CategorieItemProps } from "../../types/types";

const CategorieItem: React.FC<CategorieItemProps> = ({
  name,
  color,
  categoryId,
  onNavigate,
}) => {
  const params = useParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { categList, deleteCategory, editCategory } = useContext(
    CategoriesContext
  ) as CategorieContextType;
  const { deleteCategoryTasks } = useContext(TaskListContext) as TaskListType;

  const [editedName, setEditedName] = useState<string>("");
  const [editedColor, setEditedColor] = useState<string>("#fff");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalOpenForm, setModalOpenForm] = useState<boolean>(false);

  useEffect(() => {
    setEditedColor(color);
    setEditedName(name);
  }, [name, color]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    deleteCategory(categoryId);
    const remainingCategories = categList.filter(
      (cat) => cat.id !== categoryId
    );
    deleteCategoryTasks(name);
    const nameCategorie =
      remainingCategories[remainingCategories.length - 1]?.name;
    if (nameCategorie) {
      onNavigate("/categorie/" + nameCategorie);
    } else {
      onNavigate("/categorie/");
    }
  };
  const showFormForEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setModalOpenForm(true);
  };

  const handleEdit = (editedName: string, editedColor: string) => {
    const editedCategorie = {
      id: uuidv4(),
      name: editedName,
      color: editedColor,
    };
    editCategory(categoryId, editedCategorie);
    onNavigate("/categorie/" + editedName);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
      setEditedName(name);
      setEditedColor(color);
    }
  };
  const backdropCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      setModalOpenForm(!modalOpenForm);
      setIsOpen(false);
    }
  };
  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target) setIsOpen(!isOpen);
  };
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
