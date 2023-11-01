import { render, screen } from "@testing-library/react";
import ErrorMessageAuth from ".";
describe("Renders an error message", () => {
  test("Renders an error message", () => {
    const errorMessage = "Something went wrong";
    render(<ErrorMessageAuth isError={errorMessage} />);
    screen.getByText(errorMessage);
    screen.getByTestId("error-message");
  });
});
