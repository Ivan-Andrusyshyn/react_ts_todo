import { render, screen, fireEvent } from "@testing-library/react";
import AddButton from ".";
describe("Add-button testing", () => {
  test("renders AddButton component", () => {
    render(<AddButton setShowForm={() => {}} />);
    screen.getByTestId("AddBtn");
  });

  test("calls setShowForm when AddButton is clicked", () => {
    const setShowForm = jest.fn();
    render(<AddButton setShowForm={setShowForm} />);
    const addButton = screen.getByTestId("AddBtn");
    fireEvent.click(addButton);
    expect(setShowForm).toHaveBeenCalled();
  });
});
