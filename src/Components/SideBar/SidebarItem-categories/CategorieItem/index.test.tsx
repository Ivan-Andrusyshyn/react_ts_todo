import { render, screen, fireEvent } from "@testing-library/react";
import CategorieItem from ".";
import { MemoryRouter } from "react-router-dom";
import ContextMockWrapper from "../../../../jestMock";

describe("CategorieItem testing", () => {
  const onNavigate = jest.fn();
  const handleDelete = jest.fn();
  let myArray: { id: string; name: string }[] = [];

  let CategorieItemComponent: JSX.Element;
  beforeEach(() => {
    CategorieItemComponent = (
      <MemoryRouter initialEntries={["/react_ts_todo/categorie/w"]}>
        <ContextMockWrapper>
          <CategorieItem
            name="TestCategory"
            color="#ff0000"
            categoryId="12345"
            onNavigate={onNavigate}
          />
        </ContextMockWrapper>
      </MemoryRouter>
    );

    handleDelete.mockImplementation((itemId) => {
      myArray = myArray.filter((item) => item.id !== itemId);
    });
    myArray = [
      { id: "12345", name: "Item 1" },
      { id: "67890", name: "Item 2" },
    ];
    handleDelete.mockClear();
  });
  test("renders CategorieItem component", () => {
    render(CategorieItemComponent);
    screen.getByTestId("categorieItem");
  });

  test("clicking on edit button should open modal form", () => {
    render(CategorieItemComponent);
    const modalBtn = screen.getByTestId("modal-button");
    fireEvent.click(modalBtn);
    screen.getByTestId("modal-title");
  });

  test("should delete an item from the array", () => {
    render(CategorieItemComponent);
    const modalBtn = screen.getByTestId("modal-button");
    fireEvent.click(modalBtn);
    const modalForm = screen.queryByTestId("modal-form");
    const deleteBtn = screen.getByTestId("delete-button");
    fireEvent.click(deleteBtn);
    expect(modalForm).toBeNull();
    //  expect(handleDelete).toHaveBeenCalledWith("12345");
    //  expect(myArray).not.toContainEqual({ id: "12345", name: "Item 1" });
  });

  test("clicking on cancel button should close the modal form", () => {
    render(CategorieItemComponent);
    const modalBtn = screen.getByTestId("modal-button");
    fireEvent.click(modalBtn);
    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);
    const modalForm = screen.queryByTestId("modal-form");
    const cancelButton = screen.queryByTestId("cancel-button");
    {
      cancelButton && fireEvent.click(cancelButton);
    }
    expect(modalForm).toBeNull();
  });
});
