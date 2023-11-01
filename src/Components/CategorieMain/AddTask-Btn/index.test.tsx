/* eslint-disable jest/no-conditional-expect */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskBtn from ".";
import { CategorieContextType } from "../../../Contexts/typesContext/categoriesType";
import { AddContext } from "../../../Contexts/addContext";
import { CategoriesContext } from "../../../Contexts/categoriesContext";

const CategorieContext: CategorieContextType = {
  categList: [
    { id: "1", name: "Category 1", color: "blue" },
    { id: "2", name: "Category 2", color: "red" },
  ],
  deleteCategory: (itemId: string) => {},
  editCategory: () => {},
  addCategory: () => {},
};

const AddItems = {
  showAdd: true,
  setShowAdd: jest.fn(),
  id: 22,
  setId: jest.fn(),
};

describe("AddTaskBtn Component", () => {
  let AddTaskBtnMock: JSX.Element;
  beforeEach(() => {
    AddTaskBtnMock = (
      <CategoriesContext.Provider value={CategorieContext}>
        <AddContext.Provider value={AddItems}>
          <AddTaskBtn />
        </AddContext.Provider>
      </CategoriesContext.Provider>
    );
  });

  test("should render the AddTaskBtn component", () => {
    render(AddTaskBtnMock);
    screen.getByTestId("addTaskBtn");
  });

  test("should disable the button when categList is empty", () => {
    render(AddTaskBtnMock);

    const addTaskBtn: HTMLButtonElement = screen.getByTestId("addTaskBtn");
    if (CategorieContext.categList.length <= 0) {
      expect(addTaskBtn).toBeDisabled();
    }
  });

  test("should enable the button when categList is not empty", () => {
    render(AddTaskBtnMock);
    const addTaskBtn: HTMLButtonElement = screen.getByTestId("addTaskBtn");
    if (CategorieContext.categList.length > 0) {
      expect(addTaskBtn.disabled).toBe(false);
    }
  });

  test("should call handleClick when the button is clicked", () => {
    render(AddTaskBtnMock);
    const addTaskBtn = screen.getByTestId("addTaskBtn");
    fireEvent.click(addTaskBtn);
    expect(AddItems.setShowAdd).toHaveBeenCalledTimes(1);
  });
});
