import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import { SidebarItemProps } from "../types/types";
import CategorieItem from "./CategorieItem";
import AddCategorieModal from "../../Modals/Sidebar-modals/AddCategorieModal";
import { Arrow } from "../..";
import { CategorieContextType } from "../../../Contexts/typesContext/categoriesType";
import { CategoriesContext } from "../../../Contexts/categoriesContext";
import useInput from "../../../hooks/useInput";

const ExpandSidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => {
  const [active, setActive] = useState(false);
  const { categList, addCategory } = useContext(
    CategoriesContext
  ) as CategorieContextType;

  const [showForm, setShowForm] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const title = useInput("");
  const color = useInput("");

  function handleActivate() {
    setActive(!active);
  }
  useEffect(() => {
    const newTimeOut = setTimeout(() => {
      setError("");
    }, 2000);
    return () => {
      clearTimeout(newTimeOut);
    };
  }, [error]);
  const addNewCategory = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.value.trim()) {
      setError("Please enter category");
      return;
    }

    if (!color.value.trim()) {
      setError("Please select a category color");
      return;
    }

    if (categList.length === 0) {
      navigate("/categorie/" + title);
    }
    const category = {
      id: uuidv4(),
      name: title.value,
      color: color.value,
    };

    const isCategoryExists = categList.some(
      (existingCategory) => existingCategory.name === category.name
    );
    if (isCategoryExists) {
      setError(`Category with name ${title} exist !`);
      return;
    }
    addCategory(category);
    title.clear();
    setShowForm(false);
    color.clear();
  };

  const handleCancel = () => {
    title.clear();
    setShowForm(false);
    color.clear();
  };

  return (
    <S.OuterContainer isActive={active}>
      <S.Container isActive={active} onClick={handleActivate}>
        <S.Icon src={icon} />
        <S.Name>{name}</S.Name>
        <S.Arrow isActive={active} src={Arrow} />
      </S.Container>
      <S.CatArea isActive={active}>
        {categList.map((cat) => (
          <CategorieItem key={cat.id} {...cat} onNavigate={navigate} />
        ))}
        {showForm && (
          <AddCategorieModal
            error={error}
            setShowForm={setShowForm}
            color={color.value}
            handleCancel={handleCancel}
            colorChange={color.handleChange}
            titleChange={title.handleChange}
            title={title.value}
            addNewCategory={addNewCategory}
          />
        )}
        <AddButton setShowForm={setShowForm} />
      </S.CatArea>
    </S.OuterContainer>
  );
};

export default ExpandSidebarItem;
