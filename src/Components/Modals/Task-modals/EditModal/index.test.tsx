import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EditModal from ".";
import ContextMockWrapper from "../../../../jestMock";
const initialTaskName = " Task Name";
describe("AddModal all", () => {
  let editModalComponent: JSX.Element;
  beforeEach(() => {
    editModalComponent = (
      <ContextMockWrapper>
        <EditModal />
      </ContextMockWrapper>
    );
  });
  test("should display the initial taskName value", () => {
    render(editModalComponent);
    const inputTitle: HTMLInputElement = screen.getByTestId("inputTitle");
    expect(inputTitle.value).toBe(initialTaskName);
  });

  test("should update taskName when typing", () => {
    render(editModalComponent);
    const inputTitle: HTMLInputElement = screen.getByTestId("inputTitle");
    fireEvent.change(inputTitle, { target: { value: "New Task Name" } });
    expect(inputTitle.value).toBe("New Task Name");
  });

  test("should call handleEdit when Edit button is clicked", () => {
    render(editModalComponent);
    const editButton = screen.getByTestId("edit_btn");
    fireEvent.click(editButton);
  });

  test("should call handleCancel when Cancel button is clicked", () => {
    render(editModalComponent);
    const cancelButton = screen.getByTestId("cancel_btn");
    fireEvent.click(cancelButton);
  });
});
