import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import { CategorieContextType } from "../../../../Contexts/typesContext/categoriesType";
import EditModal from ".";
import { DeleteType } from "../../../../Contexts/typesContext/delete_edit_Type";
import { DeleteContext } from "../../../../Contexts/delete_edit_Context";

const TaskListContextMock = {
  taskList: [],
  doneTasks: [],
  notDoneTasks: [],
  deleteCategoryTasks: jest.fn(),
  editTask: jest.fn(),
  addTask: jest.fn(),
  checkTask: jest.fn(),
  deleteTask: jest.fn(),
};
const DeleteContextMock: DeleteType = {
  showDelete: true,
  showEdit: false,
  setShowDelete: jest.fn(),
  id: 42,
  setShowEdit: jest.fn(),
  setId: jest.fn(),
};

describe("AddModal all", () => {
  let editModalComponent: JSX.Element;
  beforeEach(() => {
    editModalComponent = (
      <DeleteContext.Provider value={DeleteContextMock}>
        <TaskListContext.Provider value={TaskListContextMock}>
          <EditModal />
        </TaskListContext.Provider>
      </DeleteContext.Provider>
    );
  });
  test("should render DeleteModal", () => {
    render(editModalComponent);
    screen.getByTestId("edit_btn");
    screen.getByTestId("cancel_btn");
  });
});
