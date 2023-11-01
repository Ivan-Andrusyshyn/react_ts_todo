import { render, screen, fireEvent } from "@testing-library/react";
import CategorieMain from ".";
import { DeleteContext } from "../../../Contexts/delete_edit_Context";
import { TaskListContext } from "../../../Contexts/taskListContext";
import { AddContext } from "../../../Contexts/addContext";
import { CategoriesContext } from "../../../Contexts/categoriesContext";
import {
  AddItems,
  CategorieContext,
  DeleteContextMock,
  TaskListContextMock,
  mockCategoryListProps,
} from "../../../jestMock/mockValue";

describe("CategorieMain Component", () => {
  let CatagoryListMock: JSX.Element;
  beforeEach(() => {
    CatagoryListMock = (
      <TaskListContext.Provider value={TaskListContextMock}>
        <DeleteContext.Provider value={DeleteContextMock}>
          <AddContext.Provider value={AddItems}>
            <CategoriesContext.Provider value={CategorieContext}>
              <CategorieMain {...mockCategoryListProps} />
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
    expect(mockCategoryListProps.handleDone).toHaveBeenCalledTimes(1);
  });

  test("should call handleAll when 'All' filter tag is clicked", () => {
    render(CatagoryListMock);
    const allFilterTag = screen.getByTestId("filterBtnAllTasks");
    fireEvent.click(allFilterTag);
    expect(mockCategoryListProps.handleAll).toHaveBeenCalledTimes(1);
  });

  test("should call handleNotDone when 'Not Done' filter tag is clicked", () => {
    render(CatagoryListMock);
    const notDoneFilterTag = screen.getByTestId("filterBtnNotDoneTasks");
    fireEvent.click(notDoneFilterTag);
    expect(mockCategoryListProps.handleNotDone).toHaveBeenCalledTimes(1);
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
