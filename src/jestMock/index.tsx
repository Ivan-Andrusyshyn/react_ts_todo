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

interface contextPropTypes {
  children: ReactNode;
}

const ContextMockWrapper: React.FC<contextPropTypes> = ({ children }) => {
  return (
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
  );
};
export default ContextMockWrapper;
