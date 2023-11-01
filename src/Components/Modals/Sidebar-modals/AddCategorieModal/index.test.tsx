import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddCategorieModal from ".";

describe("AddCategorieModal Component", () => {
  const mockProps = {
    error: "",
    setShowForm: jest.fn(),
    color: "",
    handleCancel: jest.fn(),
    setColor: jest.fn(),
    setTitle: jest.fn(),
    title: "",
    addNewCategory: jest.fn(),
  };

  test("should render the AddCategorieModal component", () => {
    render(<AddCategorieModal {...mockProps} />);
    screen.getByTestId("add-categorie-modal");
  });

  test("should close the modal when clicking outside the form", () => {
    render(<AddCategorieModal {...mockProps} />);
    const modalOverlay = screen.getByTestId("modal-overlay");
    fireEvent.click(modalOverlay);
    expect(mockProps.setShowForm).toHaveBeenCalled();
    expect(mockProps.handleCancel).toHaveBeenCalled();
  });

  test("should handle the category title input change", () => {
    render(<AddCategorieModal {...mockProps} />);
    const titleInput = screen.getByTestId("title-input");
    fireEvent.change(titleInput, { target: { value: "New Category" } });
    expect(mockProps.setTitle).toHaveBeenCalledWith("New Category");
  });
  test("should handle the category color input change", () => {
    render(<AddCategorieModal {...mockProps} />);
    const colorInput = screen.getByTestId("color-input");
    fireEvent.change(colorInput, { target: { value: "#FF5733" } });
    expect(mockProps.setColor).toHaveBeenCalledWith(
      expect.stringMatching(/^#FF5733$/i)
    );
  });

  test("should submit the form when the 'Add Category' button is clicked", () => {
    render(<AddCategorieModal {...mockProps} />);
    const form = screen.getByTestId("category-form");
    fireEvent.submit(form);
    expect(mockProps.addNewCategory).toHaveBeenCalled();
  });
});
