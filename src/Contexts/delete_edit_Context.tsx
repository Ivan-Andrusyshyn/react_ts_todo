import React, { useState, createContext, ReactNode } from "react";
import { DeleteType } from "./typesContext/delete_edit_Type";

export interface ChildrenProps {
  children: ReactNode;
}

export const DeleteContext = createContext<DeleteType | null>(null);

export const DeleteContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [showDelete, setShowDelete] = useState(false);
  const [id, setId] = useState(0);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <DeleteContext.Provider
      value={{ showDelete, setShowDelete, setShowEdit, showEdit, id, setId }}
    >
      {children}
    </DeleteContext.Provider>
  );
};
