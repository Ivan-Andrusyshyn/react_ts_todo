import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalToggle from ".";
import { mockPropsModalToggle } from "../../../../jestMock/mockValue";

describe("ModalToggle Component", () => {
  test("should render the modal content", () => {
    render(<ModalToggle {...mockPropsModalToggle} />);
    screen.getByTestId("modal-title");
    screen.getByTestId("edit-button");
    screen.getByTestId("delete-button");
    screen.getByTestId("cancel-button");
  });

  test("should call showFormForEdit when 'Edit' button is clicked", () => {
    render(<ModalToggle {...mockPropsModalToggle} />);
    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);
    expect(mockPropsModalToggle.showFormForEdit).toHaveBeenCalled();
  });

  test("should call handleDelete when 'Delete' button is clicked", () => {
    render(<ModalToggle {...mockPropsModalToggle} />);
    const deleteButton = screen.getByTestId("delete-button");
    fireEvent.click(deleteButton);
    expect(mockPropsModalToggle.handleDelete).toHaveBeenCalled();
  });

  test("should call handleCancel when 'Cancel' button is clicked", () => {
    render(<ModalToggle {...mockPropsModalToggle} />);
    const cancelButton = screen.getByTestId("cancel-button");
    fireEvent.click(cancelButton);
    expect(mockPropsModalToggle.handleCancel).toHaveBeenCalled();
  });

  test("should render CategoryEditForm when modalOpenForm is true", () => {
    const updatedProps = {
      ...mockPropsModalToggle,
      modalOpenForm: true,
    };
    render(<ModalToggle {...updatedProps} />);
    screen.getByTestId("category-edit-form");
  });
});
