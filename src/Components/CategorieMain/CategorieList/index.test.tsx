import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategorieMain from ".";
import { DeleteContext } from "../../../Contexts/delete_edit_Context";
import { DeleteType } from "../../../Contexts/typesContext/delete_edit_Type";
import { TaskListContext } from "../../../Contexts/taskListContext";
import { TaskListType } from "../../../Contexts/typesContext/taskType";
import { AddContext } from "../../../Contexts/addContext";
import { CategoriesContext } from "../../../Contexts/categoriesContext";
import { CategorieContextType } from "../../../Contexts/typesContext/categoriesType";
const DeleteContextMock: DeleteType = {
  showDelete: true,
  showEdit: false,
  setShowDelete: jest.fn(),
  id: 42,
  setShowEdit: jest.fn(),
  setId: jest.fn(),
};
const mockProps = {
  name: "Category Name",
  handleDone: jest.fn(),
  handleAll: jest.fn(),
  handleNotDone: jest.fn(),
  allActive: true,
  doneActive: false,
  notDoneActive: false,
  listOfTasks: [
    {
      id: "1",
      title: "Task 1",
      categorie: "Category 1",
      color: "blue",
      done: false,
      date: "2023-10-30",
    },
    {
      id: "2",
      title: "Task 2",
      categorie: "Category 2",
      color: "red",
      done: true,
      date: "2023-10-31",
    },
  ],
};
const CategorieContext: CategorieContextType = {
  categList: [
    { id: "1", name: "Category 1", color: "blue" },
    { id: "2", name: "Category 2", color: "red" },
  ],
  deleteCategory: (itemId: string) => {},
  editCategory: () => {},
  addCategory: () => {},
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
const AddItems = {
  showAdd: true,
  setShowAdd: jest.fn(),
  id: 22,
  setId: jest.fn(),
};
describe("CategorieMain Component", () => {
  let CatagoryListMock: JSX.Element;
  beforeEach(() => {
    CatagoryListMock = (
      <TaskListContext.Provider value={TaskListContextMock}>
        <DeleteContext.Provider value={DeleteContextMock}>
          <AddContext.Provider value={AddItems}>
            <CategoriesContext.Provider value={CategorieContext}>
              <CategorieMain {...mockProps} />
            </CategoriesContext.Provider>
          </AddContext.Provider>
        </DeleteContext.Provider>
      </TaskListContext.Provider>
    );
  });
  test("should render the CategorieMain component", () => {
    render(CatagoryListMock);
    screen.getByTestId("categoryContainer");
    screen.getByTestId("filterBtnDoneTasks");
  });

  test("should call handleDone when title is clicked", () => {
    render(CatagoryListMock);
    const title = screen.getByTestId("filterBtnDoneTasks");
    fireEvent.click(title);
    expect(mockProps.handleDone).toHaveBeenCalledTimes(1);
  });

  test("should call handleAll when 'All' filter tag is clicked", () => {
    render(CatagoryListMock);
    const allFilterTag = screen.getByTestId("filterBtnAllTasks");
    fireEvent.click(allFilterTag);
    expect(mockProps.handleAll).toHaveBeenCalledTimes(1);
  });

  test("should call handleNotDone when 'Not Done' filter tag is clicked", () => {
    render(CatagoryListMock);
    const notDoneFilterTag = screen.getByTestId("filterBtnNotDoneTasks");
    fireEvent.click(notDoneFilterTag);
    expect(mockProps.handleNotDone).toHaveBeenCalledTimes(1);
  });

  test("should render task items", () => {
    render(CatagoryListMock);
    const task1 = screen.getByText("Task 1");
    screen.getByText("Task 2");
  });

  test("should call AddTaskBtn when 'Add Task' button is clicked", () => {
    render(CatagoryListMock);
    const addTaskBtn = screen.getByTestId("addTaskBtn");
    fireEvent.click(addTaskBtn);
  });
});
