import { fireEvent, render, screen } from "@testing-library/react";
import CategoryEditForm from "./Modal/CategorieEditForm";

test("CategoryEditForm зберігає зміни", () => {
  const onSaveMock = jest.fn();

  render(
    <CategoryEditForm
      initialName="Initial Name"
      initialColor="#ff0000"
      onCancel={() => {}}
      openModal={true}
      onSave={onSaveMock}
    />
  );

  fireEvent.change(screen.getByDisplayValue("Initial Name"), {
    target: { value: "New Name" },
  });
  fireEvent.change(screen.getByDisplayValue("#ff0000"), {
    target: { value: "#00ff00" },
  });

  fireEvent.submit(screen.getByTestId("addBtn"));

  expect(onSaveMock).toHaveBeenCalledWith("New Name", "#00ff00");
});
