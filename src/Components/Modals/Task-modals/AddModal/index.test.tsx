import { render, screen, fireEvent } from "@testing-library/react";
import AddModal from ".";
import ContextMockWrapper from "../../../../jestMock";
const handleAddMock = jest.fn();
const taskName = "New Task";

describe("AddModal all", () => {
  let addModalComponent: JSX.Element;
  beforeEach(() => {
    addModalComponent = (
      <ContextMockWrapper>
        <AddModal />
      </ContextMockWrapper>
    );
  });

  test("should add a new task if taskName and category are valid", () => {
    render(addModalComponent);
    const input = screen.getByTestId("inputAddModal");
    const addButton = screen.getByTestId("btnAddModal");
    const options = screen.getByTestId("combobox");
    fireEvent.change(input, { target: { value: taskName } });
    fireEvent.change(options, {
      target: { value: "1" },
    });
    fireEvent.click(addButton);
    expect(handleAddMock).toHaveBeenCalled();
  });

  test("cancel modal by click", () => {
    render(addModalComponent);

    const cancelBtn = screen.getByTestId("btnCancel");

    const backdrop = screen.queryByTestId("backdropModal");
    fireEvent.click(cancelBtn);
    expect(backdrop).not.toBeNull();
  });

  test("Handles input change", () => {
    render(addModalComponent);
    const input: HTMLInputElement = screen.getByTestId("inputAddModal");
    const taskName = "New Task";
    fireEvent.change(input, { target: { value: taskName } });
    expect(input.value).toBe(taskName);
  });

  test("Handles errors", () => {
    render(addModalComponent);

    const addButton = screen.getByTestId("btnAddModal");
    fireEvent.click(addButton);
    screen.getByPlaceholderText("Please enter task name.");
  });

  test("Selects a category", () => {
    render(addModalComponent);

    const input: HTMLInputElement = screen.getByTestId("inputAddModal");
    fireEvent.change(input, { target: { value: "1" } });
    expect(input.value).toBe("1");
  });
});
