import { render, screen, fireEvent } from "@testing-library/react";
import DeleteModal from ".";
import {
  DeleteContextMock,
  TaskListContextMock,
} from "../../../../jestMock/mockValue";
import ContextMockWrapper from "../../../../jestMock";

describe("DeleteModal", () => {
  let deleteModalComponent: JSX.Element;

  beforeEach(() => {
    deleteModalComponent = (
      <ContextMockWrapper>
        <DeleteModal />
      </ContextMockWrapper>
    );
  });

  test("should render DeleteModal", () => {
    render(deleteModalComponent);
    screen.getByTestId("deleteModal_title");

    screen.getByTestId("delete_btn");

    screen.getByTestId("cancel_btn");
  });

  test("should call deleteTask when confirm button is clicked", () => {
    render(deleteModalComponent);
    const confirmButton = screen.getByTestId("delete_btn");

    fireEvent.click(confirmButton);
    expect(TaskListContextMock.deleteTask).toHaveBeenCalledWith(42);
    expect(DeleteContextMock.setId).toHaveBeenCalledWith(0);
    expect(DeleteContextMock.setShowDelete).toHaveBeenCalledWith(false);
  });

  test("should call setShowDelete with false when cancel button is clicked", () => {
    render(deleteModalComponent);
    const cancelButton = screen.getByTestId("cancel_btn");
    fireEvent.click(cancelButton);
    expect(DeleteContextMock.setShowDelete).toHaveBeenCalledWith(false);
  });
});
