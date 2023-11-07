import { render, screen, fireEvent } from "@testing-library/react";
import AddCategorieModal from ".";
import { mockPropsAddCategorieModal } from "../../../../jestMock/mockValue";

describe("AddCategorieModal Component", () => {
  test("should render the AddCategorieModal component", () => {
    render(<AddCategorieModal {...mockPropsAddCategorieModal} />);
    screen.getByTestId("add-categorie-modal");
  });

  test("should close the modal when clicking outside the form", () => {
    render(<AddCategorieModal {...mockPropsAddCategorieModal} />);
    const modalOverlay = screen.getByTestId("modal-overlay");
    fireEvent.click(modalOverlay);
    expect(mockPropsAddCategorieModal.setShowForm).toHaveBeenCalled();
    expect(mockPropsAddCategorieModal.handleCancel).toHaveBeenCalled();
  });

  test("should handle the category title input change", () => {
    render(<AddCategorieModal {...mockPropsAddCategorieModal} />);
    const titleInput: HTMLInputElement = screen.getByTestId("title-input");
    const colorInput = screen.getByTestId("color-input");
    const btnForm = screen.getByTestId("category-form");
    fireEvent.change(colorInput, { target: { value: "#FF5733" } });
    fireEvent.change(titleInput, { target: { value: "New Category" } });
    fireEvent.submit(btnForm);
    expect(mockPropsAddCategorieModal.setColor).toHaveBeenCalledWith("#FF5733");
    expect(mockPropsAddCategorieModal.titleChange).toHaveBeenCalledWith(
      "New Category"
    );
  });

  test("should submit the form when the 'Add Category' button is clicked", () => {
    render(<AddCategorieModal {...mockPropsAddCategorieModal} />);
    const btnForm = screen.getByTestId("category-form");
    fireEvent.submit(btnForm);
    expect(mockPropsAddCategorieModal.addNewCategory).toHaveBeenCalled();
  });
});
