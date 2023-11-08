import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskListType } from "../../../../Contexts/typesContext/taskType";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import { CategorieContextType } from "../../../../Contexts/typesContext/categoriesType";
import { CategoriesContext } from "../../../../Contexts/categoriesContext";
interface CategorieItemsLogicProps {
  name: string;
  color: string;
  id: string;
  onNavigate: (path: string) => void;
}
export const CategorieItemHook = ({
  name,
  color,
  id,
  onNavigate,
}: CategorieItemsLogicProps) => {
  const { categList, deleteCategory, editCategory } = useContext(
    CategoriesContext
  ) as CategorieContextType;
  const { deleteCategoryTasks } = useContext(TaskListContext) as TaskListType;
  const [isChecked, setIsChecked] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedColor, setEditedColor] = useState("#fff");
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpenForm, setModalOpenForm] = useState(false);

  useEffect(() => {
    setEditedColor(color);
    setEditedName(name);
  }, [name, color]);

  const handleDelete = () => {
    deleteCategory(id);
    const remainingCategories = categList.filter((cat) => cat.id !== id);
    deleteCategoryTasks(name);
    const nameCategorie =
      remainingCategories[remainingCategories.length - 1]?.name;
    if (nameCategorie) {
      onNavigate("/categorie/" + nameCategorie);
    } else {
      onNavigate("/categorie/");
    }
  };

  const showFormForEdit = () => {
    setModalOpenForm(true);
  };

  const handleEdit = (editedName: string, editedColor: string) => {
    const editedCategorie = {
      id: uuidv4(),
      name: editedName,
      color: editedColor,
    };
    editCategory(id, editedCategorie);
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

  return {
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
  };
};
export default CategorieItemHook;
