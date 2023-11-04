import { ReactNode } from "react";
import { AddContext } from "../Contexts/addContext";
import AuthContext from "../Contexts/authContext";
import { CategoriesContext } from "../Contexts/categoriesContext";
import { DeleteContext } from "../Contexts/delete_edit_Context";
import { TaskListContext } from "../Contexts/taskListContext";
import {
  AddItems,
  CategorieContext,
  DeleteContextMock,
  ListContext,
  handleLogin,
} from "./mockValue";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18nForTest";

interface contextPropTypes {
  children: ReactNode;
}
const ContextMockWrapper: React.FC<contextPropTypes> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <TaskListContext.Provider value={ListContext}>
        <CategoriesContext.Provider value={CategorieContext}>
          <DeleteContext.Provider value={DeleteContextMock}>
            <AuthContext.Provider value={handleLogin}>
              <AddContext.Provider value={AddItems}>
                {children}
              </AddContext.Provider>
            </AuthContext.Provider>
          </DeleteContext.Provider>
        </CategoriesContext.Provider>
      </TaskListContext.Provider>
    </I18nextProvider>
  );
};
export default ContextMockWrapper;
