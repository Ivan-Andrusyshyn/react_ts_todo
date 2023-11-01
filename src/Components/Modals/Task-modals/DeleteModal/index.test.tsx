import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DeleteContext } from "../../../../Contexts/delete_edit_Context";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import DeleteModal from ".";
import { DeleteType } from "../../../../Contexts/typesContext/delete_edit_Type";
import { TaskListType } from "../../../../Contexts/typesContext/taskType";

const DeleteContextMock: DeleteType = {
  showDelete: true,
  showEdit: false,
  setShowDelete: jest.fn(),
  id: 42,
  setShowEdit: jest.fn(),
  setId: jest.fn(),
};

const TaskListContextMock: TaskListType = {
  taskList: [],
  doneTasks: [],
  notDoneTasks: [],
  deleteCategoryTasks: jest.fn(),
  editTask: jest.fn(),
  addTask: jest.fn(),
  checkTask: jest.fn(),
  deleteTask: jest.fn(),
};

describe("DeleteModal", () => {
  let deleteModalComponent: JSX.Element;

  beforeEach(() => {
    deleteModalComponent = (
      <DeleteContext.Provider value={DeleteContextMock}>
        <TaskListContext.Provider value={TaskListContextMock}>
          <DeleteModal />
        </TaskListContext.Provider>
      </DeleteContext.Provider>
    );
  });

  test("should render DeleteModal", () => {
    render(deleteModalComponent);
    screen.getByTestId("deleteModal_title");

    screen.getByTestId("delete_btn");

    screen.getByTestId("cancel_btn");
  });

  test("should call deleteTask when confirm button is clicked", () => {
    render(deleteModalComponent);
    const confirmButton = screen.getByTestId("delete_btn");

    fireEvent.click(confirmButton);
    expect(TaskListContextMock.deleteTask).toHaveBeenCalledWith(42);
    expect(DeleteContextMock.setId).toHaveBeenCalledWith(0);
    expect(DeleteContextMock.setShowDelete).toHaveBeenCalledWith(false);
  });

  test("should call setShowDelete with false when cancel button is clicked", () => {
    render(deleteModalComponent);
    const cancelButton = screen.getByTestId("cancel_btn");
    fireEvent.click(cancelButton);
    expect(DeleteContextMock.setShowDelete).toHaveBeenCalledWith(false);
  });
});
