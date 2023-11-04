import { render, screen, fireEvent } from "@testing-library/react";
import AddModal from ".";
import { MemoryRouter } from "react-router-dom";
import ContextMockWrapper from "../../../../jestMock";
const categList = [{ id: "8", name: "test 1", color: "#000" }];

describe("AddModal all", () => {
  let addModalComponent: JSX.Element;
  const taskName = "New Task";
  const taskCat = 0;
  beforeEach(() => {
    addModalComponent = (
      <MemoryRouter initialEntries={["/react_ts_todo/categorie/w"]}>
        <ContextMockWrapper>
          <AddModal />
        </ContextMockWrapper>
      </MemoryRouter>
    );
  });
  test("should add a new task if taskName and category are valid", () => {
    render(addModalComponent);
    const handleAdd = jest.fn();
    const input = screen.getByTestId("input");
    const addButton = screen.getByTestId("btnAdd");
    fireEvent.change(input, { target: { value: taskName } });
    fireEvent.click(addButton);
    const objectTest = {
      id: expect.any(Number),
      title: taskName,
      categorie: categList[taskCat].name,
      color: "blue",
      done: false,
      date: expect.any(Date),
    };
    expect(handleAdd).toHaveBeenCalledWith(expect.objectContaining(objectTest));
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

    const select: HTMLInputElement = screen.getByTestId("input");
    fireEvent.change(select, { target: { value: "1" } });
    expect(select.value).toBe("1");
  });
});
