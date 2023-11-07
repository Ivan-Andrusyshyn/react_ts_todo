import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from ".";
import ContextMockWrapper from "../../jestMock";
import { MemoryRouter } from "react-router-dom";
const mockProps = {
  email: {
    value: "",
    handleChange: jest.fn(),
  },
  password: {
    value: "",
    handleChange: jest.fn(),
  },
  showPassword: false,
  error: "",
  isLoading: false,
  isError: null,
  handleLoginClick: jest.fn(),
  setShowPassword: jest.fn(),
  registration: false,
  name: {
    value: "",
    clear: jest.fn(),
    handleChange: jest.fn(),
  },
};
describe("LoginForm Component", () => {
  let loginComponent: JSX.Element;
  beforeEach(() => {
    loginComponent = (
      <MemoryRouter initialEntries={["/react_ts_todo/login"]}>
        <ContextMockWrapper>
          <LoginForm {...mockProps} />
        </ContextMockWrapper>
      </MemoryRouter>
    );
  });
  it("renders the component", () => {
    render(loginComponent);
    screen.getByTestId("login-form");
    screen.getByTestId("inputEmail");
    screen.getByTestId("inputPassword");
    const nameInput = screen.queryByTestId("inputName");
    expect(nameInput).toBeNull();
  });

  it("triggers email input change", () => {
    render(loginComponent);
    const emailInput = screen.getByTestId("inputEmail");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(mockProps.email.handleChange).toHaveBeenCalledWith(
      expect.any(Object)
    );
  });

  it("triggers password input change", () => {
    render(loginComponent);
    const passwordInput = screen.getByTestId("inputPassword");
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(mockProps.password.handleChange).toHaveBeenCalledWith(
      expect.any(Object)
    );
  });

  it("triggers form submit", () => {
    render(loginComponent);
    const form = screen.getByTestId("login-form");
    fireEvent.submit(form);
    expect(mockProps.handleLoginClick).toHaveBeenCalled();
  });

  it("toggles password visibility", () => {
    render(loginComponent);
    const togglePasswordButton = screen.getByTestId("passwordToggle");
    fireEvent.click(togglePasswordButton);
    expect(mockProps.setShowPassword).toHaveBeenCalledWith(true);
  });

  it("renders the name input when registration is true", () => {
    mockProps.registration = true;
    render(loginComponent);
    screen.queryByTestId("inputName");
  });
});
