import { render, screen, fireEvent } from "@testing-library/react";
import AddModal from ".";
import ContextMockWrapper from "../../../../jestMock";
const handleAddMock = jest.fn();

describe("AddModal all", () => {
  let addModalComponent: JSX.Element;
  const taskName = "New Task";
  beforeEach(() => {
    addModalComponent = (
      <ContextMockWrapper>
        <AddModal />
      </ContextMockWrapper>
    );
  });
  test("should add a new task if taskName and category are valid", () => {
    render(addModalComponent);
    const input = screen.getByTestId("input");
    const addButton = screen.getByTestId("btnAdd");
    fireEvent.change(input, { target: { value: taskName } });
    fireEvent.change(screen.getByTestId("combobox"), {
      target: { value: "1" },
    });
    fireEvent.click(addButton);
    screen.getByTestId("combobox");
    expect(handleAddMock).toHaveBeenCalled();
  });

  test("cancel modal by click", () => {
    render(addModalComponent);

    const cancelBtn = screen.getByTestId("btnCancel");

    const backdrop = screen.queryByTestId("backdropModal");
    fireEvent.click(cancelBtn);
    expect(backdrop).not.toBeNull();
  });

  test("Renders AddModal and handles input", () => {
    render(addModalComponent);
    screen.getByTestId("input");
    screen.getByTestId("btnCancel");

    const input: HTMLInputElement = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: taskName } });
    expect(input.value).toBe(taskName);
  });

  test("Handles errors", () => {
    render(addModalComponent);

    const addButton = screen.getByTestId("btnAdd");
    fireEvent.click(addButton);
    screen.getByPlaceholderText("Please enter task name.");
  });

  test("Selects a category", () => {
    render(addModalComponent);

    const input: HTMLInputElement = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "1" } });
    expect(input.value).toBe("1");
  });
});
