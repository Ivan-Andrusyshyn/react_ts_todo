import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddModal from ".";
import { MemoryRouter } from "react-router-dom";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import { CategoriesContext } from "../../../../Contexts/categoriesContext";
import { AddContext } from "../../../../Contexts/addContext";
import { CategorieContextType } from "../../../../Contexts/typesContext/categoriesType";
const CategorieContext: CategorieContextType = {
  categList: [
    { id: "1", name: "Category 1", color: "blue" },
    { id: "2", name: "Category 2", color: "red" },
  ],
  deleteCategory: (itemId: string) => {},
  editCategory: () => {},
  addCategory: () => {},
};

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
const AddItems = {
  showAdd: true,
  setShowAdd: jest.fn(),
  id: 22,
  setId: jest.fn(),
};

describe("AddModal all", () => {
  let addModalComponent: JSX.Element;
  const setShowAddMock = jest.fn();
  const taskName = "New Task";
  const taskCat = 0;
  const selectedDate = new Date();
  beforeEach(() => {
    addModalComponent = (
      <MemoryRouter initialEntries={["/react_ts_todo/categorie/w"]}>
        <TaskListContext.Provider value={TaskListContextMock}>
          <CategoriesContext.Provider value={CategorieContext}>
            <AddContext.Provider value={AddItems}>
              <AddModal />
            </AddContext.Provider>
          </CategoriesContext.Provider>
        </TaskListContext.Provider>
      </MemoryRouter>
    );
  });
  test("should add a new task if taskName and category are valid", () => {
    render(addModalComponent);
    const input = screen.getByTestId("input");
    const addButton = screen.getByTestId("btnAdd");
    fireEvent.change(input, { target: { value: taskName } });

    fireEvent.click(addButton);
    expect(TaskListContextMock.addTask).toHaveBeenCalledWith(
      expect.objectContaining({
        id: expect.any(Number),
        title: taskName,
        categorie: CategorieContext.categList[taskCat].name,
        color: "blue",
        done: false,
        date: expect.any(Date),
      })
    );
  });

  test("cancel modal by click", () => {
    render(addModalComponent);

    const cancelBtn = screen.getByTestId("btnCancel");

    const backdrop = screen.queryByTestId("backdropModal");
    fireEvent.click(cancelBtn);
    expect(backdrop).not.toBeNull();
  });

  test("Renders AddModal and handles input", () => {
    render(addModalComponent);
    screen.getByTestId("input");
    screen.getByTestId("btnCancel");

    const input: HTMLInputElement = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: taskName } });
    expect(input.value).toBe(taskName);
  });

  test("Handles errors", () => {
    render(addModalComponent);

    const addButton = screen.getByTestId("btnAdd");
    fireEvent.click(addButton);
    screen.getByPlaceholderText("Please enter task name.");
  });

  test("Selects a category", () => {
    render(addModalComponent);

    const select: HTMLInputElement = screen.getByTestId("input");
    fireEvent.change(select, { target: { value: "1" } });
    expect(select.value).toBe("1");
  });
});
