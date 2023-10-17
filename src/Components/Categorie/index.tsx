import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import { v4 as uuidv4 } from "uuid";
import CategoryEditForm from "./CategoryEditForm";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/typesContext/taskType";
interface CategorieItemProps {
  name: string;
  color: string;
  categoryId: string;
}

const CategorieItem: React.FC<CategorieItemProps> = ({
  name,
  color,
  categoryId,
}) => {
  const params = useParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigation = useNavigate();
  const { categList, deleteCategory, editCategory } = useContext(
    CategoriesContext
  ) as CategorieContextType;
  const { deleteCategoryTasks, taskList } = useContext(
    TaskListContext
  ) as TaskListType;
  console.log(taskList);

  const [editedName, setEditedName] = useState<string>("");
  const [editedColor, setEditedColor] = useState<string>("#fff");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalOpenForm, setModalOpenForm] = useState<boolean>(false);
  const { t } = useTranslation();

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
      navigation("/categorie/" + nameCategorie);
    } else {
      navigation("/categorie/");
    }
    e.preventDefault();
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
    navigation("/categorie/" + editedName);
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
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Link
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
            <div onClick={handleOpenModal} style={{ marginLeft: 40 }}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#828ea6" }}
              />
            </div>
          </S.ItemWrapper>
        </S.Categorie>
      </Link>
      {isOpen && (
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
      )}
    </>
  );
};

export default CategorieItem;
