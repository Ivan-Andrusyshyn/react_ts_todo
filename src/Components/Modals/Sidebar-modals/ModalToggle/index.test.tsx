import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalToggle from ".";

describe("ModalToggle Component", () => {
  const mockProps = {
    modalOpenForm: false,
    editedName: "Category 1",
    editedColor: "#FF5733",
    handleEdit: jest.fn(),
    handleDelete: jest.fn(),
    handleCancel: jest.fn(),
    backdropCloseModal: jest.fn(),
    showFormForEdit: jest.fn(),
    setModalOpenForm: jest.fn(),
  };

  test("should render the modal content", () => {
    render(<ModalToggle {...mockProps} />);
    screen.getByTestId("modal-title");
    screen.getByTestId("edit-button");
    screen.getByTestId("delete-button");
    screen.getByTestId("cancel-button");
  });

  test("should call showFormForEdit when 'Edit' button is clicked", () => {
    render(<ModalToggle {...mockProps} />);
    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);
    expect(mockProps.showFormForEdit).toHaveBeenCalled();
  });

  test("should call handleDelete when 'Delete' button is clicked", () => {
    render(<ModalToggle {...mockProps} />);
    const deleteButton = screen.getByTestId("delete-button");
    fireEvent.click(deleteButton);
    expect(mockProps.handleDelete).toHaveBeenCalled();
  });

  test("should call handleCancel when 'Cancel' button is clicked", () => {
    render(<ModalToggle {...mockProps} />);
    const cancelButton = screen.getByTestId("cancel-button");
    fireEvent.click(cancelButton);
    expect(mockProps.handleCancel).toHaveBeenCalled();
  });

  test("should render CategoryEditForm when modalOpenForm is true", () => {
    const updatedProps = {
      ...mockProps,
      modalOpenForm: true,
    };
    render(<ModalToggle {...updatedProps} />);
    screen.getByTestId("category-edit-form");
  });
});
