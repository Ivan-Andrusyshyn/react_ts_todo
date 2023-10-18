import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import Arrow from "../../Img/arrow.svg";
import CategorieItem from "../Categorie";
import Add from "../../Img/add.svg";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import SidebarItemForm from "./SidebarItemForm";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
  name: string;
  icon: string;
}

const ExpandSidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => {
  const [active, setActive] = useState(false);
  const { categList, addCategory } = useContext(
    CategoriesContext
  ) as CategorieContextType;
  const { t } = useTranslation();

  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
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

    if (!title) {
      setError("Please enter category");
      return;
    }
    if (!color) {
      setError("Please select a category color");
      return;
    }

    if (categList.length === 0) {
      navigate("/categorie/" + title);
    }
    const category = {
      id: uuidv4(),
      name: title,
      color: color,
    };
    const isCategoryExists = categList.some(
      (existingCategory) => existingCategory.name === category.name
    );
    if (isCategoryExists) {
      setError(`Category with name ${title} exist !`);
      return;
    }
    addCategory(category);
    setTitle("");
    setColor("");
    setShowForm(false);
  };

  const handleCancel = () => {
    setTitle("");
    setShowForm(false);
    setColor("");
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
          <CategorieItem
            key={cat.id}
            categoryId={cat.id}
            name={cat.name}
            color={cat.color}
            onNavigate={navigate}
          />
        ))}
        {showForm && (
          <SidebarItemForm
            error={error}
            setShowForm={setShowForm}
            color={color}
            handleCancel={handleCancel}
            setColor={setColor}
            setTitle={setTitle}
            title={title}
            addNewCategory={addNewCategory}
          />
        )}
        <S.AddArea onClick={() => setShowForm(true)}>
          <S.AddIcon src={Add} />
          <S.AddText>{t("sbBtnAdd")}</S.AddText>
        </S.AddArea>
      </S.CatArea>
    </S.OuterContainer>
  );
};

export default ExpandSidebarItem;
