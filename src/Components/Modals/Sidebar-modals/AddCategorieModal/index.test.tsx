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
    const titleInput = screen.getByTestId("title-input");
    fireEvent.change(titleInput, { target: { value: "New Category" } });
    expect(mockPropsAddCategorieModal.setTitle).toHaveBeenCalledWith(
      "New Category"
    );
  });
  test("should handle the category color input change", () => {
    render(<AddCategorieModal {...mockPropsAddCategorieModal} />);
    const colorInput = screen.getByTestId("color-input");
    fireEvent.change(colorInput, { target: { value: "#FF5733" } });
    expect(mockPropsAddCategorieModal.setColor).toHaveBeenCalledWith(
      expect.stringMatching(/^#FF5733$/i)
    );
  });

  test("should submit the form when the 'Add Category' button is clicked", () => {
    render(<AddCategorieModal {...mockPropsAddCategorieModal} />);
    const form = screen.getByTestId("category-form");
    fireEvent.submit(form);
    expect(mockPropsAddCategorieModal.addNewCategory).toHaveBeenCalled();
  });
});
