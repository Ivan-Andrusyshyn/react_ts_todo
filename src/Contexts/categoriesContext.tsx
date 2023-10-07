import React, { createContext, useState, ReactNode, useEffect } from "react";
import {
  CategorieProps,
  CategorieContextType,
} from "./typesContext/categoriesType";

interface ChildrenProps {
  children: React.ReactNode;
}

export const CategoriesContext = createContext<CategorieContextType | null>(
  null
);

export const CategoriesContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [categList, setCategList] = useState<CategorieProps[]>(() => {
    const savedCategories = localStorage.getItem("categories");
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  console.log(categList);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categList));
  }, [categList]);
  const addCategory = (newCategory: CategorieProps) => {
    setCategList([...categList, newCategory]);
  };
  return (
    <CategoriesContext.Provider value={{ categList, addCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};
