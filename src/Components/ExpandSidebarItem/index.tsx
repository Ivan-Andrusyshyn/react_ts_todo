import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import Arrow from "../../Img/arrow.svg";
import CategorieItem from "../Categorie";
import Add from "../../Img/add.svg";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import { nanoid } from "nanoid";

interface SidebarItemProps {
  name: string;
  icon: string;
}

const ExpandSidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => {
  const [active, setActive] = useState(false);
  const { categList, addCategory } = useContext(
    CategoriesContext
  ) as CategorieContextType;
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
    if (!title || !color) {
      setError("Please enter category");
      return;
    }
    const category = {
      id: nanoid(),
      name: title,
      color: color,
    };
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
          <CategorieItem key={cat.id} name={cat.name} color={cat.color} />
        ))}
        {showForm ? (
          <S.FormModal>
            <S.CategoryForm action="" onSubmit={addNewCategory}>
              <S.ColorInput
                value={title}
                style={{ border: error ? "1px solid red" : "" }}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              {error && <S.ErrorText>{error}</S.ErrorText>}
              <S.ColorInputWrapper>
                <S.TitleInput
                  value={color}
                  type="color"
                  style={{ border: error ? "1px solid red" : "" }}
                  onChange={(e) => setColor(e.target.value)}
                />
                <span>{color}</span>
              </S.ColorInputWrapper>
              <S.BtnWrapper>
                <S.FormBtn type="submit">Add</S.FormBtn>
                <S.FormBtn onClick={handleCancel}>Cancel</S.FormBtn>
              </S.BtnWrapper>
            </S.CategoryForm>
          </S.FormModal>
        ) : (
          <S.AddArea onClick={() => setShowForm(true)}>
            <S.AddIcon src={Add} />
            <S.AddText>Add new</S.AddText>
          </S.AddArea>
        )}
      </S.CatArea>
    </S.OuterContainer>
  );
};

export default ExpandSidebarItem;
