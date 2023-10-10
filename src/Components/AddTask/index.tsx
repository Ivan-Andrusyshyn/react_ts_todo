import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import Add from "../../Img/add.svg";
import { AddType } from "../../Contexts/typesContext/addType";
import { AddContext } from "../../Contexts/addContext";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";

const AddTask: React.FC = () => {
  const { setShowAdd } = useContext(AddContext) as AddType;
  const { categList } = useContext(CategoriesContext) as CategorieContextType;
  const [isDisable, setIsDisable] = useState(false);
  function handleClick() {
    setShowAdd(true);
  }
  useEffect(() => {
    if (categList.length === 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [categList]);
  return (
    <S.Container onClick={handleClick} disabled={isDisable}>
      <S.Icon src={Add} />
      <S.Text>{isDisable ? "First create a category" : "Add a task"}</S.Text>
    </S.Container>
  );
};

export default AddTask;
