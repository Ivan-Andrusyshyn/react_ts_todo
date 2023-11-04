import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "./index";
import { MemoryRouter } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import { currentUser } from "../../jestMock/mockValue";
import ContextMockWrapper from "../../jestMock";

describe("Login Component", () => {
  let registrationComponent: JSX.Element;
  beforeEach(() => {
    registrationComponent = (
      <MemoryRouter initialEntries={["/react_ts_todo/login"]}>
        <ContextMockWrapper>
          <SignUp />
        </ContextMockWrapper>
      </MemoryRouter>
    );
  });
  test("Renders Login component", () => {
    render(registrationComponent);
    screen.getByTestId("signUpPage");
  });

  test("Handles form submission with valid input", () => {
    render(registrationComponent);

    const nameInput = screen.getByTestId("inputName");
    const emailInput = screen.getByTestId("inputEmail");
    const passwordInput = screen.getByTestId("inputPassword");
    const submitButton = screen.getByTestId("btnRegister");
    fireEvent.change(nameInput, { target: { value: "Ivan12" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    expect(currentUser.registration).toHaveBeenCalledWith(
      "test@example.com",
      "testpassword",
      "Ivan12"
    );
  });

  test("Shows an error message for empty input", () => {
    render(registrationComponent);
    const submitButton = screen.getByTestId("btnRegister");

    fireEvent.click(submitButton);

    expect(currentUser.registration).not.toHaveBeenCalled();
    const errorMessage = screen.queryByTestId("error-message");
    expect(errorMessage).not.toBe(0);
  });
});
