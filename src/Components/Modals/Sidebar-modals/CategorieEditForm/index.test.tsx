import { render, screen, fireEvent } from "@testing-library/react";
import CategoryEditForm from ".";

describe("CategoryEditForm Component", () => {
  const mockProps = {
    initialName: "Category 1",
    initialColor: "#FF5733",
    onSave: jest.fn(),
  };
  test("should call the onSave function when the 'Save' button is clicked", () => {
    render(
      <CategoryEditForm onCancel={jest.fn()} openModal={false} {...mockProps} />
    );
    screen.getByTestId("category-edit-form");

    const titleInput = screen.getByTestId("title-input");
    fireEvent.change(titleInput, { target: { value: "Updated Category" } });
    const saveButton = screen.getByTestId("addBtn");
    const colorInput = screen.getByTestId("color-input");
    fireEvent.change(colorInput, { target: { value: "#00FF00" } });
    fireEvent.click(saveButton);
    expect(mockProps.onSave).toHaveBeenCalledWith(
      expect.stringMatching(/^Updated Category$/i),
      expect.stringMatching(/^#00FF00$/i)
    );
  });
});
