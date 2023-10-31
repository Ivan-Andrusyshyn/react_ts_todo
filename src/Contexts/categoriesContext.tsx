import React, { createContext, useState, useEffect } from "react";
import {
  CategorieProps,
  CategorieContextType,
} from "./typesContext/categoriesType";
import { v4 as uuidv4 } from "uuid";
import ChildrenProps from "./typesContext/typeChildren";

export const CategoriesContext = createContext<CategorieContextType | null>(
  null
);

export const CategoriesContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const category = [
    {
      id: uuidv4(),
      name: "testCategory",
      color: "#BDBDBD",
    },
  ];
  const [categList, setCategList] = useState<CategorieProps[]>(() => {
    const savedCategories = localStorage.getItem("categories");
    return savedCategories ? JSON.parse(savedCategories) : [...category];
  });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categList));
  }, [categList]);

  const addCategory = (newCategory: CategorieProps) => {
    const isCategoryExists = categList.some(
      (existingCategory) => existingCategory.name === newCategory.name
    );
    if (isCategoryExists) {
      console.log("You can not create category with this name !");
      return;
    } else {
      setCategList([...categList, newCategory]);
    }
  };

  const editCategory = (
    categoryId: string,
    updatedCategory: CategorieProps
  ) => {
    const updatedCategories = categList.map((category) =>
      category.id === categoryId ? updatedCategory : category
    );
    setCategList(updatedCategories);
  };

  const deleteCategory = (categoryId: string) => {
    const updatedCategories = categList.filter(
      (category) => category.id !== categoryId
    );
    setCategList(updatedCategories);
  };
  return (
    <CategoriesContext.Provider
      value={{ categList, addCategory, deleteCategory, editCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
