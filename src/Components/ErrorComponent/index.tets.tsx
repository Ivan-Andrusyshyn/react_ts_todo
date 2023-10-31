import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorMessageAuth from ".";
describe("Renders an error message", () => {
  test("Renders an error message", () => {
    const errorMessage = "Something went wrong";
    render(<ErrorMessageAuth isError={errorMessage} />);

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();

    screen.getByTestId("error-message");
  });
});
