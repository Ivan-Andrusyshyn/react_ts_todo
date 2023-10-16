import React from "react";
import { DeleteContextProvider } from "./Contexts/delete_edit_Context";
import { TaskListContextProvider } from "./Contexts/taskListContext";
import { ChildrenProps } from "./Contexts/delete_edit_Context";
import { CategoriesContextProvider } from "./Contexts/categoriesContext";
import { AddContextProvider } from "./Contexts/addContext";
import { AuthProvider } from "./Contexts/authContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
const ContextProviders: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <TaskListContextProvider>
        <DeleteContextProvider>
          <AddContextProvider>
            <CategoriesContextProvider>
              <AuthProvider>{children}</AuthProvider>
            </CategoriesContextProvider>
          </AddContextProvider>
        </DeleteContextProvider>
      </TaskListContextProvider>
    </I18nextProvider>
  );
};

export default ContextProviders;
